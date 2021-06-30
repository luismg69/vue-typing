<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <CustomHeader />
    <CustomForm />
  </div>
</template>

<script>
import CustomHeader from "./components/CustomHeader";
import CustomForm from "./components/CustomForm";

export default {
  name: "App",
  components: {
    CustomForm,
    CustomHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
