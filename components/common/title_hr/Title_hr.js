import React, { Component } from 'react'
import './Title_hr.css'
class More extends Component {
    render(){
        return (
            <span className="more"><span>更多</span><span class="glyphicon glyphicon-menu-right"></span></span>
        )
    }
}
class Title_hr extends Component {
    render(){
        var title = this.props.title
        var more = this.props.more
        if (!more){
            return (
                <div className="Title_hr">
                    <span className="title">{ title }</span>
                </div>
            )
        }else {
            return (
                <div className="Title_hr">
                    <span className="title">{ title }</span>
                    <span className="more">
                        <span>更多</span>
                        <span className="glyphicon glyphicon-menu-right"></span>
                    </span>
                </div>
            )
        }
        
    }
}
export default Title_hr;