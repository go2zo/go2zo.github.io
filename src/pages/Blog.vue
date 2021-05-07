<template>
  <Layout>
    <Section container="md" class="blog-posts">
      <div class="text-center container-sm mb-x2">
        <h1>Blog</h1>
        <p class="opacity-80">"Simple is best, less is more."</p>
      </div>
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </Section>
  </Layout>
</template>

<page-query>
query {
  posts: allBlogPost {
    edges {
      node {
        id
        title
        path
        date(format: "D. MMM YYYY")
        timeToRead
        author {
          id
          title
          path
        }
        tags {
          id
          title
        }
        excerpt
        content
      }
    }
  }
}
</page-query>

<script>
import PostCard from '@/components/PostCard'

export default {
  components: {
    PostCard,
  },
  metaInfo: {
    title: 'About us',
  },
}
</script>
