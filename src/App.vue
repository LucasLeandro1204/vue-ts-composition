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
    <Video
      class="app__video"
    />
  </div>
</template>

<style lang="postcss">

</style>
