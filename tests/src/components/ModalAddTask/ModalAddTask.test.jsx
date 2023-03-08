import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { render } from "../../test-utils";
import ModalAddTask from "./ModalAddTask";

describe("ModalAddTask", () => {
  const closeModal = jest.fn();

  it("should close modal", () => {
    render(<ModalAddTask closeModal={closeModal} />);

    // Click on Cancel button
    userEvent.click(screen.getByRole("button", { name: "Cancel" }));

    expect(closeModal).toBeCalledTimes(1);
  });

  it("should add task", () => {
    const title = "Title";

    const {
      store: { getState },
    } = render(<ModalAddTask closeModal={closeModal} />);

    // Type text in input
    userEvent.type(screen.getByLabelText("Title"), title);

    // Click on submit button
    userEvent.click(screen.getByRole("button", { name: "Add" }));

    expect(getState().task.collection[0].title).toBe(title);
    expect(closeModal).toBeCalledTimes(1);
  });

  it("should don't add task", () => {
    const {
      store: { getState },
    } = render(<ModalAddTask closeModal={closeModal} />);

    // Click on submit button
    userEvent.click(screen.getByRole("button", { name: "Add" }));

    expect(getState().task.collection).toEqual([]);
    expect(closeModal).toBeCalledTimes(1);
  });

  it("should be focused on input", async () => {
    render(<ModalAddTask closeModal={closeModal} />);

    // Wait useEffect
    // eslint-disable-next-line no-promise-executor-return
    await act(() => new Promise((r) => setTimeout(r, 100)));

    // eslint-disable-next-line testing-library/no-node-access
    expect(document.activeElement).toEqual(screen.getByLabelText("Title"));
  });
});
