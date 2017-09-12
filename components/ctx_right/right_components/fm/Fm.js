import React, { Component } from 'react'

import { 
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import './Fm.css';
import Title_hr from '../../../common/title_hr/Title_hr'
import Comment from '../../../common/comment/Comment'
import Comment_list from '../../../common/comment_list/Comment_list'

import A from '../../../../image/img1.jpg'
import B from '../../../../image/img2.jpg'
import C from '../../../../image/img3.jpg'
import D from '../../../../image/img4.jpg'
import E from '../../../../image/img5.jpg'
import F from '../../../../image/img6.jpg'
import G from '../../../../image/img7.jpg'
import H from '../../../../image/img8.jpg'
import I from '../../../../image/img9.jpg'
import J from '../../../../image/img10.jpg'

class Fm extends Component {
    render(){
        // var arr = [0,1,2,3,4,5,6,7,8]
        var arr = [
            {source: A, name: "晓风残月", content: "这首歌是我听到的最好听的歌，哈哈哈", time:"2015年8月15日 15:23",goodNum:23456},
            {source: B, name: "晓风残月", content: "这首歌是我听到的最好听的歌，哈哈哈", time:"2015年8月15日 15:23",goodNum:23456},
            {source: C, name: "晓风残月", content: "这首歌是我听到的最好听的歌，哈哈哈", time:"2015年8月15日 15:23",goodNum:23456},
            {source: D, name: "晓风残月", content: "这首歌是我听到的最好听的歌，哈哈哈", time:"2015年8月15日 15:23",goodNum:23456},
            {source: E, name: "晓风残月", content: "这首歌是我听到的最好听的歌，哈哈哈", time:"2015年8月15日 15:23",goodNum:23456},
            {source: F, name: "晓风残月", content: "这首歌是我听到的最好听的歌，哈哈哈", time:"2015年8月15日 15:23",goodNum:23456},
            {source: G, name: "晓风残月", content: "这首歌是我听到的最好听的歌，哈哈哈", time:"2015年8月15日 15:23",goodNum:23456},
            {source: H, name: "晓风残月", content: "这首歌是我听到的最好听的歌，哈哈哈", time:"2015年8月15日 15:23",goodNum:23456},
            {source: I, name: "晓风残月", content: "这首歌是我听到的最好听的歌，哈哈哈", time:"2015年8月15日 15:23",goodNum:23456},
            {source: J, name: "晓风残月", content: "这首歌是我听到的最好听的歌，哈哈哈", time:"2015年8月15日 15:23",goodNum:23456}
        ]
        return (
            <div className="Fm_warper">
                <div>
                    <div className="Fm_music"></div>
                    <div className="Fm_comment">
                        <Title_hr title={"听友评论 "} more={false} title_small={"(yi有45367条评论)"}/>
                        <Comment />
                        <Title_hr title={"精彩评论 "} more={false} />
                        <div>
                            {
                                arr.map(function(item){
                                    return <Comment_list source={item.source} name={item.name} content={item.content} time={item.time} goodNum={item.goodNum}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fm;