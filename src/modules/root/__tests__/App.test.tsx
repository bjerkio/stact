import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import { MemoryRouter } from 'react-router-dom';
import faker from 'faker'
import App from '../App';
import withStore from '../HoC/withStore';

let AppWithStore: React.FC;

beforeEach(() => {
  AppWithStore = withStore()(App);
});

describe('App', () => {
  test('Should not have basic accessibility issues', async () => {
    const { container } = render(<AppWithStore />, { wrapper: MemoryRouter });
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  describe('Posts navigation', () => {
    test('Navigating to specific post', async () => {
      const { getByText, getAllByTestId, getByTestId } = render(<AppWithStore />, {
        wrapper: MemoryRouter,
      });
      const postsLink = getByText('Posts');
      fireEvent.click(postsLink);
      const posts = await waitForElement(() => getAllByTestId('post'));
      expect(posts.length).toBeGreaterThan(0);
      expect(posts[0]).toBeVisible();
      // we now have a list of posts

      const randomPostIndex = faker.random.number(posts.length - 1)

      // until we have a mock setup, we can't know for sure if we'll get a unique title text
      const postTitleLink = getAllByTestId('post-title')[randomPostIndex]
      fireEvent.click(postTitleLink)

      const postTitleResult = await waitForElement(() => getByTestId('post-title'))
      expect(postTitleResult.textContent).toBe(postTitleLink.textContent)
    });
  })

  describe('Users navigation', () => {
    test('Navigating to user list', async () => {
      const { getByText, getAllByTestId, } = render(<AppWithStore />, {
        wrapper: MemoryRouter,
      });
      const usersLink = getByText('Users');
      fireEvent.click(usersLink);
      const users = await waitForElement(() => getAllByTestId('user'));
      expect(users.length).toBeGreaterThan(0);
      expect(users[0]).toBeVisible();
      // we now have a list of users
    });
  })
});
