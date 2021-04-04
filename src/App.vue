<script lang="ts">
import { defineComponent } from 'vue';
import Chat from './components/Chat.vue';
import Video from './components/Video.vue';

export default defineComponent({
  components: {
    Chat,
    Video,
  },
});
</script>

<template>
  <main
    class="app__player"
  >
    <Video
      class="app__player-video"
      src="/big_buck_bunny.mp4"
    />

    <button>
      Play
    </button>
  </main>

  <Chat
    class="app__chat"
  />
</template>

<style lang="postcss">
.app {
  &__player {
    display: flex;
    flex-direction: column;
  }

  &__chat {
    width: 380px;
    margin-left: 32px;
  }
}
</style>
