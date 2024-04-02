import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Dashboard from './Dashboard';
import { store } from '../store';

describe('Dashboard Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    const dashboardElement = getByTestId('custom-dashboard');
    expect(dashboardElement).toBeInTheDocument();
  });
});
