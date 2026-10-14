<template>
  <span
    v-if="status"
    class="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-main/10 bg-main/5 text-main/80 whitespace-nowrap"
  >
    <span class="w-1.5 h-1.5 rounded-full shrink-0" :class="dotClass"></span>
    {{ status }}
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // 'Live' | 'In end-user training' | 'In training' | 'In user testing' | 'In development'
  status: {
    type: String,
    default: ''
  }
})

// Full class names are written out so Tailwind can detect them.
const dotClass = computed(() => {
  if (props.status === 'Live') return 'bg-emerald-500'
  if (props.status === 'In development') return 'bg-sky-500'
  return 'bg-amber-500'
})
</script>