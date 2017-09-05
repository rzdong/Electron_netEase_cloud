
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Menu_modle from '../menu_modle/Menu_modle';
import './Ctx_right.css';
class Modle extends Component {
    render(){
        <span>{"文本"}</span>
    }
}
class Ctx_right extends Component {
    render(){
        var text = this.props.text
        return (
            <div className="Ctx_right">
                <Switch>
                    <Route path="/find" component={Modle}></Route>
                    <Route path="/fm" component={Modle}></Route>
                    <Route path="/mv" component={Modle}></Route>
                    <Route path="/friend" component={Modle}></Route>
                    <Route path="/native" component={Modle}></Route>
                    <Route path="/native" component={Modle}></Route>
                    <Route path="/down" component={Modle}></Route>
                    <Route path="/cloud" component={Modle}></Route>
                    <Route path="/store" component={Modle}></Route>
                </Switch>

            </div>
        )
    };
}
export default Ctx_right;