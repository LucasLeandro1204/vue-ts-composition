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
    class="app__player"
  >
    <Video
      class="app__video"
      src="/big_buck_bunny.mp4"
    />

    <button>

    </button>
  </div>
</template>

<style lang="postcss">
.app {

  &__player {
    width: 100%;
    height: 100%;
  }
}
</style>
