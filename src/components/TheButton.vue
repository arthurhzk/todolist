<template>
  <button class="the-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "TheButton",
};
</script>

<style scoped>
.the-button {
  cursor: pointer;
}
</style>
