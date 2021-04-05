<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ChatMessage, { ChatMessageInterface } from './ChatMessage.vue';

export type ChatMessageArray = Array<ChatMessageInterface>;

export default defineComponent({
  components: {
    ChatMessage,
  },

  props: {
    messages: {
      type: Array as PropType<ChatMessageArray>,
      required: false,
      default: () => ([]),
    },
  },
});
</script>


<template>
  <aside
    class="chat"
  >
    <ChatMessage
      :key="message.id"
      :message="message"
      v-for="message in messages"
    />
  </aside>
</template>

<style lang="postcss">
.chat {
  display: flex;
  overflow-y: auto;
  padding: 16px 24px;
  flex-direction: column;
  color: var(--color-white);
  border: 1px solid var(--color-gray-darker);

  &__message {
    margin: 8px 0;
  }
}
</style>
