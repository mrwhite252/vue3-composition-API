<template>
  <div class="home">
    Home
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: "Home",

  // the setup hook runs before anything else
  setup() {
    // the values are initally not dynamically rendered out
    let name = "mario";
    let age = 30;

    const handleClick = () => {
      console.log("you clicked me");
    };

    // if the things wanna to be used in the template, have to resigtered via return value
    return { name, age, handleClick };
  },
};
</script>
