import React, { Component } from 'react'

import { 
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import './Find.css';
import Personality from './find_components/personality/Personality'
import List from './find_components/list/List'
import Anchor from './find_components/anchor/Anchor'
import Rank from './find_components/rank/Rank'
import Singer from './find_components/singer/Singer'
import New from './find_components/new/New'
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
                        <Redirect from='/find' to='/find/personality' exact/> 
                        <Route path="/find/personality/" component={Personality}></Route>
                        <Route path="/find/list" component={List}></Route>
                        <Route path="/find/anchor" component={Anchor}></Route>
                        <Route path="/find/rank" component={Rank}></Route>
                        <Route path="/find/singer" component={Singer}></Route>
                        <Route path="/find/new" component={New}></Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Find;