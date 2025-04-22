<script setup lang="ts">
import BaseCarousel from '@/components/Common/BaseCarousel/BaseCarousel.vue';
import BaseSection from '@/components/Common/BaseSection.vue';
import ThLetter from '@/components/messages/Letter/ThLetter.vue';

const imgList = ref([
  {
    url: 'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
  },
  {
    url: 'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
  },
  {
    url: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
  }
])

</script>

<template>
  <BaseSection
    class="h-full p-6 flex flex-col gap-4"
  >
    <div>
      <ThLetter
        body="キミヲアイシテルキミヲアイシテルキミヲアイシテルキミヲアイシテルキミヲアイシテルキミヲアイシテルキミヲアイシテル"
        from="藤村和弥"
        to="センセイ"
      />
      <ThLetter
        body="キミヲアイシテルキミヲアイシテルキミヲアイシテルキミヲアイシテルキミヲアイシテルキミヲアイシテルキミヲアイシテル"
        from="久賀鈴香"
      />
    </div>
    <div>
      <BaseCarousel :img-list />
    </div>
  </BaseSection>
</template>


