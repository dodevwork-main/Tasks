import { screen } from "@testing-library/react";
import DoneListTasks from "./DoneListTasks";
import { render } from "../../test-utils";

describe("DoneListTasks", () => {
  it("should display the done task list", () => {
    const done = ["1", "2", "3"];
    const collection = [
      { id: "1", title: "Title1" },
      { id: "2", title: "Title2" },
      { id: "3", title: "Title3" },
    ];

    render(<DoneListTasks />, {
      preloadedState: {
        task: { collection, done },
      },
    });

    collection.forEach((task) => {
      expect(screen.getByRole("button", { name: task.title })).toBeInTheDocument();
    });
  });
});
