<template>
  <div
    class="task-container"
    :class="{
      completed: done,
    }"
  >
    <input @change="checkTask" type="checkbox" :checked="done" />
    <li>{{ title }}</li>
    <the-button @click="removeTask">X</the-button>
  </div>
</template>

<script>
import TheButton from "@/components/TheButton.vue";
export default {
  emits: ["remove", "check"],
  props: {
    title: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  name: "TaskItem",
  components: {
    TheButton,
  },
  methods: {
    removeTask() {
      this.$emit("remove");
    },
    checkTask(event) {
      this.$emit("check", event.target.checked);
    },
  },
};
</script>

<style>
.task-container {
  display: flex;
}
.completed {
  background-color: green;
}
</style>
