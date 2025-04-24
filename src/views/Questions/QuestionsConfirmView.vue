<script setup lang="ts">

import BaseBtn from '@/components/Common/BaseBtn/BaseBtn.vue';
import BaseCard from '@/components/Common/BaseCard/BaseCard.vue';
import BaseHeading from '@/components/Common/BaseHeading/BaseHeading.vue';
import BaseSection from '@/components/Common/BaseSection.vue';
import BaseStack from '@/components/Common/BaseStack/BaseStack.vue';
import BaseText from '@/components/Common/BaseText/BaseText.vue';
import ConfirmListItem from '@/components/Questions/ConfirmListItem/ConfirmListItem.vue';

</script>

<template>
  <BaseSection
    class="h-full "
  >
    <BaseStack
      component="div"
      gap="xl"
    >
      <BaseHeading tag="h1">
        回答の確認
      </BaseHeading>
      <BaseCard shadow="xs">
        <BaseStack component="ul">
          <ConfirmListItem
            answer-of-user="和歌山県"
            question="新婦が住んだことのない都道府県は新婦が住んだことのない都道府県は？"
          />

          <ConfirmListItem
            answer-of-user="和歌山県"
            question="新婦が住んだことのない都道府県は新婦が住んだことのない都道府県は？"
          />

          <ConfirmListItem
            answer-of-user="和歌山県"
            question="新婦が住んだことのない都道府県は新婦が住んだことのない都道府県は？"
          />

          <ConfirmListItem
            answer-of-user="和歌山県"
            question="新婦が住んだことのない都道府県は新婦が住んだことのない都道府県は？"
          />

          <ConfirmListItem
            answer-of-user="和歌山県"
            no-border
            question="新婦が住んだことのない都道府県は新婦が住んだことのない都道府県は？"
          />
        </BaseStack>
      </BaseCard>

      <BaseText>
        回答は<strong>1回のみ</strong>となります！<br>
        「やり直す」を押すと、回答を修正できます。
      </BaseText>

      <BaseStack
        class="items-center"
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
          なり直す
        </BaseBtn>

        <BaseBtn
          class="flex-grow-1"
          color="primary"
          size="xl"
          @click="$router.push({name: 'questionEndPage'})"
        >
          回答する！
        </BaseBtn>
      </BaseStack>
    </BaseStack>
  </BaseSection>
</template>
