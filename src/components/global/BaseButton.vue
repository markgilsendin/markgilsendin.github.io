<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="getButtonClass(variant, size)"
    @click="$emit('click', $event)"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </button>
</template>

<script setup>
import { useButtonStyles } from '@/composable/useButtonStyles'

defineProps({
  type: {
    type: String,
    default: 'button'
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
  disabled: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])

const { getButtonClass } = useButtonStyles()
</script>