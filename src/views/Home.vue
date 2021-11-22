<template>
  <div class="home">
    Home
    <h2>refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button>

    <h2>reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update Ninja Two</button>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
export default {
  name: "Home",

  // the setup hook runs before anything else
  setup() {
    const ninjaOne = ref({ name: "mario", age: 30 });

    const ninjaTwo = reactive({ name: "luigi", age: 35 });

    // however, reactive is not working on primative values, such as string and numbers, like this:

    const nameTwo = reactive("mario");

    // it won't dynamically updated the value, so it is better to use ref other than reactive, in most cases

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };

    const updateNinjaTwo = () => {
      ninjaTwo.age = 45;
    };

    return { ninjaOne, ninjaTwo, updateNinjaOne, updateNinjaTwo };
  },
};
</script>
