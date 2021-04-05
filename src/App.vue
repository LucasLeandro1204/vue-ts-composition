<script lang="ts">
import { ComputedRef, ref } from '@vue/reactivity';
import { computed, defineComponent } from 'vue-demi';
import Chat from './components/chat/Chat.vue';
import { ChatMessageArray } from './components/chat/types';
import Player from './components/Player.vue';
import fakeMessages from './messages';

export default defineComponent({
  components: {
    Chat,
    Player,
  },

  setup () {
    const currentTime = ref<number>(0);
    const playing = ref<boolean>(false);
    const messages: ComputedRef<ChatMessageArray> = computed((): ChatMessageArray => fakeMessages);

    return {
      playing,
      messages,
      currentTime,
    };
  },
});
</script>

<template>
  <Player
    class="app__player"
    v-model:time="currentTime"
  />

  <Chat
    class="app__chat"
    :messages="messages"
    :currentTime="currentTime"
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
