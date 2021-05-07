<template>
  <form :id="id" class="header-search">
    <label>
      <input
        :id="inputId"
        ref="input"
        placeholder="Search Docs"
        title="Search Docs"
        type="search"
        @focus="onFocus"
      />
      <SearchIcon class="search-icon" />
    </label>
  </form>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons'

export default {
  components: {
    SearchIcon,
  },
  props: {
    id: { type: String, default: 'search' },
  },
  data() {
    return {
      isLoaded: false,
    }
  },
  computed: {
    inputId() {
      return `${this.id}-input`
    },
  },
  methods: {
    onFocus() {},
  },
}
</script>

<style lang="scss">
.header-search {
  @apply block mb-0 text-sm flex-1 w-full;
  @apply my-0 mr-1 -ml-3 sm:mx-inherit sm:mt-inherit sm:mb-0;

  label {
    @apply flex items-center;
  }

  .search-icon {
    @apply -ml-8 w-4 pointer-events-none opacity-60;
  }
}
</style>
