import React, { Component } from 'react';
import './Menu_modle.css'
class Menu_modle extends Component {
    render(){
        var menus = this.props.menus
        return (
            <div className="Menu_modle">
                <p>{menus.title}</p>
                <ul>
                    {
                        menus.list.map(function(item){
                            return (
                                <li key={item.context}>{item.context}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Menu_modle;