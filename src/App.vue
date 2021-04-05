<script setup lang="ts">
import Chat from './components/Chat.vue';
import Player from './components/Player.vue';
</script>

<template>
  <Player
    class="app__player"
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
