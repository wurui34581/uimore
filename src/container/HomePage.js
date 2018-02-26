/**
 * Created by Administrator on 2018/1/11.
 */
import React from 'react';
import '../style/HomePage.css';


class HomePage extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <div className="nav">
                        <div className="header_left">
                            <span>uimore</span>
                            <span></span>
                        </div>
                        <div className="header_right">
                            <span>About</span>
                            <span>Contact</span>
                        </div>
                    </div>
                </header>

                <div>
                    {this.props.children && React.cloneElement(this.props.children,{

                })}
                </div>
            </div>
        )
    }
}

export default HomePage;