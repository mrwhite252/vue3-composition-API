<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postWithTag" />
      <TagCloud :posts="posts" />
    </div>
  </div>
</template>

<script>
// challenge

// - create a tag route, which the tag as a route paramater (/tags/:tag)
// - in the Tag component, make a request for all the posts
// - use a computed property to return an array of posts which have the current tag
// - use the useRoute function to access the tag route parameter
// - use the PostList component to output the required posts
// - show the spinner until the data is loaded and error if there is one

import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
import TagCloud from "../components/TagCloud.vue";

import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";

export default {
  components: { PostList, TagCloud },

  setup() {
    const route = useRoute();

    const { posts, error, load } = getPosts();

    load();

    const postWithTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });

    return { error, posts, postWithTag };
  },
};
</script>

<style></style>
