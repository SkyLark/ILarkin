'use client';

import { TextArea, IconButton } from '@radix-ui/themes';
import React, { useState } from 'react';
import { useChat } from '../lib/useChat';
import ChatList from './ChatList';

export default function ChatBar() {
  const [value, setValue] = useState('');
  const { messages, send, stop, isGenerating } = useChat();
  const handleChatApply = () => {
    send(value);
    setValue('');
  };

  const handleStop = () => {
    stop();
  };

  const mockMessages = [
    { role: 'user', content: 'Hello, how are you?' },
    { role: 'assistant', content: 'I am fine, thank you! How can I assist you today?' },
    { role: 'user', content: 'Can you tell me a joke?' },
    {
      role: 'assistant',
      content: 'Sure! Why don’t skeletons fight each other? They don’t have the guts.',
    },
    { role: 'user', content: 'That’s a good one!' },
    { role: 'assistant', content: 'Glad you liked it! Do you need help with anything else?' },
    { role: 'user', content: 'No, that will be all for now.' },
    { role: 'user', content: 'Hello, how are you?' },
    { role: 'assistant', content: 'I am fine, thank you! How can I assist you today?' },
    { role: 'user', content: 'Can you tell me a joke?' },
    {
      role: 'assistant',
      content: 'Sure! Why don’t skeletons fight each other? They don’t have the guts.',
    },
    { role: 'user', content: 'That’s a good one!' },
    { role: 'assistant', content: 'Glad you liked it! Do you need help with anything else?' },
    { role: 'user', content: 'No, that will be all for now.' },
  ];

  return (
    <div className="relative flex flex-col justify-center w-full ">
      <ChatList messages={messages} />

      <div className="relative flex justify-center min-h-[40px] w-full mb-10">
        <TextArea
          placeholder="Ask anything"
          className="w-full"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
          <IconButton
            type="button"
            radius="full"
            variant="soft"
            color="bronze"
            onClick={isGenerating ? handleStop : handleChatApply}
          >
            {!isGenerating && (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
              >
                <path d="M8.99992 16V6.41407L5.70696 9.70704C5.31643 10.0976 4.68342 10.0976 4.29289 9.70704C3.90237 9.31652 3.90237 8.6835 4.29289 8.29298L9.29289 3.29298L9.36907 3.22462C9.76184 2.90427 10.3408 2.92686 10.707 3.29298L15.707 8.29298L15.7753 8.36915C16.0957 8.76192 16.0731 9.34092 15.707 9.70704C15.3408 10.0732 14.7618 10.0958 14.3691 9.7754L14.2929 9.70704L10.9999 6.41407V16C10.9999 16.5523 10.5522 17 9.99992 17C9.44764 17 8.99992 16.5523 8.99992 16Z"></path>
              </svg>
            )}
            {isGenerating && (
              <>
                <span className="absolute right-0 top-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#1C1B1F"
                >
                  <path d="M240-240v-480h480v480H240Z" />
                </svg>
              </>
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
}
