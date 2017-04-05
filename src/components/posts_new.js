import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { createPost } from '../actions/index'
import { Link } from 'react-router-dom'

const renderInputField = ({ input, label, type, meta: { touched, error, warning, invalid } }) => (
    <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
        <label>{label}</label>
        <input {...input} placeholder={label} type={type} className="form-control" />
        <div className={`text-help ${touched && invalid ? 'has-danger' : ''}`}>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

const renderTextArea = ({ input, label, type, meta: { touched, error, warning, invalid } }) => (
    <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
        <label>{label}</label>
        <textarea {...input} placeholder={label} type={type} className="form-control" />
        <div className={`text-help ${touched && invalid ? 'has-danger' : ''}`}>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

class PostsNew extends Component {
    render() {
        const { handleSubmit, error, valid } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <h3>Create A New Post</h3>
                <Field name="title" component={renderInputField} type="text" label="Title"/>
                <Field name="categories" component={renderInputField} type="text" label="Categories"/>
                <Field name="content" component={renderTextArea} type="text" label="Content"/>
                <button type="submit" className="btn btn-primary" disabled={!valid}>Submits</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

const validate = (values) => {
    const errors = {}

    if (!values.title) {
        errors.title = 'Enter a title'
    }
    if (!values.categories) {
        errors.categories = 'Enter category'
    }
    if (!values.content) {
        errors.content = 'Enter some content'
    }
    return errors
}

// reduxForm has exact same same behaviour as connect
// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
    form: 'PostsNew',
    validate,
    onSubmit: (data, dispatch, props) => { 
        const resp = createPost(data).payload.then((data) => {
            props.history.push('/');
        })
    }
}, null, { createPost } )(PostsNew)