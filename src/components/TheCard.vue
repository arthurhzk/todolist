<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TheCard",
};
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  background-color: #3f72af;
  flex-direction: column;
}
</style>
