import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
import { fetchPosts } from '../actions/index'
import { Link } from 'react-router-dom'

class PostIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts()
    }
    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a post
                    </Link>
                </div>
                List of blog posts
            </div>
        )
    }
}

/*function mapDispatchToProps(dispatch) {
    return bindActionCreators( {fetchPosts}, dispatch)
}
export default connect(null, mapDispatchToProps)(PostIndex)
*/

// refactored above to delete boilerplate
//export default connect(null, { fetchPosts: fetchPosts })(PostIndex)

//ES6 magic key=value can leave key out
export default connect(null, { fetchPosts })(PostIndex)

