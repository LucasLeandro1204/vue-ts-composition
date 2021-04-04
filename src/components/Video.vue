<script lang="ts">
import { defineComponent } from 'vue';
import videojs, { VideoJsPlayer } from 'video.js';
import { ref, watch } from '@vue/runtime-core';

export default defineComponent({
  props: {
    src: {
      type: String,
    },
  },

  setup (): object {
    const video = ref<VideoJsPlayer | null>(null);
    const target = ref<HTMLCanvasElement | null>(null);

    watch(
      target,
      (element): void => {
        video.value = videojs(element);
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
    class="video"
  >
    <video
      class="video-js"
      ref="target"
      controls
      preload="auto"
      fluid
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
  .vjs-time-control,
  .vjs-play-control,
  .vjs-big-play-button,
  .vjs-fullscreen-control,
  .vjs-picture-in-picture-control {
    display: none;
  }
}
</style>
