import type { ChatMessage } from '../types/chat';

export const mockMessages: ChatMessage[] = [
  {
    role: 'user',
    content: 'Hello!',
  },
  {
    role: 'assistant',
    content: 'Hi! How can I help you?',
  },
  {
    role: 'user',
    content: 'Tell me a joke.',
  },
  {
    role: 'assistant',
    content: 'Why did the developer go broke? Because he used up all his cache!',
  },
];
