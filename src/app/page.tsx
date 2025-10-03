'use client';
import React from 'react';
import Chat from '../features/chat';

export default function LandingPage() {
  return (
    <div className="flex flex-col h-full w-full bg-white">
      <div className="relative flex gap-2 h-full w-full flex-1 transition-colors z-0">
        {/* Side bar */}
        <div className="w-64 shadow-[1px_0_0_0_rgba(107,114,128,0.2)] bg-[#f9f9f9]">
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
              <Chat />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
