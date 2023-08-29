import { defineStore } from "pinia";
export const useTasksStore = defineStore("tasks", {
  state: () => ({
    taskItems: [],
  }),
  getters: {
    completedTasks: (state) =>
      state.taskItems.filter((task) => {
        return task.done;
      }),
  },
  actions: {},
  persist: true,
});
