<template>
  <footer class="bg-canvas-alt border-t border-main/10 w-full">
    <div class="max-w-7xl mx-auto px-10 py-8 sm:px-16 lg:px-24 flex items-center justify-center">
      <p class="font-mono text-base text-main/50">
        &copy; {{ currentYear }} Mark Gil Sendin
      </p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>