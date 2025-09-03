<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        About This Project
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300">
        Learn more about the technologies and features used
      </p>
    </div>

    <!-- Tech Stack -->
    <div class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-300 p-8 mb-8 border border-gray-200 dark:border-gray-600">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Technology Stack
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="text-center p-4 group hover:scale-105 transition-transform duration-300">
          <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
            <svg
              class="w-8 h-8 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Nuxt.js 4
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Full-stack Vue.js framework with SSR, file-based routing, and auto-imports
          </p>
        </div>

        <div class="text-center p-4 group hover:scale-105 transition-transform duration-300">
          <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
            <svg
              class="w-8 h-8 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Tailwind CSS
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Utility-first CSS framework for rapid UI development
          </p>
        </div>

        <div class="text-center p-4 group hover:scale-105 transition-transform duration-300">
          <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
            <svg
              class="w-8 h-8 text-purple-600 dark:text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Nuxt Build System
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Optimized build toolchain with intelligent caching
          </p>
        </div>

        <div class="text-center p-4 group hover:scale-105 transition-transform duration-300">
          <div class="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800 transition-colors">
            <svg
              class="w-8 h-8 text-yellow-600 dark:text-yellow-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            TypeScript
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Typed JavaScript for better development experience
          </p>
        </div>

        <div class="text-center p-4 group hover:scale-105 transition-transform duration-300">
          <div class="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-800 transition-colors">
            <svg
              class="w-8 h-8 text-red-600 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Local Storage
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Persistent data storage for offline functionality
          </p>
        </div>

        <div class="text-center p-4 group hover:scale-105 transition-transform duration-300">
          <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors">
            <svg
              class="w-8 h-8 text-indigo-600 dark:text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Composables
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Reusable logic with Vue 3 Composition API
          </p>
        </div>
      </div>
    </div>

    <!-- Features -->
    <div class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-300 p-8 mb-8 border border-gray-200 dark:border-gray-600">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Key Features
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="flex items-start space-x-3 group hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
          <div class="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
            <span class="text-lg">✅</span>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white">
              Advanced Todo Management
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Create, edit, delete, and organize tasks with priorities, due dates, and tags
            </p>
          </div>
        </div>

        <div class="flex items-start space-x-3 group hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
          <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
            <span class="text-lg">💾</span>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white">
              Persistent Storage
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Your todos are saved locally and persist between browser sessions
            </p>
          </div>
        </div>

        <div class="flex items-start space-x-3 group hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
          <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
            <span class="text-lg">🔍</span>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white">
              Smart Filtering
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Filter tasks by status, priority, and search through titles and descriptions
            </p>
          </div>
        </div>

        <div class="flex items-start space-x-3 group hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
          <div class="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors">
            <span class="text-lg">📱</span>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white">
              Responsive Design
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Beautiful UI that works perfectly on all devices and screen sizes
            </p>
          </div>
        </div>

        <div class="flex items-start space-x-3 group hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
          <div class="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800 transition-colors">
            <span class="text-lg">⚡</span>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white">
              Performance Optimized
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Built with Nuxt Build System for fast builds and optimal runtime performance
            </p>
          </div>
        </div>

        <div class="flex items-start space-x-3 group hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
          <div class="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-red-200 dark:group-hover:bg-red-800 transition-colors">
            <span class="text-lg">🚀</span>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white">
              Modern Development
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Built with the latest web technologies and best practices
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center">
      <NuxtLink
        to="/todos" 
        class="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Try the Todo App
        <svg
          class="ml-2 -mr-1 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// Nuxt composables are auto-imported
// @ts-ignore - Nuxt auto-imports
definePageMeta({
  title: 'About - BTF Kabir Portfolio',
  description: 'Learn about the cutting-edge technologies and features used in this modern web application',
  keywords: 'Nuxt.js, Vue.js, Tailwind CSS, TypeScript, PWA, SEO, Web Development',
});

// SEO optimization
// @ts-ignore - Nuxt auto-imports
useHead({
  title: 'About - BTF Kabir Portfolio',
  meta: [
    { name: 'description', content: 'Learn about the cutting-edge technologies and features used in this modern web application' },
    { name: 'keywords', content: 'Nuxt.js, Vue.js, Tailwind CSS, TypeScript, PWA, SEO, Web Development' },
    { property: 'og:title', content: 'About - BTF Kabir Portfolio' },
    { property: 'og:description', content: 'Learn about the cutting-edge technologies and features used in this modern web application' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: 'About - BTF Kabir Portfolio' },
    { name: 'twitter:description', content: 'Learn about the cutting-edge technologies and features used in this modern web application' },
  ],
});
</script>
