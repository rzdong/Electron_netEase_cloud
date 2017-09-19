import React, { Component } from 'react'

import { 
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import './Mv_all.css';
import Title_hr from '../../../../../common/title_hr'
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
class Mv_all extends Component {
    render(){
        var oneItem = [
            [
                { src: A, content: "标题1"},
                { src: D, content: "标题1标题1标题1"},
                { src: E, content: "标题1标题1"},
            ],
            [
                { src: F, content: "标题1标题1"},
                { src: G, content: "标题1标题1标题1"},
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

        return (
            <div className="MV_all">
                <div className="MV_newest">
                    <Title_hr title="最新MV" more={true}></Title_hr>
                    {
                        data
                    }
                </div>
                <div className="MV_newest">
                    <Title_hr title="热播MV" more={true}></Title_hr>
                    {
                        data
                    }
                </div>
                <div className="MV_newest"> 
                    <Title_hr title="MV排行榜" more={true}></Title_hr>
                    {
                        data
                    }
                </div>
            </div>
        )
    }
}

export default Mv_all;