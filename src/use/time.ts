import { extendRef } from '@vueuse/core';
import { ref, computed, Ref, ComputedRef, ShallowUnwrapRef } from 'vue';

export interface TimeInterface {
  current: Ref<number>,
  formated: ComputedRef<string>,
};

export type CurrentTimeRef = TimeInterface['current'];
export type FormatedTimeRef = TimeInterface['formated'];

export const useFormatedTime = (time: CurrentTimeRef): FormatedTimeRef =>
  computed((): string => new Date(time.value * 1000).toISOString().substr(11, 8));

export const useTime = (): ShallowUnwrapRef<TimeInterface> => {
  const current: CurrentTimeRef = ref<number>(0);
  const formated: FormatedTimeRef = useFormatedTime(current);

  return extendRef(formated, {
    current,
    formated,
  });
};
