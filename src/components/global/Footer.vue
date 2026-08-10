<template>
  <footer class="bg-canvas-alt border-t border-main/10 w-full">
    <div class="max-w-7xl mx-auto px-10 py-12 sm:px-16 lg:px-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      
      <!-- Left: Identity -->
      <div class="space-y-1">
        <h4 class="text-sm font-bold text-main tracking-tight">
          Mark Gil Sendin
        </h4>
        <p class="font-mono text-xs text-main/50">
          Frontend Developer
        </p>
      </div>

      <!-- Right: Copyright -->
      <div>
        <p class="font-mono text-xs text-main/50">
          &copy; {{ currentYear }} All rights reserved.
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>