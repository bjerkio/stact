import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostList from './modules/posts/components/PostList';

export default () => (
    <Switch>
        <Route exact path="/" component={PostList}/> 
    </Switch>
)