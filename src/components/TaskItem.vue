<template>
  <div
    class="task-container"
    :class="{
      completed: done,
    }"
  >
    <input @change="checkTask" type="checkbox" :checked="done" />

    <h3 class="title-task">{{ title }}</h3>
    <the-button class="remove-button" @click="removeTask">X</the-button>
    <the-button class="edit-button" @click="editTask">edit</the-button>
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
    edit: {
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
    editTask() {
      this.$emit("edit");
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
.title-task {
  color: white;
}
</style>
