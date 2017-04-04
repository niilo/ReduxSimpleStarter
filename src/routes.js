import React from 'react'
import { Switch, Route, IndexRoute } from 'react-router'

import App from './components/app'
import PostIndex from './components/post_index'
import PostsNew from './components/posts_new'

export default (
    <Switch>
        <Route exact path="/" component={PostIndex} />
        <Route path="/posts/new" component={PostsNew} />
    </Switch>
)
