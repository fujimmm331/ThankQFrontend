<script setup lang="ts">
import BaseBtn from '@/components/Common/BaseBtn/BaseBtn.vue';
import BaseSection from '@/components/Common/BaseSection.vue';
</script>

<template>
  <BaseSection
    class="h-full p-6 flex flex-col gap-4"
  >
    <div>
      質問開始
      <BaseBtn
        color="primary"
        size="md"
        @click="$router.push({name: 'questionAnswerPage', params: {
          id: 1
        }})"
      >
        ボタン
      </BaseBtn>
    </div>
  </BaseSection>
</template>


