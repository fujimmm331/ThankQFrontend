<script setup lang="ts">
import type { ImgItemType } from './Type';

defineProps<{
  imgItem: ImgItemType,
}>();



</script>

<template>
  <div
    class="carousel-item w-full"
  >
    <img
      class="w-full aspect-square"
      :src="imgItem.url"
    >
  </div>
</template>
