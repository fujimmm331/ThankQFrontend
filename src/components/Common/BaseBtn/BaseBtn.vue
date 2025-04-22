<script setup lang="ts">
import type { ThankQSizeType } from '@/themes/size';
import type { BaseBtnBehaviorType, BaseBtnProps, BaseBtnVariantType } from './Type';
import type { ThankQColorType } from '@/themes/color';

const props = defineProps<BaseBtnProps>()

const btnColor = computed(() => {
  const colorClass: Record<ThankQColorType, string> = {
    'primary': 'btn-primary',
    'secondary': 'btn-secondary',
    'accent': 'btn-accent',
    'info': 'btn-info',
    'success': 'btn-success',
    'warning': 'btn-warning',
    'error': 'btn-error',
    'neutral': 'btn-neutral'
  }
  return colorClass[props.color]
})

const btnSize = computed(() => {
  const sizeClass: Record<ThankQSizeType, string> = {
    'xs': 'btn-xs',
    'sm': 'btn-sm',
    'md': 'btn-md',
    'lg': 'btn-lg',
    'xl': 'btn-xl'
  }
  return sizeClass[props.size];
})

const btnVariant = computed(() => {
  if (!props.variant) {
    return ''
  }
  const variantClass: Record<BaseBtnVariantType, string> = {
    'active': 'btn-active',
    'dash': 'btn-dash',
    'link': 'btn-link',
    'outline': 'btn-outline',
    'soft': 'btn-soft'
  }

  return variantClass[props.variant]
})

const btnBehavior = computed(() => {
  if (!props.behavior) {
    return ''
  }

  const behaviorClass: Record<BaseBtnBehaviorType, string> = {
    'block': 'btn-block',
    'circle': 'btn-circle',
    'square': 'btn-square',
    'wide': 'btn-wide',
  }
  return behaviorClass[props.behavior]
})

</script>

<template>
  <button
    :class="['btn', btnSize, btnColor, btnVariant, btnBehavior]"
  >
    <slot />
  </button>
</template>


