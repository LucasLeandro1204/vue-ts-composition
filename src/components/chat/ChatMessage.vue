<script lang="ts">
import { PropType, Component, defineComponent } from 'vue';

export interface ChatMessageInterface {
  body: string,
  time: number,
  createdAt: Date,
};

export default defineComponent({
  props: {
    message: {
      type: Object as PropType<ChatMessageInterface>,
    },
  },
});
</script>
