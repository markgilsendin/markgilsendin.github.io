<template>
  <a
    :href="href"
    :download="download || undefined"
    :target="target"
    :rel="computedRel"
    :class="getButtonClass(variant, size)"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </a>
</template>

<script setup>
import { computed } from 'vue'
import { useButtonStyles } from '@/composable/useButtonStyles'

const props = defineProps({
  href: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'outline', 'ghost'].includes(v)
  },
  size: {
    type: String,
    default: 'md',
    validator: (s) => ['sm', 'md', 'lg'].includes(s)
  },
  download: {
    type: [Boolean, String],
    default: false
  },
  target: {
    type: String,
    default: '_self'
  },
  rel: {
    type: String,
    default: null
  }
})

const { getButtonClass } = useButtonStyles()

// Automatically apply security
const computedRel = computed(() => {
  if (props.rel) return props.rel
  return props.target === '_blank' ? 'noopener noreferrer' : undefined
})
</script>