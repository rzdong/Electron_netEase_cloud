import React, { Component } from 'react'

import { 
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import './Mv.css';
import Mv_one from './mv_components/mv_one/Mv_one'
import Mv_net from './mv_components/mv_net/Mv_net'
import Mv_all from './mv_components/mv_all/Mv_all'

class Mv extends Component {
    constructor(props){
        super(props);
        this.state = { active_title: "MV精选" }
    }
    selectNav(nav){
        this.setState({active_title: nav})
    }
    render(){
        var _this = this
        return (
            <div className="Mv_warper">
                <div className="Mv_header">
                    <span>
                        <Link to={'/mv'} onClick={()=> _this.selectNav("MV精选")}><span className={("MV精选" == _this.state.active_title) ? "Mv_active one" : "one"}>MV精选</span></Link>
                        <Link to={'/mv/net'} onClick={()=> _this.selectNav("网易出品")}><span className={("网易出品" == _this.state.active_title) ? "Mv_active net" : "net"}>网易出品</span></Link>
                        <Link to={'/mv/all'} onClick={()=> _this.selectNav("全部MV")}><span className={("全部MV" == _this.state.active_title) ? "Mv_active all" : "all"}>全部MV</span></Link>
                    </span>
                </div>
                <div className="Mv_content">
                    <Switch>
                        <Route path="/mv/" component={Mv_one} exact></Route>
                        <Route path="/mv/net" component={Mv_net}></Route>
                        <Route path="/mv/all" component={Mv_all}></Route>
                    </Switch>
                </div>
                
            </div>
        )
    }
}

export default Mv;