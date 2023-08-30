<template>
  <input class="main-input" type="text" v-bind="$attrs" />
</template>

<script>
export default { name: "TheInput" };
</script>

<style>
.main-input {
  padding: 12px;

  border: none;
  border-radius: 8px;
}
</style>
