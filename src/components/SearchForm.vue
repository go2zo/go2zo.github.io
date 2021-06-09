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
  @apply flex-1 block w-full mb-0 text-sm;
  @apply sm:mx-inherit sm:mt-inherit sm:mb-0 my-0 mr-1 -ml-3;

  label {
    @apply flex items-center;
  }

  .search-icon {
    @apply opacity-60 w-4 -ml-8 pointer-events-none;
  }
}
</style>
