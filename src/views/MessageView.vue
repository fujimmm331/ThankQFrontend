<script setup lang="ts">
import BaseBtn from '@/components/Common/BaseBtn/BaseBtn.vue';
import BaseHeading from '@/components/Common/BaseHeading/BaseHeading.vue';
import BaseLink from '@/components/Common/BaseLink/BaseLink.vue';
import BaseRadio from '@/components/Common/BaseRadio/BaseRadio.vue';
import BaseSection from '@/components/Common/BaseSection.vue';
import BaseStepper from '@/components/Common/BaseStepper/BaseStepper.vue';
import BaseText from '@/components/Common/BaseText/BaseText.vue';
import ThLetter from '@/components/messages/Letter/ThLetter.vue';

const btns = [
  'block',
  'circle',
  'square',
  'wide',
]

const currentStep = ref(0);

function onClickBtn() {
  if (4 > currentStep.value) {
    currentStep.value = currentStep.value + 1
  }
}

function onClickPrevBtn() {
  if (currentStep.value > 0) {
    currentStep.value = currentStep.value - 1
  }
}
</script>

<template>
  <BaseSection
    class="h-full p-6 flex flex-col gap-4"
  >
    <ThLetter body="キミヲアイシテルキミヲアイシテルキミヲアイシテルキミヲアイシテルキミヲアイシテルキミヲアイシテルキミヲアイシテル" />
    <BaseHeading tag="h1">
      クイズに答える
    </BaseHeading>
    <BaseRadio label="ラベル1" />
    <BaseRadio label="ラベル2" />
    <BaseRadio label="ラベル3" />
    <BaseStepper
      class="flex-basis"
      :current-step
      :step-length="5"
    />
    <h1>ゲスト様へ</h1>
    <BaseText>
      圧倒的感謝です。圧倒的感謝です。圧倒的感謝です。圧倒的感謝です。
      圧倒的感謝です。圧倒的感謝です。圧倒的感謝です。圧倒的感謝です。圧倒的感謝です。圧倒的感謝です。圧倒的感謝です。圧倒的感謝です。圧倒的感謝です。圧倒的感謝です。
    </BaseText>
    <BaseLink color="primary">
      飛ばす
    </BaseLink>
    <BaseBtn
      v-for="behavior, key in btns"
      :key
      :behavior
      color="primary"
      size="xl"
      @click="onClickBtn"
    >
      {{ behavior }}
    </BaseBtn>

    <button
      class="btn bg-base-300"
      @click="onClickPrevBtn"
    >
      戻る
    </button>
  </BaseSection>
</template>


