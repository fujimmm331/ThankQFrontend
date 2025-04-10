<script setup lang="ts">
import ThSlider from '@/components/ThSlider.vue'
import { ref } from "vue";

const progress = ref(100);
</script>

<template>
  <main class="h-screen">
    <section class="h-full p-6 flex flex-col gap-4"
             style="background-color: #D2B48C;">
      <div class="bg-white h-100 rounded-md">
        藤村和弥 様
      </div>
      <ThSlider v-model="progress" class="h-10"
                style="transform: scaleX(-1);"></ThSlider>
    </section>
  </main>
</template>


