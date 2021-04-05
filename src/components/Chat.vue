<script lang="ts">
import { PropType, Component, defineComponent } from 'vue';

export interface ButtonInterface {
  text: string,
  icon: Component,
};

export default defineComponent({
  props: {
    messages: {
    },
  },
});
</script>


<template>
  <aside
    class="chat"
  >
    <p
      class="chat__message"
    >
      <span
        class="chat__time"
      >
        00:00:04 -

        <span
          class="chat__time-ago"
        >
          3 min ago
        </span>
      </span>

      some random message here
    </p>
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
    display: flex;
    margin: 8px 0;
    flex-direction: column;
  }

  &__time {
    opacity: .7;
    font-size: 14px;

    &-ago {
      font-weight: 300;
      font-size: 12px;
    }
  }
}
</style>
