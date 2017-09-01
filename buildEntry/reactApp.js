import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
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
						{ context: "发现音乐" },
						{ context: "私人FM" },
						{ context: "MV" },
						{ context: "朋友"}
					]	
				},
				{
					title: "我的音乐",
					list: [
						{ context: "本地音乐" },
						{ context: "下载管理" },
						{ context: "我的音乐云盘" },
						{ context: "我的收藏" }
					]	
				},
				{
					title: "创建的歌单",
					list: [
						{ context: "我喜欢的音乐" },
						{ context: "民谣与故事" },
						{ context: "苦情非主流" },
						{ context: "国风可离骚" },
						{ context: "粤语顶个肺" },
						{ context: "静心纯音乐" },
						{ context: "外语小语种" },
						{ context: "英不列颠语" },
						{ context: "经典背景乐" }
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
	<App />,
	document.getElementById("app")
)