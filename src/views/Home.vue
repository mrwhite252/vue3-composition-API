<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>The content is loading...</div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";

import getPosts from "../composables/getPosts";

export default {
  name: "Home",
  components: { PostList },

  // the setup hook runs before anything else
  setup() {
    const { posts, error, load } = getPosts();

    load();

    // if the things wanna to be used in the template, have to resigtered via return value
    return { posts, error };
  },
};
</script>
