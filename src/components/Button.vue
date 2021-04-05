<script lang="ts">
import { PropType, Component, defineComponent } from 'vue';

export interface ButtonInterface {
  text: string,
  icon: Component,
};

export default defineComponent({
  props: {
    action: {
      type: Object as PropType<ButtonInterface>,
      required: true,
    },
  },

  emits: {
    click: (): boolean => true,
  },

  setup (_, { emit }) {
    const handleClick = (): void => emit('click');

    return {
      handleClick,
    }
  },
});
</script>

<template
  inherit-attrs="false"
>
  <button
    class="button"
    @click.prevent="handleClick"
  >
    <Component
      :is="action.icon"
      class="button__icon"
    />

    {{ action.text }}
  </button>
</template>

<style lang="postcss">
.button {
  display: flex;
  width: 116px;
  border-radius: 4px;
  letter-spacing: .8px;
  align-items: center;
  color: var(--color-white);
  padding: 12px 0 12px 16px;
  border: 1px solid var(--color-gray);

  &__icon {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }

  &:hover {
    background-color: var(--color-gray-darker);
  }
}
</style>
