/**
 * Created by wurui on 2018/1/16.
 */
import React from 'react';
import '../style/Index.css';
import closePic from '../img/close.png';
import heartPic from '../img/heart.png';

class Index extends React.Component{

    state = {
        dataList:[],
        colorState: false,
        colorIndex:0,
        color:'',
        mainTop: 800
    };
    componentDidMount(){
        this.setState({
            dataList:[{
                id:1,
                color:['#2b6df6','#f4f4f4','#aac9fa','#71a3f7','#d6e5fc'],
                like: 345
            },{
                id:2,
                color:['#2b6df9','#f4f4f4','#aac9fa','#71a3f7','#d6e5fc'],
                like: 341
            },{
                id:3,
                color:['#2b6df6','#f8f4f4','#aac9fa','#71a3f7','#d6e5fc'],
                like: 348
            },{
                id:4,
                color:['#2b6df6','#f4f4f4','#cac9fa','#71a3f7','#d6e5fc'],
                like: 342
            },{
                id:5,
                color:['#2b6df6','#f4f4f4','#aac9fa','#75a3f7','#d6e5fc'],
                like: 341
            },{
                id:6,
                color:['#2b6df6','#f4f4f4','#aac9fa','#71a3f7','#d9e5fc'],
                like: 343
            },{
                id:7,
                color:['#2b6df6','#f4f6f4','#aac9fa','#71a3f7','#d6e5fc'],
                like: 346
            }]
        })
    }
    componentDidUpdate(){

    }
    changeColor(index, color, type){
        if( type === 'close' ){
            this.setState({
                colorState: false
            })
        }else{
            this.setState({
                colorState: true,
                colorIndex: index,
                color: color
            })
        }
    }
    toMainPage(){
        this.setState({
            mainTop: 87
        })
    }
    render(){
        const { dataList, colorState, colorIndex, color, mainTop } = this.state;
        return(<div className="index_wrapper">
            <section className="index_section">
                <div className="index_box">
                    <div className="section_left">
                        <div className="sl_title">
                            当下最流行的色板
                        </div>
                        <div className="sl_content">
                            解决各种配色问题，无论你是WEB、APP、DM，这里都能给你当下最流行的色彩参考。
                        </div>
                        <a href="#color_bord"><div className="sl_index"><span>查看色板</span></div></a>
                        <div>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div className="section_right">
                        <div className="sr_l">
                            <div className="sr_l_smp_1"><span></span><span></span><span></span></div>
                            <div className="sr_l_smp_2"><span></span><span></span><span></span></div>
                            <div className="sr_l_smp_3"><span></span><span></span><span></span></div>
                        </div>
                        <div className="sr_s">
                            <div className="sr_s_smp_1"><span></span><span></span><span></span></div>
                            <div className="sr_s_smp_2"><span></span><span></span><span></span></div>
                            <div className="sr_s_smp_3"><span></span><span></span><span></span></div>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div id="color_bord" className="main_wrapper" style={{ top: mainTop }}>
                    <div className="main_title">你想要的颜色都在这</div>
                    <div className="main_text">解决各种配色问题，无论你是WEB、APP、DM，这里都能给你当下最流行的色彩参考。</div>
                    <div className="color_bord">
                        {
                            dataList && dataList.length>0?
                                dataList.map(( item, index )=>{
                                    return <div key={index} className="single_color">
                                        <div className="single_color_wrapper">
                                            {
                                                colorState && colorIndex === index?
                                                    <span><span className="color_show" style={{ background:`${color}`}}><img
                                                        src={ closePic } alt="" className="close_pic" onClick={this.changeColor.bind(this,'close')} /><span className="color_name">{color}</span></span></span>:
                                                item.color && item.color.length>0?
                                                    item.color.map((color,color_index)=>{
                                                        return <span className="color_col" style={{ background:color }} key={color_index} onClick={this.changeColor.bind(this, index, color, 'open')}> </span>
                                                    }):''
                                            }
                                        </div>
                                        <div className="color_like">
                                            <img src={heartPic} alt=""/>
                                            <span className="color_like_num">{`${item.like} likes`}</span>
                                        </div>
                                    </div>
                                }):''
                        }
                    </div>
                </div>
            </section>
             {/* <footer>
                2017 ©uimore made by seergb
            </footer>*/}
        </div>)
    }
}

export default Index;