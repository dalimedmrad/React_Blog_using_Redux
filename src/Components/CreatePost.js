import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addPost } from '../JS/Actions/actions';

const mapDispatchToProps = dispatch => {
    return {
        addArticle: post => dispatch(addPost(post))
    }
}

const CreatePost = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addArticle({
            id: Date.now(),
            title,
            content
        })
    }
    return (
        <div className="col-md-6">
             <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label For="title">Title:</label>
                    <input className="form-control" type="text" name="title" id="title" onChange={e => setTitle(e.target.value)} />
                </div>
                <div  className="form-group">
                    <label For="content">Content:</label>
                    <textarea className="form-control" name="content" id="content" cols="30" rows="8" onChange={e => setContent(e.target.value)} />
                </div>
                <div className="b">
                    <input className="btn btn-primary" type="submit" value="Add" />
                </div>
            </form>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(CreatePost);