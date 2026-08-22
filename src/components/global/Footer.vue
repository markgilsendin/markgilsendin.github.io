<template>
  <footer class="bg-canvas-alt border-t border-main/10 w-full">
  <div class="max-w-7xl mx-auto px-10 py-8 sm:px-16 lg:px-24 text-center space-y-2">
    
    <p class="font-mono md:text-sm text-xs text-main/50">
      This portfolio is continuously evolving.
    </p>

    <p class="font-mono md:text-sm text-xs text-main/40">
      &copy; {{ currentYear }} Mark Gil Sendin
    </p>

  </div>
</footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>