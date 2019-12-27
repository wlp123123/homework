import React, { Component } from 'react'
import { Carousel } from 'antd';
export default class view extends Component {
    go=()=>{
        this.props.history.push("/foods")
    }
    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="h-place">
                        北京V
                    </div>
                    <div className="h-search">
                        <p>
                            <i className="iconfont icon-sousuo"></i>
                            <input type="text" placeholder="请输入商家名"/>
                        </p>
                    </div>
                    <div className="h-find">
                        <i className="iconfont icon-dingwei"></i>
                    </div>
                </header>
                <div className="goapp">
                    <div className="app-logo">
                        <img src="https://p1.meituan.net/travelcube/7264ce9c25de2e464e3acd996fe8ad362803.png" alt=""/>
                    </div>
                    <div className="app-title">
                        <h1>省钱利器</h1>
                        <h2>吃喝玩乐尽在美团</h2>
                    </div>
                    <div className="btn-app">
                        <button>去APP</button>
                    </div>
                </div>
                <div className="banner">
                <Carousel autoplay>
                    <div className="lists">
                        <dl onClick={()=>this.go()}>
                            <dt><img src="./images/2.jpg" /></dt>
                            <dd>美食</dd>
                        </dl>
                        <dl>
                            <dt><img src="./images/3.jpg" /></dt>
                            <dd>猫眼电影</dd>
                        </dl>
                        <dl>
                            <dt><img src="./images/4.jpg" /></dt>
                            <dd>酒店</dd>
                        </dl>
                        <dl>
                            <dt><img src="./images/5.jpg" /></dt>
                            <dd>休闲娱乐</dd>
                        </dl>
                        <dl>
                            <dt><img src="./images/6.jpg" /></dt>
                            <dd>外卖</dd>
                        </dl>
                        <dl>
                            <dt><img src="./images/7.jpg" /></dt>
                            <dd>KTV</dd>
                        </dl>
                        <dl>
                            <dt><img src="./images/8.jpg" /></dt>
                            <dd>周边游</dd>
                        </dl>
                        <dl>
                            <dt><img src="./images/9.jpg" /></dt>
                            <dd>丽人</dd>
                        </dl>
                        <dl>
                            <dt><img src="./images/10.jpg" /></dt>
                            <dd>小吃快餐</dd>
                        </dl>
                        <dl>
                            <dt><img src="./images/11.jpg" /></dt>
                            <dd>生活服务</dd>
                        </dl>
                    </div>
                    <div className="lists">
                        <dl>
                            <dt><img src="./images/2.jpg" /></dt>
                            <dd>美食</dd>
                        </dl>
                        <dl>
                            <dt><img src="./images/2.jpg" /></dt>
                            <dd>美食</dd>
                        </dl>
                        <dl>
                            <dt><img src="./images/2.jpg" /></dt>
                            <dd>美食</dd>
                        </dl>
                        <dl>
                            <dt><img src="./images/2.jpg" /></dt>
                            <dd>美食</dd>
                        </dl>
                        <dl>
                            <dt><img src="./images/2.jpg" /></dt>
                            <dd>美食</dd>
                        </dl>
                        <dl>
                            <dt><img src="./images/2.jpg" /></dt>
                            <dd>美食</dd>
                        </dl>
                        <dl>
                            <dt><img src="./images/2.jpg" /></dt>
                            <dd>美食</dd>
                        </dl>
                        <dl>
                            <dt><img src="./images/2.jpg" /></dt>
                            <dd>美食</dd>
                        </dl>
                        <dl>
                            <dt><img src="./images/2.jpg" /></dt>
                            <dd>美食</dd>
                        </dl>
                        <dl>
                            <dt><img src="./images/2.jpg" /></dt>
                            <dd>美食</dd>
                        </dl>
                    </div>
                </Carousel>
                </div>
                <section>
                    <h1>猜你喜欢</h1>
                    <div className="foods">
                        <div className="f-logo">
                            <img src="./images/12.jpg" alt=""/>

                        </div>
                        <div className="f-mess">
                            <h1>华莱士炸鸡汉堡</h1>
                            <h2>[20店通用]鸡腿堡+薯条+中杯可乐1份</h2>
                            <div className="price">
                                <p>
                                    <span>13元</span> 门市价：31元
                                </p>
                                <p>
                                    已售18019
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="foods">
                        <div className="f-logo">
                            <img src="./images/14.jpg" alt=""/>

                        </div>
                        <div className="f-mess">
                            <h1>华莱士炸鸡汉堡</h1>
                            <h2>[20店通用]鸡腿堡+薯条+中杯可乐1份</h2>
                            <div className="price">
                                <p>
                                    <span>13元</span> 门市价：31元
                                </p>
                                <p>
                                    已售18019
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="foods">
                        <div className="f-logo">
                            <img src="./images/13.jpg" alt=""/>

                        </div>
                        <div className="f-mess">
                            <h1>华莱士炸鸡汉堡</h1>
                            <h2>[20店通用]鸡腿堡+薯条+中杯可乐1份</h2>
                            <div className="price">
                                <p>
                                    <span>13元</span> 门市价：31元
                                </p>
                                <p>
                                    已售18019
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
