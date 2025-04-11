<script setup lang="ts">
import BaseSection from '@/components/Common/BaseSection.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <BaseSection
    class="h-full p-6 flex flex-col gap-4"
  >
    <h1>ゲスト様へ</h1>
    <p>
      圧倒的感謝です。圧倒的感謝です。圧倒的感謝です。圧倒的感謝です。
      圧倒的感謝です。圧倒的感謝です。圧倒的感謝です。圧倒的感謝です。圧倒的感謝です。圧倒的感謝です。圧倒的感謝です。圧倒的感謝です。圧倒的感謝です。圧倒的感謝です。
    </p>
    <RouterLink to="/questions">
      次へ
    </RouterLink>
  </BaseSection>
</template>


