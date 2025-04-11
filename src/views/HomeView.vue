<script setup lang="ts">
import ThSlider from '@/components/ThSlider.vue'
import { ref } from "vue";
import { RouterLink } from 'vue-router';

const progress = ref<number>(100);
const router = useRouter();

watch(progress, async (newProgress) => {
  if (5 > newProgress) {
    await router.push('/messages');
  }
});
</script>

<template>
  <section
    class="h-full p-6 flex flex-col gap-4"
    style="background-color: #D2B48C;"
  >
    <div class="bg-white h-100 rounded-md">
      藤村和弥 様
    </div>
    <ThSlider
      v-model="progress"
      class="h-10"
      style="transform: scaleX(-1);"
    />
    <RouterLink to="/messages">
      次へ
    </RouterLink>
  </section>
</template>


