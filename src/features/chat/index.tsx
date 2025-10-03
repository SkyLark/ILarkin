import { useChat } from './hooks/useChat';
import ChatBar from './components/ChatBar';
import ChatList from './components/ChatList';

export default function Chat() {
  const { messages, send, stop, isGenerating } = useChat();

  return (
    <>
      <ChatList messages={messages} />
      <div className="absolute bottom-0 left-0 right-0">
        <ChatBar send={send} stop={stop} isGenerating={isGenerating} />
      </div>
    </>
  );
}
