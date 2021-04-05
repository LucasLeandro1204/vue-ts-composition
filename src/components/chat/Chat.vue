<script lang="ts">
import { computed, ComputedRef, defineComponent, PropType } from 'vue';
import ChatMessage, { ChatMessageInterface } from './ChatMessage.vue';

export default defineComponent({
  components: {
    ChatMessage,
  },

  props: {
    messages: {
      type: Array as PropType<ChatMessageInterface[]>,
      required: false,
      default: () => ([]),
    },

    currentTime: {
      type: Number,
      required: false,
      default: 0,
    },
  },

  setup (props) {
    const filtered: ComputedRef<ChatMessageInterface[]> = computed(
      (): ChatMessageInterface[] => props.messages.filter(message => props.currentTime > message.time)
    );

    return {
      filtered,
    };
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
      v-for="message in filtered"
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
