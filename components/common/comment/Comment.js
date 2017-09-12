import React, { Component } from 'react'
import './Comment.css'
class Comment extends Component {
    render(){
        return (
            <div className="Comment_warper">
                <div className="Warper">
                    <span className="Left">
                        <span className="glyphicon glyphicon-pencil"></span>
                        <span>发表评论</span>
                    </span>
                    <span className="Right">
                        <span className="glyphicon glyphicon-bullhorn"></span>
                        <span className="glyphicon glyphicon-gift"></span>
                    </span>
                </div>
            </div>
        )
    }
}
export default Comment;