<template>
  <a
    role="button"
    :aria-label="'Toggle ' + nextTheme"
    :title="'Toggle ' + nextTheme"
    @click.prevent="toggleTheme"
  >
    <span v-for="theme in themes" :key="theme" :data-theme="theme" />
    <SunIcon v-if="current === 'light'" />
    <MoonIcon v-else-if="current === 'dark'" />
    <CoffeeIcon v-else />
  </a>
</template>

<script>
import { SunIcon, MoonIcon, CoffeeIcon } from 'vue-feather-icons'

export default {
  components: {
    SunIcon,
    MoonIcon,
    CoffeeIcon,
  },
  data() {
    return {
      themes: ['light', 'dark', 'sepia'],
      current: 'dark',
    }
  },
  computed: {
    nextTheme() {
      const currentIndex = this.themes.indexOf(this.current)
      const nextIndex = (currentIndex + 1) % this.themes.length
      return this.themes[nextIndex]
    },
  },
  mounted() {
    if (window.__theme) {
      this.current = window.__theme
    }
  },
  methods: {
    toggleTheme() {
      const currentIndex = this.themes.indexOf(this.current)
      const nextIndex = (currentIndex + 1) % this.themes.length
      window.__setPreferredTheme(this.themes[nextIndex])
      this.current = this.themes[nextIndex]
    },
  },
}
</script>
