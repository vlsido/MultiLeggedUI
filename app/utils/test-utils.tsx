import React, { type JSX, type ReactElement } from "react"
import { render, type RenderOptions } from "@testing-library/react"
import { Provider } from "react-redux";
import { setupStore, type AppStore, type RootState } from "~/redux/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "wrapper"> {
  preloadedState?: Partial<RootState>
  store?: AppStore
}

function AllTheProviders(
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {

  function Wrapper({ children }: { children: React.ReactNode }): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return {
    store,
    ...render(
      ui,
      { wrapper: Wrapper, ...renderOptions }
    ),
  }
}

export * from "@testing-library/react"
export { AllTheProviders as render }
