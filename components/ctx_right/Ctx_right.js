
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Find from './right_components/find/Find';
import Fm from './right_components/fm/Fm';
import Mv from './right_components/mv/Mv';
import Friend from './right_components/friend/Friend';
import Native from './right_components/native/Native';
import Down from './right_components/down/Down';
import Cloud from './right_components/cloud/Cloud';
import Store from './right_components/store/Store';
import List from './right_components/list/List';

import './Ctx_right.css';
class Modle extends Component {
    render(){
        console.log(this.props.match.path)
        return(
            <span>{this.props.match.path}</span>
        )
    }
}
class Ctx_right extends Component {
    render(){
        var text = this.props.text
        return (
            <div className="Ctx_right">
                <Switch>
                    <Redirect from="/" to="find" exact /> 
                    <Route path="/find" component={Find}></Route>
                    <Route path="/fm" component={Fm}></Route>
                    <Route path="/mv" component={Mv}></Route>
                    <Route path="/friend" component={Friend}></Route>
                    <Route path="/native" component={Native}></Route>
                    <Route path="/down" component={Down}></Route>
                    <Route path="/cloud" component={Cloud}></Route>
                    <Route path="/store" component={Store}></Route>
                    <Route path="/list" component={List}></Route>
                </Switch>
            </div>
        )
    };
}
export default Ctx_right;