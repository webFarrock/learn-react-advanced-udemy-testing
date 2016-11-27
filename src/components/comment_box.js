import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {

    constructor(props){
        super(props);

        this.state = {comment: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({comment: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment: ''});
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit.bind(this)}
                className="comment-box">
                <h4>Add a comment</h4>
                <textarea onChange={this.handleChange.bind(this)} value={this.state.comment} />
                <div><button action="submit">Submit Comment</button></div>
            </form>
        )
    }
}

export default connect(null, actions)(CommentBox);