// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import setupStore from "./store/store";

const renderWithProviders = (
  ui,
  { preloadedState = {}, store = setupStore(preloadedState), ...renderOptions } = {}
) => {
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

  Wrapper.propTypes = { children: PropTypes.node.isRequired };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

// re-export everything
// eslint-disable-next-line import/no-extraneous-dependencies
export * from "@testing-library/react";

// override render method
export { renderWithProviders as render };
