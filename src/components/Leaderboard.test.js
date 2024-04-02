import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Leaderboard from './Leaderboard';

describe('Leaderboard Component', () => {
  it('renders the leaderboard table with correct headers', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Leaderboard />
      </Provider>
    );

    // Check if the table headers are rendered correctly
    expect(getByText('User')).toBeInTheDocument();
    expect(getByText('Answered')).toBeInTheDocument();
    expect(getByText('Created')).toBeInTheDocument();
  });
});
