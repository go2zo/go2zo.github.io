<template>
  <!-- <div class="logo" @contextmenu="rightClick" oncontextmenu="return false;"> -->
  <div class="logo">
    <g-link class="logo__link" to="/" title="Back to home">
      <Logo class="hidden logo__svg md:block" alt="go2zo.io" />
      <LogoSmall class="block logo__svg md:hidden" alt="go2zo.io" />
    </g-link>
  </div>
</template>

<script>
import Logo from '@/assets/images/logo.svg'
import LogoSmall from '@/assets/images/logo-small.svg'

export default {
  components: {
    Logo,
    LogoSmall,
  },
  methods: {
    rightClick() {
      this.$router.push({ path: '/logo' })
      return false
    },
  },
}
</script>

<style lang="postcss">
.logo__svg {
  @apply w-8 h-auto;
}
</style>
