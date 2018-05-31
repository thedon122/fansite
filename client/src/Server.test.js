import React from 'react';
import ReactDOM from 'react-dom';
import Server from './Server';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Server />, div);
  ReactDOM.unmountComponentAtNode(div);
});
