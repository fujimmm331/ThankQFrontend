<script setup lang="ts">
import BaseBtn from '@/components/Common/BaseBtn/BaseBtn.vue';
import BaseCenter from '@/components/Common/BaseCenter/BaseCenter.vue';
import BaseHeading from '@/components/Common/BaseHeading/BaseHeading.vue';
import BaseRadioGroup from '@/components/Common/BaseRadioGroup/BaseRadioGroup.vue';
import BaseSection from '@/components/Common/BaseSection.vue';
import BaseStack from '@/components/Common/BaseStack/BaseStack.vue';
import BaseStepper from '@/components/Common/BaseStepper/BaseStepper.vue';
import { useQuizStore } from '@/stores/quizStore';

const store = useQuizStore();
const route = useRoute();
const router = useRouter();
const sectionRef = useTemplateRef('baseSection');

const id = computed(() => {
  const _id = Number(route.params.id)

  if (Number.isNaN(_id)) {
    return -1
  }
  return _id;
})

const currentQuiz = computed(() => {
  return store.findById(id.value)
})

const currentIndex = computed(() => {
  return store.findIndexById(id.value);
})

const prevQuiz = computed(() => {
  return store.findPrevQuiz(id.value);
})

const nextQuiz = computed(() => {
  return store.findNextQuiz(id.value);
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

async function onNext() {
  const nextId = nextQuiz.value?.id;
  if (nextId) {
    await router.push({
      name: 'questionAnswerPage',
      params: {
        id: nextId
      }
    })
    sectionRef.value?.scrollToTop();
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
    sectionRef.value?.scrollToTop();
    return;
  }

  await router.push({
    name: 'questionWelcomePage'
  })
}
</script>

<template>
  <BaseSection
    ref="baseSection"
    class="flex flex-col"
  >
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
        :step-length="store.quizzes.length"
      />

      <BaseStack
        v-if="currentQuiz"
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
            Q. {{ currentQuiz.question }}
          </BaseHeading>
        </BaseCenter>
        <BaseRadioGroup
          v-model="currentQuiz.answer_id"
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
            :disabled="!currentQuiz.answer_id"
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
