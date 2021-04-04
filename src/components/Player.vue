<script lang="ts">
import { defineComponent } from 'vue';
import videojs from 'video.js';
import { ref, watch } from '@vue/runtime-core';
import 'video.js/dist/video-js.min.css';

export default defineComponent({
  setup () {
    const video = ref<HTMLCanvasElement | null>();

    watch(
      video,
      (element, _, onCleanup): void => {
        const instance = videojs(element);

        console.dir(instance)

        onCleanup((): void => {

        });
      },
      {
        flush: 'post',
      },
    );
  },
});
</script>

<template>
  <div
    class="player"
  >
    <video
      src="../assets/big_buck_bunny.mp4"
      ref="video"
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
