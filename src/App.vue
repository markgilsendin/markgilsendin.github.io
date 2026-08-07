<script setup>
import ThemeToggle from './components/ThemeToggle.vue'
import Hero from './components/Hero.vue'
</script>

<template>
  <div class="min-h-screen bg-bg text-text-h">
    <header class="p-4 flex justify-end">
      <ThemeToggle />
    </header>

    <main>
      <Hero />
    </main>
  </div>
</template>