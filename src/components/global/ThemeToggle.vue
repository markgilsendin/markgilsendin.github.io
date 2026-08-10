<template>
  <button 
    @click="toggleTheme" 
    type="button"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    class="w-9 h-9 rounded-full bg-main/5 border border-main/10 flex items-center justify-center text-main/80 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 cursor-pointer shrink-0"
  >
    <Icon 
      :icon="isDark ? 'lucide:sun' : 'lucide:moon'" 
      :class="[
        'w-4 h-4 transition-transform duration-200 hover:rotate-12',
        isDark ? 'text-amber-400' : 'text-main/80'
      ]" 
    />
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'

const isDark = ref(false)

const applyTheme = (dark) => {
  isDark.value = dark
  document.documentElement.classList.toggle('dark', dark)
}

const toggleTheme = () => {
  const nextTheme = !isDark.value
  applyTheme(nextTheme)
  localStorage.setItem('theme', nextTheme ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  
  if (savedTheme) {
    applyTheme(savedTheme === 'dark')
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    applyTheme(prefersDark)
  }
})
</script>