<script setup lang="ts">
import BaseBtn from '@/components/Common/BaseBtn/BaseBtn.vue';
import BaseHeading from '@/components/Common/BaseHeading/BaseHeading.vue';
import BaseSection from '@/components/Common/BaseSection.vue';
import BaseText from '@/components/Common/BaseText/BaseText.vue';
import { getImagePath } from '@/utils/assetsPath';
</script>

<template>
  <BaseSection
    class="h-full p-6 flex flex-col gap-4"
  >
    <div class="flex flex-col align-center flex-grow-1 justify-center gap-2">
      <div class="rounded-lg p-2 bg-white">
        <img
          alt="クイズを連想させる画像"
          :src="getImagePath('welcomeImage')"
        >
      </div>

      <BaseHeading
        class="text-center py-5"
        tag="h1"
      >
        クイズを出題します！
      </BaseHeading>
      <BaseText>
        新郎新婦に関するクイズを出題します！<br>
        お早めの回答をお願いします😊<br>
        上位の方にはプレゼントを用意しています☺️<br>
        結果は披露宴の後半に発表するのでお楽しみに！
      </BaseText>
    </div>

    <BaseBtn
      color="primary"
      size="xl"
      @click="$router.push({name: 'questionAnswerPage', params: {
        id: 1
      }})"
    >
      クイズに答える！
    </BaseBtn>
  </BaseSection>
</template>


