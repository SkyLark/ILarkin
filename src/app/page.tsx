import { TopMenu } from './TopMenu';
import ChatBar from './components/ChatBar';

import { Container, Box } from '@radix-ui/themes';

export default function Home() {
  const handleChatApply = () => {
    // Handle chat apply logic
  };

  return (
    <div className="grid grid-cols-12 h-screen overflow-hidden w-full relative bg-white">
      <TopMenu />
      <div className="col-span-6 h-full w-full col-start-4 z-50">
        <ChatBar />
      </div>
    </div>
  );
}
