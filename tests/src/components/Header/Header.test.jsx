import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";
import { render } from "../../test-utils";

describe("Header", () => {
  it("should call the modal", () => {
    render(<Header />);

    // Click on button
    userEvent.click(screen.getByRole("button", { name: "Add Task" }));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
