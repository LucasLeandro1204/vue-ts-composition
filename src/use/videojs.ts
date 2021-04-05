import { ref, watch, Ref, VNode } from 'vue';
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js';
import { useTime } from './time';

export const useVideojs = (target: Ref<VNode | null>, options: VideoJsPlayerOptions, onEnded?: Function) => {
  const time = useTime();

  const instance = ref<VideoJsPlayer | null>(null);

  const play = (): void => {
    instance.value?.play?.();
  };

  const pause = (): void => {
    instance.value?.pause?.();
  };

  watch(
    target,
    (vnode, _, onCleanup): void => {
      /**
       * Bail if vnode is not set or doesn't have a "target" property
       */
      if (
        vnode === null
        || ! ('target' in vnode)
      ) {
        return;
      }

      const player: VideoJsPlayer = videojs(vnode.target, options);

      instance.value = player;

      player.on('timeupdate', (): void => {
        time.current = player.currentTime();
      });

      player.on('ended', (): void => {
        onEnded?.();
      });

      onCleanup((): void => {
        player.pause();
        player.dispose();

        instance.value = null;
      });
    },
    {
      flush: 'post',
    },
  );

  return {
    time,
    play,
    pause,
    status,
    instance,
  };
};
