import React from 'react'
import { Switch, Route, IndexRoute } from 'react-router'

import App from './components/app'
import PostIndex from './components/post_index'
import PostsNew from './components/posts_new'
import PostsShow from './components/posts_show'

export default (
    <Switch>
        <Route exact path="/" component={PostIndex} />
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/posts/:id" component={PostsShow} />
     </Switch>
)
