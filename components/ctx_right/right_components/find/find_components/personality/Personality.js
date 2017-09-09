import React, { Component } from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import './Personality.css'
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
class Personality extends Component {
    render(){
        var oneItem = [
            [
                { src: A, content: "标题1"},
                { src: B, content: "标题1标题1标题1标题1标题1标题1"},
                { src: C, content: "标题1"},
                { src: D, content: "标题1标题1标题1"},
                { src: E, content: "标题1标题1"},
            ],
            [
                { src: F, content: "标题1标题1"},
                { src: G, content: "标题1标题1标题1"},
                { src: H, content: "标题1标题1标题1标题1"},
                { src: I, content: "标题1标题1标题1标题1标题1标题1"},
                { src: J, content: "标题1"},
            ]
        ]
        var oneItem1 = [
            [
                { src: F, content: "标题1标题1"},
                { src: G, content: "标题1标题1标题1"},
                { src: H, content: "标题1标题1标题1标题1"},
                { src: I, content: "标题1标题1标题1标题1标题1标题1"},
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
        var data1 = oneItem1.map(function(item){
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
            <div className="Personality">
                {/*<div className="Personality_header"></div>*/}
                <div className="Personality_recommend">
                    <Title_hr title={"推荐歌单"} more={true} />
                    {
                        data
                    }
                </div>
                <div className="Personality_recommend">
                    <Title_hr title={"推荐歌单"} more={true} />
                    {
                        data1
                    }
                </div>
                <div className="Personality_exclusive"></div>
                <div className="Personality_new"></div>
                <div className="Personality_mv"></div>
                <div className="Personality_radio"></div>
                <div className="Personality_footer"></div>
            </div>
        )
    }
}
export default Personality;