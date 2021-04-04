<script lang="ts">
import { defineComponent } from 'vue';
import videojs, { VideoJsPlayer } from 'video.js';
import { nextTick, ref, watch } from '@vue/runtime-core';
import 'video.js/dist/video-js.min.css';

export default defineComponent({
  setup () {
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
    class="player"
  >
    <video
      src="../assets/big_buck_bunny.mp4"
      ref="target"
      class="player__video"
    />
  </div>
</template>

<style lang="postcss">
.player {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: var(--color-black);
}
</style>
