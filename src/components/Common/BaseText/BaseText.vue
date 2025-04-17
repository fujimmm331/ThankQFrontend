<script setup lang="ts">
import type { ThankQColorType } from '@/themes/color';
import type { BaseTextProps } from './Type';

const props = defineProps<BaseTextProps>();

const btnColor = computed(() => {
  const colorClass: Record<ThankQColorType, string> = {
    'primary': 'text-primary',
    'secondary': 'text-secondary',
    'accent': 'text-accent',
    'info': 'text-info',
    'success': 'text-success',
    'warning': 'text-warning',
    'error': 'text-error'
  }
  return props.color ? colorClass[props.color] : 'text-neutral'
})


</script>

<template>
  <p
    class="tracking-wide text-base"
    :class="[btnColor]"
  >
    <slot />
  </p>
</template>
