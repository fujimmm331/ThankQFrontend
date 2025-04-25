import { defineStore } from 'pinia'
import type { Message } from '@/models/message'

export const useMessageStore = defineStore('message', () => {
  const messages = ref<Record<string, Message[] | undefined>>({});
  function setMessages(key: string, _messages: Message[]) {
    messages.value[key] = _messages
  }

  function findMessage(key: string) {
    return messages.value[key]
  }

  return { setMessages, findMessage, messages }
})
