<template>
  <div class="custom-header">
    <h1>{{ frase }}</h1>
  </div>
</template>

<script>
export default {
  name: "CustomHeader",
  props: {
    frase: String,
  },
};
</script>

<style>
</style>