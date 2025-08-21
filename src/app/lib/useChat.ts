// lib/useChat.ts
import { useRef, useState } from 'react';

type Msg = { role: 'user' | 'assistant' | 'system'; content: string };

export function useChat(model = 'llama3.1:8b') {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  function stop() {
    abortRef.current?.abort(); // <— stops the request & model
    setIsGenerating(false);
  }

  async function send(input: string) {
    if (!input.trim() || isGenerating) return;

    const next: Msg[] = [...messages, { role: 'user', content: input.trim() }];
    setMessages(next);
    setIsGenerating(true);

    abortRef.current?.abort();
    abortRef.current = new AbortController();

    const res = await fetch('/api/ollama', {
      method: 'POST',
      body: JSON.stringify({ messages: next, model }),
      signal: abortRef.current.signal,
    });

    // Prepare assistant bubble
    setMessages((m) => [...m, { role: 'assistant', content: '' }]);

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();
    let buf = '';

    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });

        const lines = buf.split('\n');
        buf = lines.pop() || ''; // keep partial for next loop

        for (const line of lines) {
          if (!line.trim()) continue;
          const evt = JSON.parse(line);

          // Ollama NDJSON has incremental content on evt.message.content
          if (evt?.message?.content) {
            const delta: string = evt.message.content;
            setMessages((m) => {
              const copy = [...m];
              copy[copy.length - 1] = {
                ...copy[copy.length - 1],
                content: copy[copy.length - 1].content + delta,
              };
              return copy;
            });
          }

          // Final line contains { done: true }
          if (evt?.done === true) {
            setIsGenerating(false);
          }
        }
      }
    } catch (err: any) {
      // AbortError means user pressed Stop
      // (you can optionally tag the last message as “stopped”)
    } finally {
      setIsGenerating(false);
    }
  }

  return { messages, isGenerating, send, stop };
}
