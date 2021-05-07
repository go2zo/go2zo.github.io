<template>
  <header>
    <div class="header-bar"></div>
    <div class="container flex gap-8 header-inner">
      <Logo />
      <Nav class="flex flex-1" />
      <SearchForm class="flex-auto" />
      <nav class="flex header-actions">
        <ToggleTheme />
        <a
          aria-label="Github"
          :href="$static.metadata.repository.url"
          target="_blank"
          title="go2zo @ github"
        >
          <GithubIcon />
          <!-- <GithubLogo /> -->
        </a>
      </nav>
    </div>
  </header>
</template>

<static-query>
query {
  metadata {
    repository {
      url
    }
  }
}
</static-query>

<script>
import SearchForm from '@/components/SearchForm'
import ToggleTheme from '@/components/ToggleTheme'
// import GithubLogo from '@/assets/images/github-logo.svg'
import { GithubIcon } from 'vue-feather-icons'
import Nav from './Nav'
import Logo from './Logo'

export default {
  components: {
    Logo,
    Nav,
    SearchForm,
    ToggleTheme,
    // GithubLogo,
    GithubIcon,
  },
}
</script>

<style lang="scss">
header {
  @apply z-20 top-0 bg-90 border-b border-primary flex-nowrap sticky transition-colors duration-300;

  .header-bar {
    @apply bg-gradient-to-r from-primary via-blue-300 to-pink-600 p-0.5 text-center text-white text-base;

    a {
      @apply text-current;
    }
  }

  .header-inner {
    @apply px-x1 py-0 items-center h-12;
    min-height: 58px;
  }

  @media screen and (min-width: 992px) and (max-resolution: 1) {
    backdrop-filter: blur(4px);
  }
  @media screen and (min-width: 992px) and (-webkit-max-device-pixel-ratio: 1) {
    backdrop-filter: blur(4px);
  }
}
</style>
