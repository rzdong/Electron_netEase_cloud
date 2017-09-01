import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render(){
        var icon = this.props.icon
        return (
            <div className="Footer">{ icon }</div>
        )
    }
}

export default Footer;