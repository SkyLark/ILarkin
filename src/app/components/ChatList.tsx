import { useEffect, useLayoutEffect, useRef, useState, useCallback } from 'react';
import type { ChatMessage } from '../../types/chat';

interface Props {
  messages: ChatMessage[];
}

export default function ChatList({ messages }: Props) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [isAtBottom, setIsAtBottom] = useState(true);

  // Track whether user is near the bottom
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    setIsAtBottom(distanceFromBottom < 120); // 120px threshold feels natural
  }, []);

  // Keep at bottom on first paint
  useLayoutEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, []);

  // Auto-scroll when new messages arrive or last message content changes (only if user is at/near bottom)
  const lastMessageContent = messages.length > 0 ? messages[messages.length - 1].content : '';
  useEffect(() => {
    if (isAtBottom) bottomRef.current?.scrollIntoView({ block: 'end' });
  }, [messages.length, lastMessageContent, isAtBottom]);

  // Optional: also react to content reflows (fonts/images) via ResizeObserver
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !('ResizeObserver' in window)) return;
    const ro = new ResizeObserver(() => {
      if (isAtBottom) bottomRef.current?.scrollIntoView({ block: 'end' });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [isAtBottom]);

  return (
    <div className="w-full relative space-y-3 h-[calc(100vh-150px)]">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="overflow-y-auto overflow-x-hidden p-4 space-y-3 flex flex-col h-full"
      >
        {/* Optional: grow spacer keeps messages anchored at bottom visually */}
        <div className={isAtBottom ? 'grow-0' : 'grow'} />

        {messages.map((m, i) => (
          <article
            data-turn={m.role}
            key={i}
            className={`${m.role === 'user' ? 'text-right' : 'text-left'}`}
          >
            <div
              className={
                'inline-block rounded-xl px-3 py-2 ' +
                (m.role === 'user' ? 'bg-gray-900 text-white' : 'bg-gray-100')
              }
            >
              <p>{m.content}</p>
            </div>
          </article>
        ))}

        {/* Sentinel to scroll into view */}
        <div ref={bottomRef} />
      </div>

      {/* Optional: "Jump to latest" button when user is not at bottom */}
      {!isAtBottom && (
        <button
          onClick={() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-gray-900 text-white px-3 py-1 text-sm shadow"
        >
          Jump to latest
        </button>
      )}
    </div>
  );
}
