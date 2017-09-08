import React, { Component } from 'react'
import './List_unit.css'
class List_unit extends Component {
    render(){
        var src = this.props.src
        var content = this.props.content
        var index = this.props.index
        return (
            <div className="List_unit" style={(index == 4) ? {paddingRight: 0} : {}}>
                <div className="Image">
                    <img src={src} alt=""/>
                </div>
                <div className="Content"><span>{content}</span></div>
            </div>
        )
    }
}
export default List_unit;