<template>
  <Card class="blog-posts__post" :link="post.path">
    <h3 v-html="post.title" />
    <p v-html="post.excerpt" />
    <PostMeta :post="post" />
  </Card>
</template>

<script>
import Card from '@/components/Card'
import PostMeta from '@/components/PostMeta'

export default {
  components: {
    Card,
    PostMeta,
  },
  props: {
    post: { type: Object, required: true },
  },
}
</script>

<style lang="scss">
.blog-posts {
  &__post {
    @apply relative mb-8;

    .card__inner {
      @apply p-x2;
    }
  }
}
</style>
