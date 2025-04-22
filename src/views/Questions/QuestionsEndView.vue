<script setup lang="ts">

import BaseHeading from '@/components/Common/BaseHeading/BaseHeading.vue';
import BaseLink from '@/components/Common/BaseLink/BaseLink.vue';
import BaseSection from '@/components/Common/BaseSection.vue';
import BaseText from '@/components/Common/BaseText/BaseText.vue';
import { links } from '@/consts/links';
import { getImagePath } from '@/utils/assetsPath';

</script>

<template>
  <BaseSection
    class="h-full p-6 flex flex-col gap-4"
  >
    <div class="flex-grow-1 flex flex-col items-center justify-center gap-4">
      <img
        alt="新郎新婦が御礼している画像"
        class="rounded-lg"
        height="320"
        :src="getImagePath('IMG_4266')"
        width="320"
      >
      <BaseHeading
        class="py-2 text-center"
        tag="h1"
      >
        Thank you🎉
      </BaseHeading>

      <BaseText>最後の問題は披露宴の後半に皆さんの前で実演します。</BaseText>
      <BaseText>
        撮影した写真や映像を投稿できるようにLINE Roomを用意しました。<br>
        たくさん投稿してくれると喜びます、、！🥹
      </BaseText>
    </div>
    <div class="flex gap-4 justify-center">
      <BaseLink
        class="text-lg"
        color="primary"
        :href="links.lineRoom.url"
      >
        <span class="flex gap-1">
          写真・動画を共有する
          <svg
            class="size-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </BaseLink>
    </div>
  </BaseSection>
</template>


