import React, { Component } from 'react'
import './Comment_list.css'
class Comment_list extends Component {
    render(){
        var source = this.props.source
        var name = this.props.name
        var content = this.props.content
        var time = this.props.time
        var goodNum = this.props.goodNum
        return(
        <div className="Comment_list">
            <div className="Comment_avatar">
                <div>
                    <img src={ source } alt=""/>
                </div>
            </div>
            <div className="Comment_ctx">
                <div className="Comment_content">
                    <span className="User_name">{ name +": " }</span>
                    <span>{ content }</span>
                </div>
                <div className="Comment_time">
                    <span>{ time }</span>
                </div>
            </div>
        </div>
        )
    }
}
export default Comment_list;