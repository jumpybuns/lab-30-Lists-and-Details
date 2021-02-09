import React from 'react';
import { render, cleanup } from '@testing-library/react';
import MainCharacters from './MainCharacters';

describe('MainCharacters component', () => {
  afterEach(() => cleanup());
  it('renders MainCharacters', async () => {
    render(<MainCharacters character="character" />);

    screen.getByText('Loading...');

    const ul = await screen.findByTestId('arnold');

    expect(ul).toMatchSnapshot();
  });
});
