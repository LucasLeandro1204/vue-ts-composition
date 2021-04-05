<script lang="ts">
import PlayIcon from './icon/Play.vue';
import PauseIcon from './icon/Pause.vue';
import Video, { PLAYER_OPTIONS } from './Video.vue';
import ButtonIcon from './Button.vue';
import { ButtonInterface } from './Button.vue';
import { computed, defineComponent, watch, ref, VNode } from 'vue';
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

    const { formatedTime, play, pause } = useVideojs(video, PLAYER_OPTIONS, (): void => {
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
          play();

          return;
        }

        pause();
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
      formatedTime,
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

    <div
      class="player__inline-controls"
    >
      <ButtonIcon
        :action="action"
        @click="handleActionClick"
        class="player__action"
      />

      <span
        class="player__time"
        v-text="formatedTime"
      />
    </div>
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

  &__inline-controls {
    display: flex;
    align-items: center;
  }

  &__time {
    opacity: .7;
    margin-left: 8px;
    color: var(--color-white);
  }
}
</style>
