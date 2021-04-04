<script lang="ts">
import { defineComponent } from 'vue';
import videojs, { VideoJsPlayer } from 'video.js';
import { ref, watch } from '@vue/runtime-core';

export default defineComponent({
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
      src="../assets/big_buck_bunny.mp4"
      class="video-js"
      controls
      preload="auto"
      fluid
    >
      <source
        src="../assets/big_buck_bunny.mp4"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<style lang="postcss">
.video {
  /* background-color: var(--color-black); */
}
</style>
