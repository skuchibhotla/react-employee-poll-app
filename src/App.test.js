import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter} from "react-router-dom";
import {setAuthedUser} from "./actions/authedUser";

describe("App", () => {
  it("should render the component", () => {
      const component = render(
          <Provider store={store}>
              <BrowserRouter>
                  <App/>
              </BrowserRouter>
          </Provider>
      );
      expect(component).toBeDefined();
      expect(component).toMatchSnapshot();
  });

  it("should show Login page when not logged in", () => {
      const component = render(
          <Provider store={store}>
              <BrowserRouter>
                  <App/>
              </BrowserRouter>
          </Provider>
      );
      const login = component.getByTestId("custom-login");
      expect(login).toBeInTheDocument();
  });

  it("should show Dashboard page when logged in", () => {
      store.dispatch(setAuthedUser({id: "tylermcginnis", password: "abc321"}));

      const component = render(
          <Provider store={store}>
              <BrowserRouter>
                  <App/>
              </BrowserRouter>
          </Provider>
      );

      const dashboard = component.getByTestId("custom-dashboard");
      expect(dashboard).toBeInTheDocument();
  });
});