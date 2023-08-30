<template>
  <div class="main-container">
    <input type="checkbox" v-model="filterOn" />
    <the-card>
      <h1 class="main-title">TO DO LIST</h1>
      <div class="input-container">
        <the-input
          class="input-task"
          :value="taskValue"
          @change="taskValue = $event.target.value"
          placeholder="some words..."
        ></the-input>
        <the-button @click="addTask">Add</the-button>
      </div>
      <task-item
        class="task-item-container"
        v-for="(task, index) in taskList"
        :key="index"
        :title="task.title"
        :done="task.done"
        @remove="removeTask(index)"
        @check="(checked) => (task.done = checked)"
        @edit="editTask(index)"
      >
      </task-item>
    </the-card>
  </div>
</template>

<script>
import TheCard from "@/components/TheCard.vue";
import TheInput from "@/components/TheInput.vue";
import TheButton from "@/components/TheButton.vue";
import TaskItem from "@/components/TaskItem.vue";
import { useTasksStore } from "@/store/tasksStore.js";
export default {
  components: {
    TheCard,
    TheInput,
    TheButton,
    TaskItem,
  },
  setup() {
    const tasksStore = useTasksStore();
    return { tasksStore };
  },
  data() {
    return {
      taskValue: "",
      filterOn: false,
    };
  },
  methods: {
    addTask() {
      if (this.taskValue == "") {
        return;
      }
      this.tasksStore.taskItems.push({ title: this.taskValue, done: false });
      this.taskValue = "";
    },
    removeTask(index) {
      this.tasksStore.taskItems.splice(index, 1);
    },
    editTask(index) {
      this.tasksStore.taskItems[index].title = prompt("Edit task");
    },
  },
  computed: {
    taskList() {
      return this.filterOn
        ? this.tasksStore.completedTasks
        : this.tasksStore.taskItems;
    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-title {
  color: #545454;
  font-size: 32px;
  font-weight: 700;
}
.input-container {
  display: flex;
}
.task-item-container {
  background-color: #545454;
  width: 400px;
  border-radius: 8px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
</style>
