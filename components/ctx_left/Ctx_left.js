import React, { Component } from 'react';
import Menu_modle from '../menu_modle/Menu_modle';
import './Ctx_left.css';

class Ctx_left extends Component {
    render(){
        var items = this.props.items
        return (
            <div className="Ctx_left">
                {
                    items.map(function(item){
                        return <Menu_modle menus={item} key={item.title}/>
                    })
                }
            </div>
        )
    };
}
export default Ctx_left;