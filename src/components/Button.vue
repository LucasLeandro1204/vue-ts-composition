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
