<script setup lang="ts">
import BaseCarousel from '@/components/Common/BaseCarousel/BaseCarousel.vue';
import BaseSection from '@/components/Common/BaseSection.vue';
import ThLetter from '@/components/messages/Letter/ThLetter.vue';
import { useMessage } from '@/composables/useMessage';
import { useUserToken } from '@/composables/useUserToken';
import { useMessageStore } from '@/stores/messageStore';

const { reloadMessage, isLoading } = useMessage();
const store = useMessageStore();
const token = useUserToken();

const imgList = computed(() => {
  if (!token.value) return [];

  return store.messages[token.value]?.[0]?.guest_photos.map((item) => {
    return { url: item.photo_path }
  })
})

onMounted(async () => {
  await reloadMessage(token.value);
})
</script>

<template>
  <BaseSection
    class="h-full p-6 flex flex-col gap-4"
  >
    <div>
      <ThLetter
        v-for="item in store.messages[token]"
        :key="item.id"
        :body="item.message"
        from="藤村和弥"
        :is-loading
        :to="item.name"
      />
    </div>
    <div>
      <BaseCarousel
        v-if="imgList"
        :img-list
        :is-loading
      />
    </div>
  </BaseSection>
</template>


