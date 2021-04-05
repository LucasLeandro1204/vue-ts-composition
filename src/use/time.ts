import { ref, Ref, ComputedRef } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

export interface TimeInterface {
  time: Ref<number>,
  formated: ComputedRef<string>,
};

export type TimeRef = TimeInterface['time'];
export type FormatedTime = TimeInterface['formated'];

export const useFormatedTime = (time: TimeRef): FormatedTime =>
  computed((): string => new Date(time.value * 1000).toISOString().substr(11, 8));

export const useTime = (): TimeInterface => {
  const time = ref<number>(0);
  const formated: FormatedTime = useFormatedTime(time);

  return {
    time,
    formated,
  };
};
