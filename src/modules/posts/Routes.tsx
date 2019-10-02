import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import NotFound from '../root/components/NotFound';

const PostsRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <Switch>
      <Route exact path="/">
        <PostList />
      </Route>
      <Route exact path="/post/:postId">
        <PostDetails />
      </Route>
      <Route exact path="/404">
        <NotFound />
      </Route>
      <Route>
        <Redirect
          to={{
            pathname: '/404',
            state: { from: location },
          }}
        />
      </Route>
    </Switch>
  );
};

export default PostsRoutes;
