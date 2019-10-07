import React from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import RouteProps from '../../root/interfaces/RouteProps';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';

const PostsRoutes: React.FC<RouteProps> = ({ baseLocation }: RouteProps) => {
  const location = useLocation();

  return (
    <Switch>
      <Route exact path={baseLocation}>
        <PostList />
      </Route>
      <Route exact path={`${baseLocation}/:postId`}>
        <PostDetails />
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

export default PostsRoutes