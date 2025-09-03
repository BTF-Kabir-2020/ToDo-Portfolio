<template>
  <div>
    <!-- Hero Section -->
    <section class="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-background-light to-gray-50 dark:from-background-dark dark:to-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
          <span class="block">Hello! I'm</span>
          <span class="block text-primary-600 dark:text-primary-400">BTF Kabir</span>
          <span class="block">Full-Stack Developer</span>
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-600 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Specialized in Nuxt.js, Vue.js, and Tailwind CSS. I build modern, optimized projects with the latest technologies.
        </p>
        <div class="mt-8 max-w-2xl mx-auto sm:flex sm:justify-center sm:gap-4 md:mt-10">
          <div class="w-full sm:w-auto">
            <NuxtLink to="/todos" class="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 transition-all duration-300 hover:shadow-soft-lg hover:scale-105 transform shadow-soft">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
              Get Started with Todos
            </NuxtLink>
          </div>
          <div class="mt-4 w-full sm:w-auto sm:mt-0">
            <NuxtLink to="/about" class="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 border-2 border-primary-200 dark:border-primary-700 text-lg font-bold rounded-xl text-primary-600 dark:text-primary-400 bg-white dark:bg-surface-dark hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 hover:shadow-soft-lg hover:scale-105 transform shadow-soft">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Learn More
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="py-20 bg-white dark:bg-background-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Why These Technologies?
          </h2>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Using the latest technologies to deliver the best user experience.
          </p>
        </div>
        
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <!-- First Feature Card -->
          <div class="bg-gradient-to-br from-surface-light to-gray-50 dark:from-surface-dark dark:to-gray-800 rounded-xl shadow-soft p-6 hover:shadow-soft-lg hover:scale-105 transform transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
            <div class="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
            <p class="text-gray-600 dark:text-gray-300">Built with performance in mind, delivering blazing fast user experiences.</p>
          </div>

          <!-- Second Feature Card -->
          <div class="bg-gradient-to-br from-surface-light to-gray-50 dark:from-surface-dark dark:to-gray-800 rounded-xl shadow-soft p-6 hover:shadow-soft-lg hover:scale-105 transform transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
            <div class="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Responsive Design</h3>
            <p class="text-gray-600 dark:text-gray-300">Beautiful and responsive design that works on all devices and screen sizes.</p>
          </div>

          <!-- Third Feature Card -->
          <div class="bg-gradient-to-br from-surface-light to-gray-50 dark:from-surface-dark dark:to-gray-800 rounded-xl shadow-soft p-6 hover:shadow-soft-lg hover:scale-105 transform transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
            <div class="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Developer Friendly</h3>
            <p class="text-gray-600 dark:text-gray-300">Built with developers in mind, featuring excellent tooling and documentation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-background-light to-gray-50 dark:from-background-dark dark:to-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Ready to Get Started?
        </h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Start building your next amazing web application today.
        </p>
        <div class="mt-8">
          <NuxtLink to="/todos" class="inline-flex items-center px-10 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 transition-all duration-300 hover:shadow-soft-lg hover:scale-105 transform shadow-soft">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
            Start Building
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Final Call to Action -->
    <section class="py-16 bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="max-w-3xl mx-auto">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Build Something Amazing Together! 🚀
          </h3>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Ready to turn your ideas into reality? I'm here to help you create modern, fast, and beautiful web applications.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact" class="inline-flex items-center px-8 py-3 border-2 border-primary-600 text-base font-semibold rounded-lg text-primary-600 dark:text-primary-400 bg-white dark:bg-surface-dark hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 hover:shadow-soft-lg hover:scale-105 transform">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Get In Touch
            </NuxtLink>
            <NuxtLink to="/about" class="inline-flex items-center px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-base font-semibold rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-soft-lg hover:scale-105 transform">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Learn More
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'BTF Kabir - Full-Stack Developer | Nuxt.js & Vue.js Expert',
  description: 'Professional Full-Stack Developer specializing in Nuxt.js, Vue.js, and Tailwind CSS. Building modern, optimized web applications with cutting-edge technologies.',
  keywords: 'Full-Stack Developer, Nuxt.js, Vue.js, Tailwind CSS, Web Development, Frontend Developer, Backend Developer',
                                          author: 'BTF Kabir',
        robots: 'index, follow',
        language: 'en',
        themeColor: '#0ea5e9'
})

// Structured data for better SEO
useHead({
  title: 'BTF Kabir - Full-Stack Developer | Nuxt.js & Vue.js Expert',
  meta: [
    { name: 'description', content: 'Professional Full-Stack Developer specializing in Nuxt.js, Vue.js, and Tailwind CSS. Building modern, optimized web applications with cutting-edge technologies.' },
    { name: 'keywords', content: 'Full-Stack Developer, Nuxt.js, Vue.js, Tailwind CSS, Web Development, Frontend Developer, Backend Developer' },
    { name: 'author', content: 'BTF Kabir' },
    { name: 'robots', content: 'index, follow' },
    { name: 'language', content: 'en' },
    { name: 'theme-color', content: '#0ea5e9' },
    
            // Open Graph
        { property: 'og:title', content: 'BTF Kabir - Full-Stack Developer' },
        { property: 'og:description', content: 'Professional Full-Stack Developer specializing in Nuxt.js, Vue.js, and Tailwind CSS.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/og-image.jpg' },
        { property: 'og:site_name', content: 'BTF Kabir Portfolio' },
    
    // Social Media
    { name: 'github:url', content: 'https://github.com/BTF-Kabir-2020' },
    { name: 'email', content: 'PouyaGH2080@gmail.com' },
    
    // Additional SEO
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'msapplication-TileColor', content: '#0ea5e9' },
    { name: 'msapplication-config', content: '/browserconfig.xml' }
  ],
  link: [

    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://github.githubassets.com/apple-touch-icon-180x180.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'https://github.githubassets.com/app-icon-192.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', href: 'https://github.githubassets.com/app-icon-512.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'BTF Kabir',
        jobTitle: 'Full-Stack Developer',
        description: 'Professional Full-Stack Developer specializing in Nuxt.js, Vue.js, and Tailwind CSS',
        url: '/',
        sameAs: [
          'https://github.com/BTF-Kabir-2020'
        ],
        email: 'PouyaGH2080@gmail.com',
        knowsAbout: [
          'Nuxt.js',
          'Vue.js',
          'Tailwind CSS',
          'Full-Stack Development',
          'Web Development',
          'JavaScript',
          'TypeScript'
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Freelance'
        }
      })
    }
  ]
})
</script>
