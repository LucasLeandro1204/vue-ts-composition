import { ref, watch, Ref, VNode } from 'vue';
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js';

export const useVideojs = (target: Ref<VNode | null>, options: VideoJsPlayerOptions) => {
  const instance = ref<VideoJsPlayer | null>(null);

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

      const player: VideoJsPlayer = instance.value = videojs(vnode.target, options);

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

  return instance;
};
