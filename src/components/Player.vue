<script lang="ts">
import { defineComponent } from 'vue'
import Video from './Video.vue';

export default defineComponent({
  components: {
    Video,
  },
})
</script>

<template>
  <main
    class="player"
  >
    <Video
      class="player__video"
      src="/big_buck_bunny.mp4"
    />

    <button
      class="player__action"
    >
      PLAY
    </button>
  </main>
</template>

<style lang="postcss">
.player {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__video {
    margin-bottom: 16px;
  }

  &__action {
    padding: 8px 16px;
    border-radius: 4px;
    color: var(--color-white);
    border: 1px solid var(--color-gray);

    &:hover {
      background-color: var(--color-gray-darker);
    }
  }
}
</style>
