import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../store";
import {BrowserRouter} from "react-router-dom";
import React from "react";

import {setAuthedUser} from "../actions/authedUser";
import NavBar from "./NavBar";

describe("Nav", () => {
    it("should render the NavBar component", () => {
        store.dispatch(setAuthedUser({id: "tylermcginnis", password: ""}));

        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <NavBar/>
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it("should display username of logged in user", () => {
        store.dispatch(setAuthedUser({id: "tylermcginnis", password: ""}));

        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <NavBar/>
                </BrowserRouter>
            </Provider>
        );

        const userSpanElement = component.getByTestId("user-information");
        expect(userSpanElement.textContent).toBe("User: tylermcginnis");

    });
});
