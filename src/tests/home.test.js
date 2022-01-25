import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

afterEach(() => jest.clearAllMocks());

test('fetch mangá', async () => {
  const manga = {
    id: 1,
    name: 'BNHA',
    rate: 8.76,
    volume: 45,
  };

  render(<Home />);

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolverValue({
    json: jest.fn().mockResolvedValue(manga),
  });
  const renderedManga = await screen.findByText('BNHA');
  expect(renderedManga).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://api.jikan.moe/v3/top/manga/1/bypopularity', { headers: { Aaccept: 'application/json' } });
});
