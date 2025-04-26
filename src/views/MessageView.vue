<script setup lang="ts">
import BaseCarousel from '@/components/Common/BaseCarousel/BaseCarousel.vue';
import BaseSection from '@/components/Common/BaseSection.vue';
import ThLetter from '@/components/messages/Letter/ThLetter.vue';
import { useGuest } from '@/composables/useGuest';
import { useGuestStore } from '@/stores/guestStore';

const store = useGuestStore();
const { isLoading } = useGuest();

const imgList = computed(() => {
  return store.guest?.guest_photos.map((item) => {
    return { url: item.photo_path }
  }) ?? []
})

</script>

<template>
  <BaseSection
    class="h-full p-6 flex flex-col gap-4"
  >
    <div>
      <ThLetter
        :body="store.guest?.message ?? ''"
        from="藤村和弥"
        :is-loading
        :to="store.guest?.name"
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


