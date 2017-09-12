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

class Fm extends Component {
    render(){
        var arr = [0,1,2,3,4,5,6,7,8]
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
                                    return <Comment_list item={ item }/>
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