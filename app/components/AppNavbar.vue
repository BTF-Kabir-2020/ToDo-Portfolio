<template>
  <nav class="bg-surface-light dark:bg-surface-dark shadow-soft border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-3 sm:py-4">
        <!-- Logo/Brand -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex-shrink-0">
            <h1 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">BTF Kabir</h1>
            <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Full-Stack Developer</p>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/" class="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            Home
          </NuxtLink>
          <NuxtLink to="/about" class="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            About
          </NuxtLink>
          <NuxtLink to="/todos" class="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            Todos
          </NuxtLink>
          <NuxtLink to="/contact" class="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            Contact
          </NuxtLink>
          
          <!-- Theme Toggle -->
          <button 
            @click="themeStore.toggleTheme()"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            :title="`Current theme: ${themeStore.theme}`"
          >
            <svg v-if="themeStore.isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
          <NuxtLink to="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
            Home
          </NuxtLink>
          <NuxtLink to="/about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
            About
          </NuxtLink>
          <NuxtLink to="/todos" class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
            Todos
          </NuxtLink>
          <NuxtLink to="/contact" class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
            Contact
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useThemeStore } from '~/stores/theme'

const mobileMenuOpen = ref(false)
const themeStore = useThemeStore()

// Initialize theme on mount
onMounted(() => {
  themeStore.initTheme()
  themeStore.watchSystemTheme()
})
</script>
