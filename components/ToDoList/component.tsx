import React, { useCallback, useState } from "react";
import { useSuperblocksContext } from "@superblocksteam/custom-components";
import { type Props, type EventTriggers } from "./types";
import { Task, ErrorComponent, validateTasks } from "./validation";
import "./main.scss";
import { DeleteOutlined } from "@ant-design/icons";

export default function Component({ tasks, deletedTasks }: Props) {
  const {
    updateProperties,
    events: { onTaskAdded, onTaskStatusChanged, onTaskDeleted },
  } = useSuperblocksContext<Props, EventTriggers>();
  const { validatedTasks, hasError } = validateTasks(tasks ?? {});
  const [value, setValue] = useState("");

  const onTodoAdded = useCallback(() => {
    const id = Math.random().toString(36).substring(2, 8);
    updateProperties({
      tasks: {
        ...validatedTasks,
        [id]: {
          taskName: value,
          taskStatus: "todo",
        },
      },
    });
    onTaskAdded();
  }, [updateProperties, validatedTasks, value, onTaskAdded]);

  const onTaskStatusChange = useCallback(
    (id: string, status: boolean) => {
      updateProperties({
        tasks: {
          ...validatedTasks,
          [id]: {
            ...tasks[id],
            taskStatus: status ? "complete" : "todo",
          },
        },
      });
      onTaskStatusChanged();
    },
    [updateProperties, validatedTasks, tasks, onTaskStatusChanged]
  );

  const onTaskDelete = useCallback(
    (id: string) => {
      // create a copy of the validated tasks which we will manipulate
      const newTasks = { ...validatedTasks };
      // get the task we are about to delete
      const taskToDelete = validatedTasks[id];
      // delete the task
      delete newTasks[id];
      // using the provided updateProperties method
      updateProperties({
        // set the new value of the tasks property
        tasks: newTasks,
        // add the task to the deletedTasks property
        deletedTasks: {
          ...deletedTasks,
          [id]: taskToDelete,
        },
      });
      // trigger the On Task Deleted event in Superblocks
      onTaskDeleted();
    },
    [updateProperties, validatedTasks, tasks, onTaskStatusChanged]
  );

  return hasError ? (
    <ErrorComponent />
  ) : (
    <div className="sb-example-root">
      <h2>To-Do List</h2>
      <div className="horizontal-layout">
        <input
          type="text"
          value={value}
          className="fill"
          placeholder="Add a new item"
          onChange={(e) => setValue(e.target.value)}
          // Prevents the event from bubbling up to the parent (i.e. prevent arrow keys from moving custom component in Superblocks editor)
          onKeyDown={(e) => e.stopPropagation()}
        />
        <button onClick={onTodoAdded}>Add Todo</button>
      </div>
      <div className="checkboxes">
        {Object.entries(validatedTasks).map(
          ([id, task]: [string, Task], idx) => (
            <div key={idx} className="horizontal-layout">
              <input
                type="checkbox"
                checked={task.taskStatus === "complete"}
                onChange={(e) => onTaskStatusChange(id, e.target.checked)}
              />
              <p>
                <span
                  className={
                    task.taskStatus === "complete" ? "is-complete" : ""
                  }>
                  {task.taskName}
                </span>
              </p>
              <div onClick={() => onTaskDelete(id)}>
                <DeleteOutlined className="delete-button" />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
