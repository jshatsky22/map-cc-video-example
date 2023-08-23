import { type ComponentConfig } from "@superblocksteam/custom-components";

export default {
  // DO NOT CHANGE THE ID ONCE THE COMPONENT HAS BEEN REGISTERED!
  id: "a88f1462-c2bd-4add-8cbb-626e7c36e12d",
  name: "ToDoList",
  displayName: "To-Do List (Example)",
  componentPath: "components/ToDoList/component.tsx",
  properties: [
    {
      path: "tasks",
      dataType: "any",
      propertiesPanelDisplay: {
        label: "Default Tasks",
        placeholder:
          "{ taskId: { taskName: 'Task Name', taskStatus: 'complete' | 'todo' } }",
        controlType: "js-expr",
        exampleData: `{
  task1: {
    taskName: "Take out the trash",
    taskStatus: "todo",
  },
}`,
      },
      description: "The list of tasks to display on the to-do list.",
    },
    {
      path: "deletedTasks",
      dataType: "any",
      description: "The list of deleted tasks",
    },
  ],
  events: [
    {
      label: "On Task Added",
      path: "onTaskAdded",
    },
    {
      label: "On Task Status Changed",
      path: "onTaskStatusChanged",
    },
    {
      label: "On Task Deleted",
      path: "onTaskDeleted",
    },
  ],
} satisfies ComponentConfig;
