import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import { MemoryRouter as Router } from 'react-router-dom';
import App from '../App';
import withStore from '../HoC/withStore';

let AppWithStore: React.FC;

beforeEach(() => {
  AppWithStore = withStore()(App);
});

describe('App', () => {
  test('Should not have basic accessibility issues', async () => {
    const { container } = render(
      <Router>
        <AppWithStore />
      </Router>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('Navigation to posts works', async () => {
    const { getByText, getAllByTestId } = render(
      <Router>
        <AppWithStore />
      </Router>,
    );
    const postsLink = getByText('Posts');
    fireEvent.click(postsLink);
    const posts = await waitForElement(() => getAllByTestId('post'));
    expect(posts.length).toBeGreaterThan(0);
    expect(posts[0]).toBeVisible();
  });

  test('Navigation to users works', async () => {
    const { getByText, getAllByTestId } = render(
      <Router>
        <AppWithStore />
      </Router>,
    );
    const usersLink = getByText('Users');
    fireEvent.click(usersLink);
    const users = await waitForElement(() => getAllByTestId('user'));
    expect(users.length).toBeGreaterThan(0);
    expect(users[0]).toBeVisible();
  });
});
