import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('renders without crashing', () => {
  render(<App />);
  });
  
  test('toggle loads dark mode', () => {
    const { getByTestId } = render(<App/>);
    getByTestId("toggle-element");
  })
  
  test('Get homepage title', () => {
    const { getByText } = render(<App />);
    getByText(/Women's World Cup Players/i);
    });