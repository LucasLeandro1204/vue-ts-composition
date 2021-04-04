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
      class="app__player-video"
      src="/big_buck_bunny.mp4"
    />

    <button>
      Play
    </button>
  </div>
</template>

<style lang="postcss">
.app {
  &__player {
    flex: 1;
    display: flex;
    flex-direction: column;

    &-video {
      width: 100%;
      height: max-content;
    }
  }
}
</style>
