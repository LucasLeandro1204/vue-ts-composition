<script lang="ts">
import PlayIcon from './icon/Play.vue';
import PauseIcon from './icon/Pause.vue';
import Video, { PLAYER_OPTIONS } from './Video.vue';
import ButtonIcon from './Button.vue';
import { ButtonInterface } from './Button.vue';
import { computed, defineComponent, watch, ref, Ref, VNode, toRef } from 'vue';
import videojs, { VideoJsPlayer } from 'video.js';
import { useVideojs } from '../use/videojs';
import { useVModel } from '@vueuse/core';

export default defineComponent({
  props: {
    /**
     * Player status.
     * true = playing
     * false = paused
     */
    status: {
      type: Boolean,
    },
  },

  emits: {
    'update:status': (payload: boolean): boolean => typeof payload === 'boolean',
  },

  components: {
    Video,
    ButtonIcon,
  },

  setup (props, { emit }) {
    const video = ref<VNode | null>(null);
    const status = useVModel(props, 'status', emit);

    const player = useVideojs(video, PLAYER_OPTIONS, (): void => {
      status.value = false;
    });

    const action = computed((): ButtonInterface => {
      if (props.status) {
        return {
          text: 'PAUSE',
          icon: PauseIcon,
        };
      }

      return {
        text: 'PLAY',
        icon: PlayIcon,
      };
    });

    watch(
      () => props.status,

      (status): void => {
        if (status) {
          player.play();

          return;
        }

        player.pause();
      },

      {
        immediate: true,
      },
    );

    const handleActionClick = (): void => {
      status.value = ! status.value;
    };

    return {
      video,
      action,
      handleActionClick,
    };
  },
});
</script>

<template>
  <main
    class="player"
  >
    <Video
      class="player__video"
      src="/big_buck_bunny.mp4"
      ref="video"
    />

    <ButtonIcon
      :action="action"
      @click="handleActionClick"
    />
  </main>
</template>

<style lang="postcss">
.player {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__video {
    margin-bottom: 16px;
  }

  &__action {
    display: flex;
    width: 116px;
    border-radius: 4px;
    letter-spacing: .8px;
    align-items: center;
    color: var(--color-white);
    padding: 12px 0 12px 16px;
    border: 1px solid var(--color-gray);

    &-icon {
      width: 20px;
      height: 20px;
      margin-right: 12px;
    }

    &:hover {
      background-color: var(--color-gray-darker);
    }
  }
}
</style>
