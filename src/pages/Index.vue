<template>
  <Layout>
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true } }) {
    edges {
      node {
        id
        title
        date(format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image(width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteUrl
    siteDescription
    pathPrefix
  }
}
</static-query>

<script>
import Author from '~/components/Author.vue';
import PostCard from '~/components/PostCard.vue';

export default {
  components: {
    Author,
    PostCard,
  },
  metaInfo() {
    return {
      title: 'Home',
      meta: [
        {
          key: 'google-site-verification',
          name: 'google-site-verification',
          content: 'Tq3ybiOeaV6BP_COK1UBAMh8kQe3-ubJJqeJElzUHKQ',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.$static.metadata.siteName },
        { property: 'og:description', content: this.$static.metadata.siteDescription },
        { property: 'og:url', content: this.$static.metadata.siteUrl },
        { property: 'og:image', content: this.ogImageUrl },
      ],
    };
  },
  computed: {
    ogImageUrl() {
      return `${this.$static.metadata.siteUrl}${this.$static.metadata.pathPrefix}/images/author.jpg`;
    },
  },
};
</script>
