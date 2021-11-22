<template>
  <div class="home">
    Home
    <p ref="para">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">add age</button>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "Home",

  // the setup hook runs before anything else
  setup() {
    // this keyword is not allowed in the setup hook and composition api

    // introduce ref as the references of the DOM element it hooked with
    const para = ref(null);

    // the values are not reactive elements, therefore, ref will solve this porblem and make the element have dynamic values
    let name = ref("mario");
    let age = ref(30);

    const handleClick = () => {
      name.value = "luigi";
      age.value = 35;

      // console.log(para, para.value);
      // para.value.classList.add("test");
      // para.value.textContent = "hello";
    };

    // if the things wanna to be used in the template, have to resigtered via return value
    return { name, age, handleClick, para };
  },
};
</script>
