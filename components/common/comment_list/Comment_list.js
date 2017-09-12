import React, { Component } from 'react'
import './Comment_list.css'
class Comment_list extends Component {
    render(){
        var index = this.props.item
        return(
        <div className="Comment_list">评论内容列表单元{ index }</div>
        )
    }
}
export default Comment_list;