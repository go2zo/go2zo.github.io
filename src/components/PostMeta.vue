<template>
  <p>
    <small>
      <template v-if="post.author">
        Posted {{ post.date }} by
        <template v-for="(author, i) in post.author">
          <span v-if="i && i === post.author.length - 1" :key="author.id">
            and
          </span>
          <span v-else-if="i > 0" :key="author.id">, </span>
          <g-image
            v-if="author.avatar"
            :key="author.id"
            class="avatar-image"
            :alt="author.title"
            :src="author.avatar"
          />
          <g-link v-if="author.path" :key="author.id" :to="author.path">{{
            author.title
          }}</g-link>
          <span v-else :key="author.id">{{ author.title }}</span>
        </template>
      </template>
      <template v-if="post.timeToRead">
        <span> – </span>
        <strong>{{ post.timeToRead }} min read</strong>
      </template>
    </small>
  </p>
</template>

<script>
export default {
  props: {
    post: { type: Object, required: true },
  },
}
</script>
