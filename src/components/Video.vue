<script lang="ts">
import { VideoJsPlayerOptions } from 'video.js';
import { defineComponent, ref } from 'vue';

export const PLAYER_OPTIONS = <VideoJsPlayerOptions>{
  controls: true,
  preload: 'auto',
  bigPlayButton: false,

  userActions: {
    hotkeys: false,
    doubleClick: false,
  },

  controlBar: {
    playToggle: false,
    fullscreenToggle: false,
    remainingTimeDisplay: false,
    pictureInPictureToggle: false,
  },
};

export default defineComponent({
  props: {
    src: {
      type: String,
    },
  },

  setup () {
    const target = ref<HTMLCanvasElement | null>(null);

    return {
      target,
    };
  },
});
</script>

<template>
  <div
    class="video video-js"
  >
    <video
      ref="target"
      class="video__player"
    >
      <source
        :src="src"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<style lang="postcss">
.video {
  width: auto;
  height: auto;
  background: var(--color-gray-darkest);

  .vjs-tech {
    pointer-events: none;
  }
}
</style>
