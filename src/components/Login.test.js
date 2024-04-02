import {fireEvent, render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../store";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Login from "./Login";
import {handleInitialData} from "../actions/shared";

describe("Login", () => {
    it("should render the component", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login/>
                </BrowserRouter>
            </Provider>
        );
        expect(component).toBeDefined();
        expect(component).toMatchSnapshot();
    });

    it('should update input fields when user types and validate their presence', async () => {
        await store.dispatch(handleInitialData());

        const wrapper = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login/>
                </BrowserRouter>
            </Provider>
        );

        // Define username, password, and submit button...
        const usernameInputElement = wrapper.getByTestId("username");
        const passwordInputElement = wrapper.getByTestId("password");
        const submitButtonElement = wrapper.getByTestId("submit");

        // Expects...
        expect(usernameInputElement).toBeInTheDocument();
        expect(passwordInputElement).toBeInTheDocument();
        expect(submitButtonElement).toBeInTheDocument();

        fireEvent.change(usernameInputElement, {target: {value: 'tylermcginnis'}});
        fireEvent.change(passwordInputElement, {target: {value: 'test'}});
        
        expect(usernameInputElement.value).toBe("tylermcginnis");
        expect(passwordInputElement.value).toBe("test");
    });

    it('should show an error message if submit with empty fields', async () => {
        // Your setup code for rendering the component...

        const wrapper = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login/>
                </BrowserRouter>
            </Provider>
        );

        // Get submit button and click it without filling the fields
        const submitButtonElement = wrapper.getByTestId("submit");
        fireEvent.click(submitButtonElement);

        // Check if the error message is displayed
        const errorMessage = wrapper.queryByTestId("error-message");
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage.textContent).toBe("Error: Username and password are required!");
    });
});