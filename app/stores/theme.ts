import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<'light' | 'dark' | 'system'>('system')
  const isDark = ref(false)

  // Initialize theme on client side
  const initTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null
      if (savedTheme) {
        theme.value = savedTheme
      }
      applyTheme()
    }
  }

  // Apply theme to document
  const applyTheme = () => {
    if (process.client) {
      const html = document.documentElement
      
      if (theme.value === 'system') {
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        html.classList.toggle('dark', systemDark)
        isDark.value = systemDark
      } else {
        html.classList.toggle('dark', theme.value === 'dark')
        isDark.value = theme.value === 'dark'
      }
    }
  }

  // Set theme
  const setTheme = (newTheme: 'light' | 'dark' | 'system') => {
    theme.value = newTheme
    if (process.client) {
      localStorage.setItem('theme', newTheme)
    }
    applyTheme()
  }

  // Toggle theme
  const toggleTheme = () => {
    if (theme.value === 'system') {
      setTheme('dark')
    } else if (theme.value === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  // Watch for system theme changes
  const watchSystemTheme = () => {
    if (process.client && theme.value === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      mediaQuery.addEventListener('change', applyTheme)
    }
  }

  return {
    theme: readonly(theme),
    isDark: readonly(isDark),
    initTheme,
    setTheme,
    toggleTheme,
    watchSystemTheme
  }
})
