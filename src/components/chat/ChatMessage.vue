<script lang="ts">
import { PropType, defineComponent } from 'vue';

export interface ChatMessageInterface {
  id: number,
  body: string,
  time: number,
  createdAt: number,
};

export default defineComponent({
  props: {
    message: {
      type: Object as PropType<ChatMessageInterface>,
    },
  },
});
</script>
