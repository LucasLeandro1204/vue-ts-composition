<script lang="ts">
import { PropType, defineComponent, toRef } from 'vue';
import { FormatedTimeRef, useFormatedTime } from '../../use/time';

export interface ChatMessageInterface {
  id: number,
  body: string,
  time: number,
  author: string,
};

export default defineComponent({
  props: {
    message: {
      type: Object as PropType<ChatMessageInterface>,
      required: true,
    },
  },

  setup (props) {
    const formated: FormatedTimeRef = useFormatedTime(toRef(props.message, 'time'));

    return {
      formated,
    };
  },
});
</script>

<template>
  <p
    class="chat__message"
  >
    <span
      class="chat__message-time"
    >
      {{ formated }} -

      <span
        class="chat__message-ago"
      >
        {{ message.author }}
      </span>
    </span>

    {{ message.body }}
  </p>
</template>

<style lang="postcss">
.chat__message {
  display: flex;
  flex-direction: column;

  &-time {
    opacity: .7;
    font-size: 14px;

    &-ago {
      font-weight: 300;
      font-size: 12px;
    }
  }
}
</style>
