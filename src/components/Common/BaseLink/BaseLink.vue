<script setup lang="ts">
import type { ThankQColorType } from '@/themes/color';
import type { BaseTextProps } from './Type';

const props = defineProps<BaseTextProps>();

const btnColor = computed(() => {
  const colorClass: Record<ThankQColorType, string> = {
    'primary': 'link-primary',
    'secondary': 'link-secondary',
    'accent': 'link-accent',
    'info': 'link-info',
    'success': 'link-success',
    'warning': 'link-warning',
    'error': 'link-error'
  }
  return props.color ? colorClass[props.color] : 'link-neutral'
})


</script>

<template>
  <a
    class="link"
    :class="[btnColor]"
    href="https://daisyui.com/components/link/"
  >
    <slot />
  </a>
</template>
