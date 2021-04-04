<script lang="ts">
import PlayIcon from './icon/Play.vue';
import Video from './Video.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Video,
    PlayIcon,
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
      <PlayIcon
        class="player__action-icon"
      />

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
    display: flex;
    width: 116px;
    border-radius: 4px;
    letter-spacing: .8px;
    align-items: center;
    color: var(--color-white);
    padding: 12px 0 12px 16px;
    border: 1px solid var(--color-gray);

    &-icon {
      width: 20px;
      height: 20px;
      margin-right: 12px;
    }

    &:hover {
      background-color: var(--color-gray-darker);
    }
  }
}
</style>
