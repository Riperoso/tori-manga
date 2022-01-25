import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

afterEach(() => jest.clearAllMocks());

it('fetch mangá', async () => {
  const manga = { top: [{
    id: 2,
    title: 'SNK',
    rank: 2,
    score: 7.87,
    volumes: 70,
  }] };

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(manga),
  }));

  render(<Home />);

  const renderedManga = await screen.findByText('SNK');
  expect(renderedManga).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://api.jikan.moe/v3/top/manga/1/bypopularity');
});
