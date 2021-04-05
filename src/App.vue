<script lang="ts">
import { ComputedRef, ref } from '@vue/reactivity';
import { computed, defineComponent } from 'vue-demi';
import Chat, { ChatMessageArray } from './components/Chat/Chat.vue';
import Player from './components/Player.vue';
import fakeMessages from './messages';

export default defineComponent({
  components: {
    Chat,
    Player,
  },

  setup () {
    const playing = ref<boolean>(false);
    const messages: ComputedRef<ChatMessageArray> = computed((): ChatMessageArray => fakeMessages);

    return {
      playing,
      messages,
    };
  },
});
</script>

<template>
  <Player
    class="app__player"
    v-model:status="playing"
  />

  <Chat
    class="app__chat"
    :messages="messages"
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
