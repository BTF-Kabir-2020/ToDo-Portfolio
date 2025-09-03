<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h1>
      <p class="text-lg text-gray-600 dark:text-gray-300">Have a question or want to collaborate? Feel free to reach out!</p>
    </div>

    <!-- Contact Card -->
         <div class="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-500 p-12 text-center border border-gray-200 dark:border-gray-600">
      <!-- Email Icon -->
      <div class="w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
        <svg class="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>

      <!-- Contact Info -->
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Email Me</h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>

      <!-- Email Button -->
      <div class="space-y-6">
        <a 
          href="mailto:PouyaGH2080@gmail.com" 
          class="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl"
        >
          <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Send Email
        </a>
        
        <div class="text-center">
          <p class="text-gray-500 dark:text-gray-400 text-sm">Or copy the email address:</p>
          <div class="mt-3 flex items-center justify-center space-x-2">
            <code class="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-mono text-sm">
              PouyaGH2080@gmail.com
            </code>
            <button 
              @click="copyEmail"
              class="p-2 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              :title="copied ? 'Copied!' : 'Copy email'"
            >
              <svg v-if="!copied" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <svg v-else class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Response Time Info -->
      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Quick Response</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Within 24 hours</p>
          </div>
          
          <div>
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Always Available</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">24/7 via email</p>
          </div>
          
          <div>
            <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Friendly Support</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Professional & helpful</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Info -->
    <div class="mt-12 text-center">
      <p class="text-gray-500 dark:text-gray-400">
        Looking for my work? Check out my 
        <a href="https://github.com/BTF-Kabir-2020" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">
          GitHub profile
        </a> 
        for more projects and contributions.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  title: 'Contact - BTF Kabir'
})

const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('PouyaGH2080@gmail.com')
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = 'PouyaGH2080@gmail.com'
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}
</script>
