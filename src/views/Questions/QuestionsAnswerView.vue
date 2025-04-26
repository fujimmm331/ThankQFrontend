<script setup lang="ts">
import BaseBtn from '@/components/Common/BaseBtn/BaseBtn.vue';
import BaseCenter from '@/components/Common/BaseCenter/BaseCenter.vue';
import BaseHeading from '@/components/Common/BaseHeading/BaseHeading.vue';
import BaseRadioGroup from '@/components/Common/BaseRadioGroup/BaseRadioGroup.vue';
import BaseSection from '@/components/Common/BaseSection.vue';
import BaseStack from '@/components/Common/BaseStack/BaseStack.vue';
import BaseStepper from '@/components/Common/BaseStepper/BaseStepper.vue';
import { useQuizStore } from '@/stores/quizStore';

const { findById, findPrevQuiz, findNextQuiz, findIndexById, quizzes } = useQuizStore();
const route = useRoute();
const router = useRouter();

const id = computed(() => {
  const _id = Number(route.params.id)

  if (Number.isNaN(_id)) {
    return -1
  }
  return _id;
})

const currentQuiz = computed(() => {
  return findById(id.value)
})

const currentIndex = computed(() => {
  return findIndexById(id.value);
})

const prevQuiz = computed(() => {
  return findPrevQuiz(id.value);
})

const nextQuiz = computed(() => {
  return findNextQuiz(id.value);
})

const radioItems = computed(() => {
  return currentQuiz.value?.quiz_choices.map((item, index) => {
    const prefix = index + 1
    return {
      label: `${String(prefix)}. ${item.choice}`,
      value: item.id
    }
  }) ?? [];
})


const selectItem = ref<number | string | boolean>()

async function onNext() {
  const nextId = nextQuiz.value?.id;
  if (nextId) {
    await router.push({
      name: 'questionAnswerPage',
      params: {
        id: nextId
      }
    })
    return;
  }

  await router.push({name: 'questionConfirmPage'})
}

async function onPrev() {
  const prevId = prevQuiz.value?.id;

  if (prevId) {
    await router.push({
      name: 'questionAnswerPage',
      params: {
        id: prevId
      }
    })
    return;
  }

  await router.push({
    name: 'questionWelcomePage'
  })
}
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
        :current-step="currentIndex"
        :step-length="quizzes.length"
      />

      <BaseStack
        class="flex-grow-1 justify-end"
        component="div"
        gap="xl"
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
            {{ currentQuiz?.question }}
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
            @click="onPrev"
          >
            戻る
          </BaseBtn>

          <BaseBtn
            class="flex-grow-1"
            color="primary"
            size="xl"
            @click="onNext"
          >
            次へ
          </BaseBtn>
        </BaseCenter>
      </BaseStack>
    </BaseStack>
  </BaseSection>
</template>
