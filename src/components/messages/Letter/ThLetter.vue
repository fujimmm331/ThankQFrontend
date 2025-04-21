<script setup lang="ts">
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
</script>

<template>
  <div class="th-letter">
    <MessageRowTitle>
      先生へ
    </MessageRowTitle>
    <MessageRowBody
      v-for="line, index in lines"
      :key="index"
    >
      {{ line }}
    </MessageRowBody>
    <MessageRowFrom>藤村和弥</MessageRowFrom>
  </div>
</template>
