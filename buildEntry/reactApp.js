import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Header from '../components/header/Header';
import '../style/App.css';
import Ctx_left from '../components/ctx_left/Ctx_left';
import Ctx_right from '../components/ctx_right/Ctx_right';
import Footer from '../components/footer/Footer';

class App extends Component {
	render(){
		var menu = [
				{
					title: "推荐",
					list: [
						{ context: "发现音乐" , icon: "glyphicon glyphicon-music", link: '/find'},
						{ context: "私人FM" , icon: "glyphicon glyphicon-signal", link: '/fm'},
						{ context: "MV" , icon: "glyphicon glyphicon-object-align-vertical", link:'/mv'},
						{ context: "朋友" , icon: "glyphicon glyphicon-user", link: '/friend'}
					]	
				},
				{
					title: "我的音乐",
					list: [
						{ context: "本地音乐" , icon: "glyphicon glyphicon-music", link: '/native'},
						{ context: "下载管理" , icon: "glyphicon glyphicon-download-alt", link: '/down'},
						{ context: "我的音乐云盘" , icon: "glyphicon glyphicon-cloud", link: '/cloud'},
						{ context: "我的收藏" , icon: "glyphicon glyphicon-list-alt", link: '/store'}
					]	
				},
				{
					title: "创建的歌单",
					list: [
						{ context: "我喜欢的音乐" , icon: "glyphicon glyphicon-heart", link: '/list'},
						{ context: "民谣与故事" , icon: "glyphicon glyphicon-list", link: '/list'},
						{ context: "苦情非主流" , icon: "glyphicon glyphicon-list", link: '/list'},
						{ context: "国风可离骚" , icon: "glyphicon glyphicon-list", link: '/list'},
						{ context: "粤语顶个肺" , icon: "glyphicon glyphicon-list", link: '/list'},
						{ context: "静心纯音乐" , icon: "glyphicon glyphicon-list", link: '/list'},
						{ context: "外语小语种" , icon: "glyphicon glyphicon-list", link: '/list'},
						{ context: "英不列颠语" , icon: "glyphicon glyphicon-list", link: '/list'},
						{ context: "经典背景乐" , icon: "glyphicon glyphicon-list", link: '/list'}
					]	
				},
			]
		return (
			<div className="warper">
				<Header />
				<div className="Context">
					<Ctx_left items={menu}/>
					<Ctx_right text={"右侧内容区，配置路由区域"}/>
				</div>
				<Footer icon={"这是一个icon的props"}/>
			</div>

		)
	}
}
ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("app")
)