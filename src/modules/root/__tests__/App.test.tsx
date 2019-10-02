import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import { axe } from 'jest-axe';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import withStore from '../HoC/withStore';

const AppWithStore = withStore()(App);

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

  test('Something works', async () => {
    const { getAllByTestId } = render(
      <Router>
        <AppWithStore />
      </Router>,
    );
    const posts = await waitForElement(() => getAllByTestId('post'));
    expect(posts.length).toBeGreaterThan(0);
    expect(posts[0]).toBeInTheDocument();
    // you can test for any valid css declaration
    // values are automatically converted, all these would test the same
    // expect(postTitle).toHaveStyle(`color: black`);
    // expect(postTitle).toHaveStyle(`color: #000`);
    // expect(postTitle).toHaveStyle(`color: rgb(0,0,0)`);
    // if you need to click on something
    // fireEvent.click(postTitle);
    // if you need to wait for something to load on the page after an action
    // const newElement = await waitForElement(() => getByText('some other text'));
    // expect(newElement).toBeVisible();
  });
});
