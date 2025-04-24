<script setup lang="ts">
import BaseBtn from '@/components/Common/BaseBtn/BaseBtn.vue';
import BaseCenter from '@/components/Common/BaseCenter/BaseCenter.vue';
import BaseHeading from '@/components/Common/BaseHeading/BaseHeading.vue';
import BaseRadioGroup from '@/components/Common/BaseRadioGroup/BaseRadioGroup.vue';
import BaseSection from '@/components/Common/BaseSection.vue';
import BaseStack from '@/components/Common/BaseStack/BaseStack.vue';
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
  <BaseSection class="flex flex-col">
    <BaseStack
      component="div"
      grow
    >
      <BaseHeading
        tag="h1"
      >
        クイズに答える
      </BaseHeading>
      <BaseStepper
        class="min-h-10 mt-1"
        :current-step="1"
        :step-length="5"
      />

      <BaseStack
        class="flex-grow-1 justify-end"
        component="div"
        gap="md"
      >
        <BaseCenter
          :col="false"
          component="div"
          grow
        >
          <BaseHeading
            class="py-8"
            tag="h3"
          >
            新婦が住んだことのない街は？新婦が住んだことのない街は？新婦が住んだことのない街は？新婦が住んだことのない街は？新婦が住んだことのない街は？
          </BaseHeading>
        </BaseCenter>
        <BaseRadioGroup
          v-model="selectItem"
          :radio-items
        />

        <BaseCenter
          :col="false"
          component="div"
          gap="md"
        >
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
        </BaseCenter>
      </BaseStack>
    </BaseStack>
  </BaseSection>
</template>
