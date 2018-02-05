/**
 * Created by wurui on 2018/1/16.
 */
import React from 'react';
import '../style/Index.css';

class Index extends React.Component{

    toMainPage(){
        this.props.history.push('/main')
    }
    render(){
        return(<div className="index_wrapper">
            <section>
                <div className="section_left">
                    <div className="sl_title">
                        当下最流行的色板
                    </div>
                    <div className="sl_content">
                        解决各种配色问题，无论你是WEB、APP、DM，这里都能给你当下最流行的色彩参考。
                    </div>
                    <div className="sl_index" onClick={ this.toMainPage.bind(this) }><span>查看色板</span></div>
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
            </section>
            <footer>
                2017 ©uimore made by seergb
            </footer>
        </div>)
    }
}

export default Index;