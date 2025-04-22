<script setup lang="ts">
import BaseBtn from '@/components/Common/BaseBtn/BaseBtn.vue';
import BaseSection from '@/components/Common/BaseSection.vue';

</script>

<template>
  <BaseSection
    class="h-full p-6 flex flex-col gap-4"
  >
    <div>
      出題中。。。
      <BaseBtn
        color="primary"
        size="md"
        @click="$router.push({name: 'questionEndPage'})"
      >
        ボタン
      </BaseBtn>
    </div>
  </BaseSection>
</template>


