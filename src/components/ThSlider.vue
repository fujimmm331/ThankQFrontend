<script setup lang="ts">

const model = defineModel({ default: 0 })

</script>

<template>
  <input type="range"
         min="0"
         max="100"
         v-model="model"
         class="range text-#D2B48C [--range-progress:#D2B48C] [--range-bg:black] [--range-thumb:black] border border-black border-dashed w-full rounded-lg"
         style="border-image: repeating-linear-gradient(to right, #6b7280 0, #6b7280 10px, transparent 10px, transparent 20px) 1; z-index: 1px;" />
</template>

