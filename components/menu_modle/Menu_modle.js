import React, { Component } from 'react';
import './Menu_modle.css'
import {
  Link
} from 'react-router-dom';
class Menu_modle extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(ctx){
        this.props.Click(ctx)
    }
    render(){
        var menus = this.props.menus
        var active = this.props.active
        var _this = this
        return (
            <div className="Menu_modle">
                <p>{menus.title}</p>
                <ul>
                    {
                        menus.list.map(function(item){
                            return (
                                <Link to={item.link}>
                                    <li key={item.context} className={(item.context == active) ? "active" : ""} onClick={() => (_this.handleClick(item.context))}>
                                        <span className={item.icon}></span>
                                        <span>{item.context}</span>
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Menu_modle;