<script setup lang="ts">
import { ref } from '@vue/reactivity';
import Chat from './components/Chat.vue';
import Player from './components/Player.vue';

const playing = ref<boolean>(false);
</script>

<template>
  <Player
    class="app__player"
    v-model:status="playing"
  />

  <Chat
    class="app__chat"
  />
</template>

<style lang="postcss">
.app {
  &__chat {
    width: 380px;
    margin-left: 32px;
  }
}
</style>
