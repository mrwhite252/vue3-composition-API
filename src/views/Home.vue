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
import { ref } from "@vue/reactivity";

import PostList from "../components/PostList.vue";

export default {
  name: "Home",
  components: { PostList },

  // the setup hook runs before anything else
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");

        posts.value = await data.json();

        if (!data.ok) {
          throw Error("no data available");
        }
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };

    load();

    // if the things wanna to be used in the template, have to resigtered via return value
    return { posts };
  },
};
</script>
