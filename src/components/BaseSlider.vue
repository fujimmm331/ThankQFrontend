<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { onMounted, ref, watch } from 'vue';


defineProps({});
defineEmits({})
defineExpose({
  hoge() {
    return 'a';
  }
})

// Composables
const store = useCounterStore()

// LocalState
const progress = ref(40);

// functions
function hoge() {
  console.log('hoge');
}

// watches
watch(progress, () => {
  console.log('yay', store.$state);
})

// lifeCycles
onMounted(() => {
  hoge();
})

</script>

<template>
  <input
    v-if="true"
    v-model="progress"
    class="range"
    max="100"
    min="0"
    type="range"
  >
</template>

