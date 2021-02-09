import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ByCharacter from './ByCharacter';

describe('ByCharacter container', () => {
  it('displays quotes by a character', async () => {
    render(<ByCharacter match={{ params: { character: 'Arnold' } }} />);

    screen.getByText('Loading');

    const ul = await screen.findByTestId('quotes');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
