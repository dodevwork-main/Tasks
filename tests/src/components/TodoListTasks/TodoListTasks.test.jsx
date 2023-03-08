import { screen } from "@testing-library/react";
import TodoListTasks from "./TodoListTasks";
import { render } from "../../test-utils";

describe("TodoListTasks", () => {
  it("should display the todo task list", () => {
    const todo = ["1", "2", "3"];
    const collection = [
      { id: "1", title: "Title1" },
      { id: "2", title: "Title2" },
      { id: "3", title: "Title3" },
    ];

    render(<TodoListTasks />, {
      preloadedState: {
        task: { collection, todo },
      },
    });

    collection.forEach((task) => {
      expect(screen.getByRole("button", { name: task.title })).toBeInTheDocument();
    });
  });
});
