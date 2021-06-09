<template>
  <div class="card" :class="{ 'card--has-link': link }">
    <g-link v-if="link" class="card__link" :to="link"> Read more </g-link>
    <div v-if="title" class="card__title">
      <span v-html="title" />
    </div>
    <div v-if="image" class="card__image">
      <g-image :src="image" />
    </div>
    <div class="card__inner">
      <slot />
    </div>
    <slot name="outer" />
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.card {
  @apply border-darker bg relative border rounded;
  @apply z-1 transition duration-300;

  &__title {
    @apply w-full -mt-4 text-center;

    span {
      @apply inline-block px-3 pt-0.5 pb-1 bg-dark;
      @apply text-base font-medium tracking-wide text-white rounded;
    }
  }

  &__image {
    @apply border-primary border-b rounded-t rounded-b-none;
    @apply overflow-hidden transition-colors duration-300;

    img {
      @apply w-full m-0;
    }
  }

  &__inner {
    @apply p-x1 relative overflow-hidden;
  }

  &[class*='container'] &__inner {
    @apply px-0;
  }

  .section--dark & {
    @apply bg-dark opacity-10 border-white;
  }

  &__link {
    @apply z-1 absolute top-0 left-0 w-full h-full opacity-0;
    @apply indent-full whitespace-nowrap overflow-hidden; /** Scott Kellum Method */
    @apply focus:opacity-100 focus:outline;
  }

  a:not(.card__link) {
    @apply z-1 relative;
  }

  &--has-link:hover {
    @apply shadow-glow text-current transform -translate-y-1;
  }

  h2,
  h3,
  h4 {
    @apply mb-2;
  }

  p:not(:last-child) {
    @apply mb-5;
  }
}
</style>
