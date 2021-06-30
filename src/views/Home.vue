<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <CustomHeader v-bind:frase="FRASE" />
    <CustomForm v-bind:frase="FRASE" />
  </div>
</template>

<script>
// @ is an alias to /src
import CustomHeader from "@/components/CustomHeader";
import CustomForm from "@/components/CustomForm";
export default {
  name: "Home",
  components: {
    CustomForm,
    CustomHeader,
  },
  data: function () {
    return {
      FRASE: "en un lugar de la mancha",
    };
  },
};
</script>