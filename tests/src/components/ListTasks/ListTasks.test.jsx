import { screen } from "@testing-library/react";
import ListTasks from "./ListTasks";
import { render } from "../../test-utils";

describe("ListTasks", () => {
  it("should display the task list", () => {
    const tasksIds = ["1", "2", "3"];
    const collection = [
      { id: "1", title: "Title1" },
      { id: "2", title: "Title2" },
      { id: "3", title: "Title3" },
    ];

    render(<ListTasks taskIds={tasksIds} />, {
      preloadedState: {
        task: { collection },
      },
    });

    collection.forEach((task) => {
      expect(screen.getByRole("button", { name: task.title })).toBeInTheDocument();
    });
  });
});
