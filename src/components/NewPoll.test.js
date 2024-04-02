import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { store } from '../store'; // Adjust the import path as necessary
import NewPoll from './NewPoll'; // Adjust the import path as necessary

describe('<NewPoll />', () => {
  it('checks for Option 1 and Option 2 fireEvent', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/new']}>
          <Routes>
            <Route path="/new" element={<NewPoll />} />
            // Mocking a redirect component to capture navigation
            <Route path="/" element={<div>Mock Home</div>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    // Simulate user typing in the first option
    fireEvent.change(getByTestId('firstOption'), { target: { value: 'Option 1' } });

    // Simulate user typing in the second option
    fireEvent.change(getByTestId('secondOption'), { target: { value: 'Option 2' } });
  });
});
