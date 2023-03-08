import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Task from "./Task";
import { render } from "../../test-utils";

describe("Task", () => {
  const task = { id: "1", title: "Title" };

  it("should display the task", () => {
    render(<Task taskId={task.id} isDone={false} />, {
      preloadedState: {
        task: { collection: [{ ...task }] },
      },
    });

    expect(screen.getByRole("button", { name: task.title })).toBeInTheDocument();
  });

  it("should delete from Todo and add to Done", () => {
    const {
      store: { getState },
    } = render(<Task taskId={task.id} isDone={false} />, {
      preloadedState: {
        task: { collection: [{ ...task }], todo: [task.id], done: [] },
      },
    });

    // Click on Task button
    userEvent.click(screen.getByRole("button", { name: task.title }));

    expect(getState().task.todo).toEqual([]);
    expect(getState().task.done).toEqual([task.id]);
  });

  it("should add to Todo and delete from Done", () => {
    const {
      store: { getState },
    } = render(<Task taskId={task.id} isDone />, {
      preloadedState: {
        task: { collection: [{ ...task }], todo: [], done: [task.id] },
      },
    });

    // Click on Task button
    userEvent.click(screen.getByRole("button", { name: task.title }));

    expect(getState().task.todo).toEqual([task.id]);
    expect(getState().task.done).toEqual([]);
  });
});
