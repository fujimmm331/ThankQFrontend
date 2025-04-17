<script setup lang="ts">
import BaseDockButton from './BaseDockButton.vue';

const route = useRoute()
const router = useRouter();

const currentPath = computed(() => {
  return route.path
})

async function to(path: string) {
  await router.push(path)
}

</script>

<template>
  <div class="dock w-full border-t-1 border-[#D1D5DB]">
    <BaseDockButton
      :current-path
      label="写真を共有する"
      to-path="/share"
      @click="to('/share')"
    >
      <svg
        class="size-6"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </BaseDockButton>

    <BaseDockButton
      :current-path
      label="メッセージを見る"
      to-path="/messages"
      @click="to('/messages')"
    >
      <svg
        class="size-6"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </BaseDockButton>

    <BaseDockButton
      :current-path
      label="クイズに答える"
      to-path="/questions"
      @click="to('/questions')"
    >
      <svg
        class="size-6"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </BaseDockButton>
  </div>
</template>
