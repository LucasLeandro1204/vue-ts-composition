<script lang="ts">
import PlayIcon from './icon/Play.vue';
import PauseIcon from './icon/Pause.vue';
import Video, { PLAYER_OPTIONS } from './Video.vue';
import ButtonIcon from './Button.vue';
import { ButtonInterface } from './Button.vue';
import { computed, defineComponent, watch, ref, VNodeRef } from 'vue';
import videojs, { VideoJsPlayer } from 'video.js';

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
    status: (payload: boolean): boolean => typeof payload === 'boolean',
  },

  components: {
    Video,
    ButtonIcon,
  },

  setup (props, { emit }) {
    const video = ref<VNodeRef | null>(null);
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

    const handleActionClick = (): void => emit('status', ! props.status);

    watch(
      video,
      ({ target }, _, onCleanup): void => {
        const player: VideoJsPlayer = videojs(target, PLAYER_OPTIONS);

        player.on('timeupdate', (): void => {
          console.log(player.currentTime());
        });

        onCleanup((): void => {
          player.pause();
          player.dispose();
        });
      },
      {
        flush: 'post',
      },
    );

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
