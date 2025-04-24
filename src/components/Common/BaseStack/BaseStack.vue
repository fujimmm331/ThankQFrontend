<script setup lang="ts">
import type { ThankQSizeType } from '@/themes/size';
import type { BaseStackProps } from './Type';

const props = withDefaults(defineProps<BaseStackProps>(), {
  col: true
});

const gap = computed(() => {
  if (!props.gap) return 'gap-0';
  const _gap: Record<ThankQSizeType, string> = {
    'xs': 'gap-1',
    'sm': 'gap-2',
    'md': 'gap-3',
    'lg': 'gap-4',
    'xl': 'gap-6',
  }
  return _gap[props.gap];
})

const flexCol = computed(() => {
  if (!props.col) return ''
  return 'flex-col'
})
</script>

<template>
  <component
    :is="component"
    class="flex"
    :class="[gap, flexCol]"
  >
    <slot />
  </component>
</template>
