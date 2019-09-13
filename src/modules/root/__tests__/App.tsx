import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { axe } from 'jest-axe';
import App from '../App';
import store from '../../../store';

describe('App', () => {
  test('Renders', () => {
    render(
      <Provider store={store()}>
        <App />
      </Provider>,
    );
  });

  test('Should not have basic accessibility issues', async () => {
    const { container } = render(
      <Provider store={store()}>
        <App />
      </Provider>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('Something works', async () => {
    const { getByText } = render(
      <Provider store={store()}>
        <App />
      </Provider>,
    );
    const postTitle = getByText('title of post');
    expect(postTitle).toBeInTheDocument();
    expect(postTitle).toBeVisible();
    // you can test for any valid css declaration
    // values are automatically converted, all these would test the same
    expect(postTitle).toHaveStyle(`color: black`);
    expect(postTitle).toHaveStyle(`color: #000`);
    expect(postTitle).toHaveStyle(`color: rgb(0,0,0)`);
    // if you need to click on something
    fireEvent.click(postTitle);
    // if you need to wait for something to load on the page after an action
    const newElement = await waitForElement(() => getByText('some other text'));
    expect(newElement).toBeVisible();
  });
});
