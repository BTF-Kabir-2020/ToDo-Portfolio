<template>
  <div class="min-h-screen bg-gradient-soft dark:bg-gradient-dark-soft">
    <!-- Navigation -->
    <AppNavbar />

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
// Components are auto-imported by Nuxt
</script>
