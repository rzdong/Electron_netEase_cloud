
import React, { Component } from 'react';
import Menu_modle from '../menu_modle/Menu_modle';
import './Ctx_right.css';

class Ctx_right extends Component {
    render(){
        var text = this.props.text
        return (
            <div className="Ctx_right">{ text }</div>
        )
    };
}
export default Ctx_right;