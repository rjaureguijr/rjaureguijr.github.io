import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('RJ name should be in app', () => {
  const { getByText } = render(<App />);
 
  const nameElement = getByText(/Rudy Jauregui/i);
  expect(nameElement).toBeInTheDocument();
});
