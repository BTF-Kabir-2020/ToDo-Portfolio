<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
    <div class="max-w-md w-full text-center">
      <div class="mb-8">
        <div class="text-6xl font-bold text-primary-600 mb-4">
          {{ error?.statusCode || '500' }}
        </div>
        <h1 class="text-2xl font-bold text-gray-900 mb-2">
          {{ error?.statusCode === 404 ? 'Page Not Found' : 'Something went wrong' }}
        </h1>
        <p class="text-gray-600 mb-6">
          {{ error?.statusCode === 404 
            ? 'The page you are looking for does not exist.' 
            : 'An unexpected error occurred. Please try again later.' 
          }}
        </p>
      </div>
      
      <div class="space-y-4">
        <button 
          @click="handleError"
          class="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
        >
          Try Again
        </button>
        
        <NuxtLink 
          to="/"
          class="block w-full bg-white text-primary-600 px-6 py-3 rounded-md border border-primary-600 hover:bg-primary-50 transition-colors"
        >
          Go Home
        </NuxtLink>
      </div>
      
      <div class="mt-8 text-sm text-gray-500">
        <p>If the problem persists, please contact us at</p>
        <a href="mailto:PouyaGH2080@gmail.com" class="text-primary-600 hover:text-primary-700">
          PouyaGH2080@gmail.com
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  error: any
}>()

const handleError = () => {
  clearError()
}
</script>
