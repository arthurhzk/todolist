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
  width: 600px;
  min-height: 712px;
  background-color: #9bd77e;
  flex-direction: column;
  margin-top: 80px;
  border-radius: 8px;
  box-shadow: 20px;
}
</style>
