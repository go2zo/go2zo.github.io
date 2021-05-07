<template>
  <footer class="z-10 p-5 -mt-px text-xs text-center border bg border-primary">
    <span>© {{ new Date().getFullYear() }} </span>
    <g-link to="/about">{{ $static.metadata.author.name }}.</g-link>
    <span>
      Powered by
      <a href="//gridsome.org" rel="noopener noreferrer" target="_blank">
        Gridsome
      </a>
    </span>
  </footer>
</template>

<static-query>
query {
  metadata {
    author {
      title
    }
  }
}
</static-query>
