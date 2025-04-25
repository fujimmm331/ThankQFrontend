<script setup lang="ts">
import MessageRow from '../MessageRow/MessageRow.vue';
import MessageRowBody from '../MessageRow/MessageRowBody.vue';
import MessageRowFrom from '../MessageRow/MessageRowFrom.vue';
import MessageRowTitle from '../MessageRow/MessageRowTitle.vue';
import type { ThLetterProps } from './Type';

const props = defineProps<ThLetterProps>();

const MAX_PER_LINE = 15;

const lines = computed(() => {
  const lines: string[] = []
  props.body.split('\n').forEach(paragraph => {
    for (let i = 0; i < paragraph.length; i += MAX_PER_LINE) {
      lines.push(paragraph.slice(i, i + MAX_PER_LINE))
    }

    // 空行や末尾の改行も反映したい場合
    if (paragraph === '') {
      lines.push('')
    }
  })

  return lines
})

const skeleton = computed(() => {
  if (props.isLoading) {
    return 'skeleton'
  }
  return ''
})
</script>

<template>
  <div
    class="th-letter min-h-100"
    :class="[skeleton]"
  >
    <template v-if="!isLoading">
      <MessageRowTitle v-if="to">
        {{ to }}へ
      </MessageRowTitle>
      <MessageRowBody
        v-for="line, index in lines"
        :key="index"
      >
        {{ line }}
      </MessageRowBody>
      <MessageRowFrom>{{ from }}</MessageRowFrom>
      <MessageRow />
    </template>
  </div>
</template>
