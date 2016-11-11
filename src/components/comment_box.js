import React, {Component} from 'react';

export default class CommentBox extends Component {

    constructor(props){
        super(props);

        this.state = {comment: ''};
    }

    handleChange(e){
        this.setState({comment: e.target.value});
    }
    render(){
        return (
            <div className="comment-box">
                <textarea onChange={this.handleChange.bind(this)} value={this.state.comment} />
                <button>Submit Comment</button>
            </div>
        )
    }
}