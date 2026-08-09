<template>
  <button 
    @click="toggleTheme" 
    class="px-4 py-2 rounded-lg border border-primary text-main bg-canvas hover:opacity-80 transition-all font-mono text-sm cursor-pointer"
  >
    <span>{{ isDark ? '☀️ Light Mode' : '🌙 Dark Mode' }}</span>
  </button>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const isDark = ref(false)

  const toggleTheme = () => {
    isDark.value = !isDark.value
    
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'dark') {
      isDark.value = true
      document.documentElement.classList.add('dark')
    } else {
      isDark.value = false
      document.documentElement.classList.remove('dark')
    }
  })
</script>