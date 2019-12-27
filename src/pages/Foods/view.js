import React, { Component } from 'react'
import { Rate } from 'antd';
export default class view extends Component {
    state={
        style:{
            backgroundColor:"none",
            color:"white"
        },
        styleipt:{
            backgroundColor:"white"
        },
        stylehide:{
            display:"none"
        }
    }
    handleScroll=()=>{
        if(document.getElementsByClassName("foods-box")[0].scrollTop>50){
            this.setState({
                style:{
                    backgroundColor:"white",
                    color:"green"
                    
                },
                styleipt:{
                    backgroundColor:"#dedede"
                },
                stylehide:{
                    display:"block"
                }

            })
        }else{
            this.setState({
                style:{
                    backgroundColor:"rgba(255,255,255,0)",
                    color:"white"
                },
                styleipt:{
                    backgroundColor:"white"
                },
                stylehide:{
                    display:"none"
                }
            })
            //console.log(11111)
        }
    }
    gotop=()=>{
        document.getElementsByClassName("foods-box")[0].scrollTop=0
    }
    back=()=>{
        this.props.history.go(-1)
    }
    render() {
        let {style,styleipt,stylehide}=this.state
        return (
            <div className="foods-box"   onScroll={()=>this.handleScroll()}>
            <button className="gotop" style={stylehide} onClick={()=>this.gotop()}>返回顶部</button>
                <div className="head" style={style}>
                    <div className="h-back" onClick={()=>this.back()}>
                    <i className="iconfont icon-zuo"></i>
                    </div>
                    <div className="h-search">
                        <p style={styleipt}>
                            <i className="iconfont icon-sousuo"></i>
                            <input type="text" placeholder="请输入商家名"/>
                        </p>
                    </div>
                    <div className="h-my">
                        <i className="iconfont icon-wode"></i>
                    </div>
                </div>
                <div className="food-logo">
                    <img src="//s1.meituan.net/bs/file?f=meis/meishi.mobile:img/app_download_banner.png@5b5269e" alt=""/>
                </div>
                <div className="kinds">
                    <dl>
                        <dt><img src="./images/2.jpg" /></dt>
                        <dd>火锅</dd>
                    </dl>
                    <dl>
                        <dt><img src="./images/3.jpg" /></dt>
                        <dd>甜点饮品</dd>
                    </dl>
                    <dl>
                        <dt><img src="./images/4.jpg" /></dt>
                        <dd>自助餐</dd>
                    </dl>
                    <dl>
                        <dt><img src="./images/5.jpg" /></dt>
                        <dd>小吃快餐</dd>
                    </dl>
                    <dl>
                        <dt><img src="./images/6.jpg" /></dt>
                        <dd>西餐</dd>
                    </dl>
                    <dl>
                        <dt><img src="./images/7.jpg" /></dt>
                        <dd>烧烤烤肉</dd>
                    </dl>
                    <dl>
                        <dt><img src="./images/8.jpg" /></dt>
                        <dd>香锅烤鱼</dd>
                    </dl>
                    <dl>
                        <dt><img src="./images/9.jpg" /></dt>
                        <dd>海鲜</dd>
                    </dl>
                    
                </div>
                <ul className="filters">
                    <li>全部类目▼</li>
                    <li>附近商家▼</li>
                    <li>智能排序▼</li>
                    <li>筛选▼</li>
                </ul>
                <div className="lists-box">
                    <div className="boxs">
                        <div className="foods">
                            <div className="f-logo">
                                <img src="./images/12.jpg" alt=""/>

                            </div>
                            <div className="f-mess">
                                <h1>华莱士炸鸡汉堡</h1>
                                <div className="price">
                                    <div>
                                    <Rate allowHalf defaultValue={3} />￥33/人
                                    </div>
                                    <div>
                                        上地732m
                                    </div>
                                </div>
                                <h3>汉堡</h3>
                                <h4>支持外卖</h4>
                            </div>
                        </div>
                        <div className="foot-titles">
                            <span className="red">新客减14.99</span>
                            <span className="green">团</span>
                            4.5元小食，8.8元早餐，9元小食，9元早餐
                        </div>
                    </div>
                    <div className="boxs">
                        <div className="foods">
                            <div className="f-logo">
                                <img src="./images/12.jpg" alt=""/>

                            </div>
                            <div className="f-mess">
                                <h1>华莱士炸鸡汉堡</h1>
                                <div className="price">
                                    <div>
                                    <Rate allowHalf defaultValue={3} />￥33/人
                                    </div>
                                    <div>
                                        上地732m
                                    </div>
                                </div>
                                <h3>汉堡</h3>
                                <h4>支持外卖</h4>
                            </div>
                        </div>
                        <div className="foot-titles">
                            <span className="red">新客减14.99</span>
                            <span className="green">团</span>
                            4.5元小食，8.8元早餐，9元小食，9元早餐
                        </div>
                    </div>
                    <div className="boxs">
                        <div className="foods">
                            <div className="f-logo">
                                <img src="./images/12.jpg" alt=""/>

                            </div>
                            <div className="f-mess">
                                <h1>华莱士炸鸡汉堡</h1>
                                <div className="price">
                                <div>
                                    <Rate allowHalf defaultValue={3} />￥33/人
                                    </div>
                                    <div>
                                        上地732m
                                    </div>
                                </div>
                                <h3>汉堡</h3>
                                <h4>支持外卖</h4>
                            </div>
                        </div>
                        <div className="foot-titles">
                            <span className="red">新客减14.99</span>
                            <span className="green">团</span>
                            4.5元小食，8.8元早餐，9元小食，9元早餐
                        </div>
                    </div>
                    <div className="boxs">
                        <div className="foods">
                            <div className="f-logo">
                                <img src="./images/12.jpg" alt=""/>

                            </div>
                            <div className="f-mess">
                                <h1>华莱士炸鸡汉堡</h1>
                                <div className="price">
                                <div>
                                    <Rate allowHalf defaultValue={3} />￥33/人
                                    </div>
                                    <div>
                                        上地732m
                                    </div>
                                </div>
                                <h3>汉堡</h3>
                                <h4>支持外卖</h4>
                            </div>
                        </div>
                        <div className="foot-titles">
                            <span className="red">新客减14.99</span>
                            <span className="green">团</span>
                            4.5元小食，8.8元早餐，9元小食，9元早餐
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}
