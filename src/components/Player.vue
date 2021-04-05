<script lang="ts">
import PlayIcon from './icon/Play.vue';
import PauseIcon from './icon/Pause.vue';
import Video, { PLAYER_OPTIONS } from './Video.vue';
import ButtonIcon from './Button.vue';
import { ButtonInterface } from './Button.vue';
import { computed, defineComponent, watch, ref, VNode } from 'vue';
import { useVideojs } from '../use/videojs';
import { debouncedWatch } from '@vueuse/core';

export default defineComponent({
  props: {
    time: {
      type: Number,
    },
  },

  emits: {
    'update:time': (payload: number): boolean => typeof payload === 'number' && payload >= 0,
  },

  components: {
    Video,
    ButtonIcon,
  },

  setup (props, { emit }) {
    const video = ref<VNode | null>(null);
    const status = ref<boolean>(false);

    const { time, play, pause } = useVideojs(video, PLAYER_OPTIONS, (): void => {
      status.value = false;
    });

    const action = computed((): ButtonInterface => {
      if (status.value) {
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

    const handleActionClick = (): void => {
      status.value = ! status.value;
    };

    watch(
      status,

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

    debouncedWatch(
      () => time.current,
      (current: number): void => emit('update:time', current),
      {
        debounce: 100,
      },
    );

    return {
      time,
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
        v-text="time"
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
