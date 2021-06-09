<template>
  <section class="section" :class="sectionClass">
    <div class="section--inner container" :class="sectionClassInner">
      <slot />
    </div>
    <div v-if="dots" class="section__dots-bg dogs-bg" />
    <slot name="outer" />
  </section>
</template>

<script>
export default {
  props: {
    dark: Boolean,
    dots: Boolean,
    container: {
      type: String,
      default: null,
    },
    framed: Boolean,
    secondary: Boolean,
  },
  computed: {
    sectionClass() {
      const classes = []
      if (this.secondary) classes.push('section--secondary')
      if (this.dark) classes.push('section--dark')
      return classes
    },
    sectionClassInner() {
      const classes = []
      if (this.framed) classes.push('container--framed')
      if (this.container) classes.push(`container-${this.container}`)
      return classes
    },
  },
}
</script>

<style lang="scss">
.section {
  @apply relative flex-1 w-full;
  padding: calc(2% + var(--space)) 0;

  &--secondary {
    @apply bg-secondary border-primary border-t border-b;
  }

  &__dots-bg {
    @apply h-175 max-w-375 absolute inset-x-0 bottom-0 max-h-full mx-auto my-0 opacity-100;
    z-index: 1;
  }

  &--inner {
    @apply relative;
    z-index: 2;
  }

  &--dark {
    @apply bg-dark text-white;

    p {
      @apply text-current;
    }

    h1,
    h2,
    h3,
    h4,
    a {
      @apply text-white;
    }
  }
}
</style>
