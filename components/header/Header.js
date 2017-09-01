import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import './Header.css'

class Header extends Component {
	render(){
		return (
			<div className="Header">
      			<span className="Haochang_logo">乐音云易网</span>
	      		<div className="Search_back">
					<span className="Left_arrow">&lt;</span>
					<span className="Right_arrow">&gt;</span>
					<input type="text" className="Search_input" placeholder="搜索音乐，歌词..."/>
	      		</div>
      			<div className="Close">X</div>
    		</div>
		)
	}
}
export default Header;