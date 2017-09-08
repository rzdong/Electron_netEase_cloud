import React, { Component } from 'react';
import Menu_modle from '../menu_modle/Menu_modle';
import './Ctx_left.css';

class Ctx_left extends Component {
    constructor(props){
        super(props);
        this.state = {active: "发现音乐"}
        this.handClick = this.handClick.bind(this)
    }
    handClick(ctx){
        this.setState({active: ctx})
    }
    render(){
        var items = this.props.items
        var _this = this
        return (
            <div className="Ctx_left">
                {
                    items.map(function(item){
                        return <Menu_modle Click={(ctx) => _this.handClick(ctx)} menus={item} key={item.title} active={_this.state.active}/>
                    })
                }
            </div>
        )
    };
}
export default Ctx_left;