import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ByCharacter from './ByCharacter';

describe('ByCharacter component', () => {
  afterEach(() => cleanup());
  it('renders ByCharacter', async () => {
    render(
      <ByCharacter
        match={{
          params: { character: 'arnold' },
        }}
      />
    );

    screen.getByText('Loading...');

    const ul = await screen.findByTestId('arnold');

    expect(ul).not.toBeEmptyDOMElement();
  });
});
