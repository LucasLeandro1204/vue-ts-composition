<script lang="ts">
import { defineComponent } from 'vue';
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js';
import { ref, watch } from '@vue/runtime-core';

export const PLAYER_OPTIONS = <VideoJsPlayerOptions>{
  fluid: true,
  preload: 'auto',
  controls: true,
  bigPlayButton: false,

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

  setup (): object {
    const target = ref<HTMLCanvasElement | null>(null);

    watch(
      target,
      (element, _, onCleanup): void => {
        const player: VideoJsPlayer = videojs(element, PLAYER_OPTIONS);

        onCleanup((): void => {
          player.pause();
          player.dispose();
        });
      },
      {
        flush: 'post',
      },
    );

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
  width: 100%;
  height: 100%;
  background: var(--color-gray-darker);
}
</style>
