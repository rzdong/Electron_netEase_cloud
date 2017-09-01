import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header/Header';
import '../style/App.css'

class App extends Component {
	render(){
		return (
			<div className="warper">
				<Header />
				<div className="Context">
					<div className="Ctx_left">
						<div className="Menu_modle">
							<p>推荐</p>
							<ul>
								<li>发现音乐</li>
								<li>私人FM</li>
								<li>MV</li>
								<li>MV</li>
								<li>MV</li>
								<li>朋友</li>
							</ul>
						</div>
						<div className="Menu_modle">
							<p>我的音乐</p>
							<ul>
								<li>本地音乐</li>
								<li>下载管理</li>
								<li>我的音乐云盘</li>
								<li>我的收藏</li>
							</ul>
						</div>
						<div className="Menu_modle">
							<p>创建的歌单</p>
							<ul>
								<li>民谣与故事</li>
								<li>苦情非主流</li>
								<li>静心纯音乐</li>
								<li>经典背景乐</li>
								<li>外语小语种</li>
								<li>影视原声带</li>
								<li>英不列颠语</li>
								<li>国风和离骚</li>
							</ul>
						</div>
					</div>
					<div className="Ctx_right"></div>
				</div>
				<div className="Footer">这是播放控件</div>
			</div>

		)
	}
}
ReactDOM.render(
	<App />,
	document.getElementById("app")
)