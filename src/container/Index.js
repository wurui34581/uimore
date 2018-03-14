/**
 * Created by wurui on 2018/1/16.
 */
import React from 'react';
import '../style/Index.css';
import closePic from '../img/close.png';
import heartPic from '../img/heart.png';
import $ from 'jquery';

class Index extends React.Component{

    state = {
        dataList:[],
        newDataList:[],
        dataState: false,
        colorState: false,
        colorIndex:0,
        color:'',
        mainTop: 800,
        textColor: ''
    };
    componentDidMount(){
        //将十六进制的色值转为rgb格式
        String.prototype.colorRgb = function(){
            var sColor = this.toLowerCase();
            //十六进制颜色值的正则表达式
            var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            // 如果是16进制颜色
            if (sColor && reg.test(sColor)) {
                if (sColor.length === 4) {
                    var sColorNew = "#";
                    for (var i=1; i<4; i+=1) {
                        sColorNew += sColor.slice(i, i+1).concat(sColor.slice(i, i+1));
                    }
                    sColor = sColorNew;
                }
                //处理六位的颜色值
                var sColorChange = [];
                for (var i=1; i<7; i+=2) {
                    sColorChange.push(parseInt("0x"+sColor.slice(i, i+2)));
                }
                return sColorChange;
            }
            return sColor;
        };
        this.setState({
            dataList:[{
                id:1,
                color:['#2b6df6','#f4f4f4','#aac9fa','#71a3f7','#D49209'],
                like: 345
            },{
                id:2,
                color:['#eeeeee','#f4f4f4','#aac9fa','#71a3f7','#d6e5fc'],
                like: 341
            },{
                id:3,
                color:['#000000','#f8f4f4','#aac9fa','#71a3f7','#d6e5fc'],
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
            }],
            dataState:true
        });




    }

    turnColor(colorArr){
        let newColorArr = [];
        colorArr && colorArr.map(( color )=>{
            let nvertColor = this.nvertColor(...(color.colorRgb()));

            newColorArr.push(nvertColor);
        });
        return newColorArr;
    }

    componentDidUpdate(){
        const { dataList, dataState } = this.state;
        let newData = [];
        if( dataState ){
            dataList && dataList.map(( data )=>{
                newData.push(this.turnColor(data.color))
            });
            this.setState({
                newDataList: newData,
                dataState: false
            })
        }
    }
    changeColor(index, color, textColor, type){
        if( type === 'close' ){
            this.setState({
                colorState: false
            })
        }else{
            this.setState({
                colorState: true,
                colorIndex: index,
                color: color,
                textColor: textColor
            })
        }
    }
    toMainPage(){
        this.setState({
            mainTop: 87
        })
    }
    //反转颜色
    nvertColor(r,g,b,a){
        let grayLevel = r * 0.299 + g * 0.587 + b * 0.114;
        /*return [
            (255-r),
            (255-g),
            (255-b),
            a
        ];*/
        return grayLevel;
    }

    colorRgb(){
        var sColor = this.toLowerCase();
        //十六进制颜色值的正则表达式
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        // 如果是16进制颜色
        if (sColor && reg.test(sColor)) {
            if (sColor.length === 4) {
                var sColorNew = "#";
                for (var i=1; i<4; i+=1) {
                    sColorNew += sColor.slice(i, i+1).concat(sColor.slice(i, i+1));
                }
                sColor = sColorNew;
            }
            //处理六位的颜色值
            var sColorChange = [];
            for (var i=1; i<7; i+=2) {
                sColorChange.push(parseInt("0x"+sColor.slice(i, i+2)));
            }
            return "RGB(" + sColorChange.join(",") + ")";
        }
        return sColor;
    }

    colorAnimationOn(e){
        $(e.target).addClass('color_animation')

    }

    colorAnimationLeave(e){
        $(e.target).removeClass('color_animation')

    }

    render(){
        const { dataList, colorState, colorIndex, color, mainTop, newDataList, textColor } = this.state;

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
                                                        src={ closePic } alt="" className="close_pic" onClick={this.changeColor.bind(this,'close')} /><span className="color_name" style={{color:textColor}}>{color}</span></span></span>:
                                                item.color && item.color.length>0?
                                                    item.color.map((color,color_index)=>{
                                                        let textColorNum = newDataList && newDataList[index] && newDataList[index][color_index];
                                                        let textColor = textColorNum <= 100? '#fff':textColorNum <= 150? '#eee': '#000';

                                                        return <span className="color_col" style={{ background:color }} key={color_index} onClick={this.changeColor.bind(this, index, color, textColor,'open')} onMouseEnter={ this.colorAnimationOn.bind(this) } onMouseLeave={ this.colorAnimationLeave.bind(this) }> </span>
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
             {/*<footer>
                2017 ©uimore made by seergb
            </footer>*/}
        </div>)
    }
}

export default Index;