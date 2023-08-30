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
  border: none;
  border-radius: 8px;
  background: var(--primary, #545454);
  color: white;
}
</style>
