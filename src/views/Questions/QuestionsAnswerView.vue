<script setup lang="ts">
import BaseBtn from '@/components/Common/BaseBtn/BaseBtn.vue';
import BaseHeading from '@/components/Common/BaseHeading/BaseHeading.vue';
import BaseRadioGroup from '@/components/Common/BaseRadioGroup/BaseRadioGroup.vue';
import BaseSection from '@/components/Common/BaseSection.vue';
import BaseStepper from '@/components/Common/BaseStepper/BaseStepper.vue';

const selectItem = ref<number | string | boolean>()
const radioItems = ref([
  {
    label: '1.神奈川県',
    value: 1,
  },
  {
    label: '2.大阪府',
    value: 2,
  },
  {
    label: '3.徳島県',
    value: 3,
  },
  {
    label: '4.和歌山県',
    value: 4,
  }
])

</script>

<template>
  <BaseSection
    class="h-full p-6 flex flex-col"
  >
    <BaseHeading
      tag="h1"
    >
      クイズに答える
    </BaseHeading>
    <BaseStepper
      class="mb-4 min-h-10"
      :current-step="1"
      :step-length="5"
    />

    <div class="flex-grow-1 flex flex-col justify-end gap-4">
      <div class="flex-grow-1 flex items-center">
        <BaseHeading
          class="py-2"
          tag="h3"
        >
          新婦が住んだことのない街は？新婦が住んだことのない街は？新婦が住んだことのない街は？新婦が住んだことのない街は？新婦が住んだことのない街は？
        </BaseHeading>
      </div>
      <BaseRadioGroup
        v-model="selectItem"
        :radio-items
      />
      <div class="flex gap-3 items-center">
        <BaseBtn
          class="w-30"
          color="secondary"
          size="lg"
          @click="$router.push({name: 'questionAnswerPage', params: {
            id: 1
          }})"
        >
          戻る
        </BaseBtn>

        <BaseBtn
          class="flex-grow-1"
          color="primary"
          size="xl"
          @click="$router.push({name: 'questionConfirmPage'})"
        >
          次へ
        </BaseBtn>
      </div>
    </div>
  </BaseSection>
</template>
