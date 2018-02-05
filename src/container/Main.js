/**
 * Created by wurui on 2018/1/16.
 */
import React from 'react';
import $ from 'jquery';
import '../style/Main.css';

class Main extends React.Component{
    state = {
        dataList:[]
    }
    componentDidMount(){
        //this.getData()
        this.setState({
            dataList:[{
                id:1,
                color:['#2b6df6','#f4f4f4','#aac9fa','#71a3f7','#d6e5fc']
            },{
                id:2,
                color:['#2b6df9','#f4f4f4','#aac9fa','#71a3f7','#d6e5fc']
            },{
                id:3,
                color:['#2b6df6','#f8f4f4','#aac9fa','#71a3f7','#d6e5fc']
            },{
                id:4,
                color:['#2b6df6','#f4f4f4','#cac9fa','#71a3f7','#d6e5fc']
            },{
                id:5,
                color:['#2b6df6','#f4f4f4','#aac9fa','#75a3f7','#d6e5fc']
            },{
                id:6,
                color:['#2b6df6','#f4f4f4','#aac9fa','#71a3f7','#d9e5fc']
            },{
                id:7,
                color:['#2b6df6','#f4f6f4','#aac9fa','#71a3f7','#d6e5fc']
            }]
        })
    }

    getData(){
        const that = this;
        $.ajax({
            url: ``,
            method: 'get',
            dataType: 'json',
            success(res) {
                that.setState({
                    dataList: res
                });

            },
            error(res) {
                // alert(res.error_msg);
            },
        })
    }

    render(){
        const { dataList } = this.state;
        return(<div className="main_wrapper">
            <div className="main_title">你想要的颜色都在这</div>
            <div className="main_text">解决各种配色问题，无论你是WEB、APP、DM，这里都能给你当下最流行的色彩参考。</div>
            <div className="color_bord">
                {
                    dataList && dataList.length>0?
                        dataList.map(( item, index )=>{
                            return <div key={index} className="single_color">
                                <div className="single_color_wrapper">
                                    {
                                        item.color && item.color.length>0?
                                            item.color.map((color,index)=>{
                                                return <span className="color_col" style={{background:color}} key={index}></span>
                                            }):''
                                    }
                                </div>
                                <div></div>
                            </div>
                        }):''
                }
            </div>
        </div>)
    }
}

export default Main;