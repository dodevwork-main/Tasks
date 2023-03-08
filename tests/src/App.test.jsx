import { screen } from "@testing-library/react";
import App from "./App";
import { render } from "./test-utils";

describe("App", () => {
  it("should contain header, main, footer", () => {
    render(<App />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
