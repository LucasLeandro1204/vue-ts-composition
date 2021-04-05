<script lang="ts">
import { defineComponent, Component, PropType } from 'vue';

export interface ButtonInterface {
  text: string,
  icon: Component,
};

export default defineComponent({
  inheritAttrs: false,

  emits: {
    click: (): boolean => true,
  },

  props: {
    action: {
      type: Object as PropType<ButtonIcon>,
    },
  },

  setup (props, { emit }): object {
    const handleClick = (): void => emit('click');

    return {
      handleClick,
    };
  },
})
</script>

<template>
  <button
    class="player__action"
    @click.prevent="handleClick"
  >
    <Component
      :is="action.icon"
      class="player__action-icon"
    />

    {{ action.text }}
  </button>
</template>
