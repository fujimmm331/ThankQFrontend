<script setup lang="ts">
import type { BaseRadioProps } from './Type';

defineProps<BaseRadioProps>();

</script>

<template>
  <label
    class="flex justify-between border-1 p-4 radio-primary
      border-primary rounded-md bg-[#E2F6ED]"
  >
    {{ label }}
    <input
      class="radio"
      name="radio-1"
      type="radio"
    >
  </label>
</template>
