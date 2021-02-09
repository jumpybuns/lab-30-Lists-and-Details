import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character.jsx';

describe('Character component', () => {
  afterEach(() => cleanup());
  it('renders Character', () => {
    const { asFragment } = render(
      <Router>
        <Character image={'f'} name={'f'} />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
