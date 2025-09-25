'use client';
import React, { useState } from 'react';
// import { TopMenu } from './TopMenu';
import ChatBar from './components/ChatBar';
import ChatList from './components/ChatList';
import type { ChatMessage } from '../types/chat';

export default function Home() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  return (
    <div className="flex flex-col h-full w-full bg-white">
      <div className="relative flex gap-2 h-full w-full flex-1 transition-colors z-0">
        {/* Side bar */}
        <div className="w-64 shadow-[1px_0_0_0_rgba(107,114,128,0.2)] bg-gray-100">
          {/* Side bar content */}
        </div>
        {/* Chat list */}
        <div className="relative flex h-screen max-w-full flex-1 flex-col">
          <main className="relative h-full w-full flex-1">
            <div
              role="presentation"
              className="flex h-full flex-col focus-visible:outline-0 overflow-hidden"
            >
              <header className="sticky top-0 p-2 mb-5 flex items-center justify-between z-20 bg-white shadow-[0_1px_0_0_rgba(107,114,128,0.2)]">
                <h1 className="text-lg font-normal">ILarkin Chat</h1>
              </header>
              <div className="relative flex basis-auto flex-col grow overflow-hidden">
                <div className="relative h-full">
                  <div className="flex h-[calc(100vh-160px)] flex-col">
                    <div className="flex flex-col text-sm">
                      <ChatList messages={messages} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-5 left-0 right-0">
                <ChatBar setMessages={setMessages} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
