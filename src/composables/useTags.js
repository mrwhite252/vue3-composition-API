// take in an array of posts
// create a new tag set (so there's no duplicates)
// add the tags of each post to the tag set
// return a single array of tags based on the set

import { ref } from "@vue/reactivity";

const useTags = (posts) => {
  const tags = ref([]);

  const tagSet = new Set(); //The Set constructor lets you create Set objects that store unique values of any type, whether primitive values or object references.

  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });

  //   turn set into array

  tags.value = [...tagSet];

  return { tags };
};

export default useTags;
