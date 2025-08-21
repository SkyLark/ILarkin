import { TopMenu } from './TopMenu';
import ChatBar from './components/ChatBar';

import { Container, Box } from '@radix-ui/themes';

export default function Home() {
  const handleChatApply = () => {
    // Handle chat apply logic
  };

  return (
    <>
      <TopMenu />
      <div className="grid grid-cols-12 h-full w-full relative bg-white">
        <div className="col-span-9 col-start-4 z-50">
          <ChatBar />
        </div>
      </div>
    </>
  );
}
