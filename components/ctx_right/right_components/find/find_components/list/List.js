import React, { Component } from 'react'
import './List.css'
import Title_hr from '../../../../../common/title_hr/Title_hr'
import List_unit from '../../../../../common/list_unit/List_unit'
import A from '../../../../../../image/img1.jpg'
import B from '../../../../../../image/img2.jpg'
import C from '../../../../../../image/img3.jpg'
import D from '../../../../../../image/img4.jpg'
import E from '../../../../../../image/img5.jpg'
import F from '../../../../../../image/img6.jpg'
import G from '../../../../../../image/img7.jpg'
import H from '../../../../../../image/img8.jpg'
import I from '../../../../../../image/img9.jpg'
import J from '../../../../../../image/img10.jpg'
class List extends Component {
    render(){
        var oneItem = [
            [
                { src: A, content: "标题1"},
                { src: C, content: "标题1"},
                { src: D, content: "标题1标题1标题1"},
                { src: E, content: "标题1标题1"},
                { src: E, content: "标题1标题1"},
            ],
            [
                { src: F, content: "标题1标题1"},
                { src: G, content: "标题1标题1标题1"},
                { src: H, content: "标题1标题1标题1标题1"},
                { src: J, content: "标题1"},
                { src: J, content: "标题1"},
            ],
            [
                { src: F, content: "标题1标题1"},
                { src: G, content: "标题1标题1标题1"},
                { src: H, content: "标题1标题1标题1标题1"},
                { src: J, content: "标题1"},
                { src: J, content: "标题1"},
            ],
            [
                { src: F, content: "标题1标题1"},
                { src: G, content: "标题1标题1标题1"},
                { src: H, content: "标题1标题1标题1标题1"},
                { src: J, content: "标题1"},
                { src: J, content: "标题1"},
            ],
            [
                { src: F, content: "标题1标题1"},
                { src: G, content: "标题1标题1标题1"},
                { src: H, content: "标题1标题1标题1标题1"},
                { src: J, content: "标题1"},
                { src: J, content: "标题1"},
            ]
        ]
        var data = oneItem.map(function(item){
                var length = item.length
                return(
                    <div className="one">
                        {
                            item.map(function(i,index){
                                return (
                                    <List_unit src={i.src} content={i.content} index={index} length={length}/>
                                )
                            })
                        }
                    </div>
                )
            })
        return(
            <div className="Find_list">
                <div className="All_list"><botton>全部歌单<span className="glyphicon glyphicon-menu-down"></span></botton></div>
                <div className="Hot_door">热门标签：
                    <a href="javascript:void(0)">华语</a>|
                    <a href="javascript:void(0)">流行</a>|
                    <a href="javascript:void(0)">摇滚</a>|
                    <a href="javascript:void(0)">民谣</a>|
                    <a href="javascript:void(0)">电子</a>|
                    <a href="javascript:void(0)">轻音乐</a>|
                    <a href="javascript:void(0)">影视原声</a>|
                    <a href="javascript:void(0)">ACG</a>|
                    <a href="javascript:void(0)">怀旧</a>|
                    <a href="javascript:void(0)">治愈</a>
                </div>
                <div className="Song_list">
                    { data }
                </div>
            </div>
        )
    }
}
export default List;