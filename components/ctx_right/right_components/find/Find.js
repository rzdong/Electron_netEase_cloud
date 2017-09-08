import React, { Component } from 'react'

import { 
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import './Find.css';
class Modles extends Component {
    render(){
        return <span>{this.props.match.url}</span>
    }
}
class Find extends Component {
    constructor(props){
        super(props);
        this.state = { active_title: "个性推荐"}
    }
    selectNav(nav){
        this.setState({active_title: nav})
    }
    render(){
        var items = [
                { path: '/find/personality', title: '个性推荐'},
                { path: '/find/list', title: '歌单'},
                { path: '/find/anchor', title: '主播电台'},
                { path: '/find/rank', title: '排行榜'},
                { path: '/find/singer', title: '歌手'},
                { path: '/find/new', title: '最新音乐'}
            ]
        var _this = this
        return (
            <div className="Find_warper">
                <div className="Find_header">
                    <span>
                        {
                            items.map(function(item){
                                return (
                                    <Link to={item.path} key={item.path} className={(item.title == _this.state.active_title) ? "Find_active" : ""} onClick={() => _this.selectNav(item.title)}>
                                        <span>{item.title}</span>
                                    </Link>
                                )
                            })
                        }
                    </span>
                    <hr />
                </div>
                <div className="Find_content">
                    <Switch>
                        <Redirect from='/find/' to='/find/personality' exact/>
                        <Route path="/find/personality/" component={Modles}></Route>
                        <Route path="/find/list" component={Modles}></Route>
                        <Route path="/find/anchor" component={Modles}></Route>
                        <Route path="/find/rank" component={Modles}></Route>
                        <Route path="/find/singer" component={Modles}></Route>
                        <Route path="/find/new" component={Modles}></Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Find;