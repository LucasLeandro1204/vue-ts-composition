<script lang="ts">
import { defineComponent } from 'vue';
import Video from './components/Video.vue';

export default defineComponent({
  components: {
    Video,
  },
});
</script>

<template>
  <div
    class="app"
  >
    <div
      class="app__player"
    >
      <Video
        class="app__video"
        src="../assets/big_buck_bunny.mp4"
      />

      <button>

      </button>
    </div>
  </div>
</template>

<style lang="postcss">
.app {
  display: flex;

  &__video {

  }
}
</style>
