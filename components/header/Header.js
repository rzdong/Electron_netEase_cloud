import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import img_logo from '../../image/haochang.jpg';

class Header extends Component {
	render(){
		return (
			<div className="Header">
      			<span className="Haochang_logo"><img src={img_logo} alt="" className="img_logo"/><span>好唱show</span></span>
	      		<div className="Search_back">
					<span className="Left_arrow"><span className="glyphicon glyphicon-chevron-left"></span></span>
					<span className="Right_arrow"><span className="glyphicon glyphicon-chevron-right"></span></span>
					<input type="text" className="Search_input" placeholder="搜索音乐，歌词..."/>
	      		</div>
      			<div className="Close"><span className="glyphicon glyphicon-remove"></span></div>
    		</div>
		)
	}
}
export default Header;