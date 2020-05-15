<template>
    <div>
        <header>
            <div class="gasoline-gift">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589296721490&di=7098c3456131ef75992ab7e3c96c641b&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F16%2F05%2F28%2F1657495a2b287f6.jpg" alt="">
            </div>
            <div class="gasoline-scan" >
                <div class="iconfont icon-saoyisao"></div>
                <div class="gasoline-scan-csan">扫一扫</div>
            </div>
        </header>
        <div class="box-gasoline">
            <div class="box-gasoline-first">
                <div class="gasoline-first">
                    <i>92# <span class="iconfont icon-jiantou9"></span> </i>
                    <b>一键加油</b>
                </div>
                <div class="gasoline-distance">
                    <div class="gasoline-distance-left">
                        <div class="gasoline-distance-near">
                            <div>距离最近</div><b>中惠泽石油英雄山路站</b>
                        </div>
                        <div class="gasoline-distance-address">
                            济南市市中区英雄山路216号（银座奥特莱斯对面）
                        </div>
                        <div  class="gasoline-distance-down">
                            <span class="gasoline-distance-down1">￥4.88</span>
                            <span class="gasoline-distance-down2">已降￥0.60</span>
                            <span class="gasoline-distance-down3">国标价￥5.48</span>
                        </div>
                    </div>
                
                    <div class="gasoline-distance-right">
                        <i class="iconfont icon-daohang"></i>
                        <span >1.47km</span>
                    </div>
                </div>
                <div class="gasoline-oil">
                    <el-button type="danger" class="gasoline-oil-now" @click="jumoli">立即加油</el-button>
                    <div class="gasoline-oil-down"><span>认证商用车再降￥0.20</span><i>去认证</i></div>
                </div>
            </div > 
            <div class="gasoline-mo">
                <div class="gasoline-more" v-for="item in items" :key="item.id">
                    <div class="gasoline-moreone">
                        <div>{{item.title1}}</div><i>{{item.title2}}</i>
                    </div>
                    <div class="gasoline-moretwo">
                        <span :class="item.icon1"></span>
                        <i class="iconfont icon-youjiantou"></i>
                    </div>
                </div>
                
            </div> 
        </div> 
        <TabBar />
    </div>
</template>

<script>
import TabBar from '@/components/TabBar';
export default {
    components : {
        TabBar
    },
    data() {
        return {
            items:[
                {id:1,title1:'更多加油站',title2:'GAS STATIONS',icon1:'iconfont icon-gengduo'},
                {id:2,title1:'现在充电',title2:'CHARGING STATIONS',icon1:'iconfont icon-shandian'},
                {id:3,title1:'车辆认证',title2:'AUTHENTICATION',icon1:'iconfont icon-geren'},
                {id:4,title1:'我要赚钱',title2:'MAKE MONEY',icon1:'iconfont icon-jurassic_users'},
                {id:5,title1:'我有口令',title2:'KRE YWORD',icon1:'iconfont icon-bao'}
            ]
        }
    },
    methods: {
        jumoli(){
           this.$router.push('/oline')
        }
    },
}
</script>
<style lang="scss" scope>
    .gasoline-gift{
        width: 100%;
        height: 280px;
        img{
             width: 100%;
            height: 100%;;
        }
    }
    .gasoline-scan{
        color:white;
        width: 50px;
        height: 50px;
        position: absolute;
        top:20px;
        left: 20px;
        .icon-saoyisao{
            font-size: 30px;
            text-align: center;
        }
        .gasoline-scan-csan{
            font-size: 10px;
            text-align: center;
        }
    }
    .box-gasoline{
        height: 650px;
        z-index: 100;
    } 
    .box-gasoline-first{
        
        width: 84%;
        height: 240px;
        background: rgb(243, 233, 235);
        position: absolute; 
        left: 3%;
        top:200px;
        border-radius: 5%;
        padding: 5%;
        .gasoline-first{
            padding-bottom: 15px;
            border-bottom:1px solid rgb(216, 214, 205);
            i{ float: left;
                width: 55px;
                height: 20px;
                background: rgb(216, 214, 205);
                border-radius: 5%;
                .icon-jiantou9{
                    padding-left: 4px;
                    font-size: 10px;
                }
            }
            b{
                padding-left: 25%;
            }
        }
        .gasoline-distance{
            padding:15px 0 25px 0;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgb(243, 237, 237);
            .gasoline-distance-left{
                width: 80%;
                height: 80px;
                .gasoline-distance-near{
                    width: 100%;
                    padding-bottom: 5px ;
                    height: 25px;
                    div{
                        float: left;
                        width: 50px;
                        height: 20px;
                        border: 1px solid rgb(180, 176, 176);
                        font-size:10px;
                        border-radius: 2px;
                        margin-right: 5px;
                        color:rgb(180, 176, 176) ;
                    }
                    b{
                        display: block;
                        float: left;
                    }
                }
                .gasoline-distance-address{
                    height: 30px;
                    font-size:10px;
                    color: rgb(156, 153, 149);
                    padding-bottom: 5px ;
                }
                .gasoline-distance-down{
                     
                    .gasoline-distance-down1{
                    font-size:25px;
                    color:rgb(235, 51, 51);
                }
                    .gasoline-distance-down2{
                        padding: 0 10px 0 10px;
                        font-size:10px;
                        color:rgb(235, 51, 51);
                    }
                    .gasoline-distance-down3{
                        font-size:10px;
                        color:rgb(156, 150, 150);
                        text-decoration: line-through;
                    }
                }
                
            }
            .gasoline-distance-right{
                width: 20%;
                height: 80px;
                i{
                    display: block;
                    text-align: center;
                    font-size:30px;
                    .icon-jiantou9{
                        font-size:30px;}
                }
            }
        }
        .gasoline-oil{
            padding: 10px 0 10px 0;
           
            .gasoline-oil-now{
                width: 100%;
            }
            .gasoline-oil-down{
                padding: 10px 0 10px 0;
               display: flex;
               justify-content: space-between;
               color: rgb(216, 191, 128);
                span{
                    font-size: 20px;
                }
                i{  
                    margin-top:5px;
                    font-size: 10px;
                    line-height: 20px;
                    text-align: center;
                    border: 1px solid rgb(216, 191, 128);
                    width: 50px;
                    height: 20px;
                }
            }
        }
    }
    .gasoline-mo{
        width: 84%;
        background: rgb(243, 233, 235);
        position: absolute;
        left: 3%;
        top:490px;
        border-radius: 5%;
        padding: 5% 5% 0 5%;
        margin-bottom: 50px;
        .gasoline-more{
            padding:15px 0 10px 0;
            height: 50px;
            border-bottom: 1px solid rgb(201, 196, 196);
            display: flex;
            justify-content: space-between;
            .gasoline-moreone{
                div{
                    font-weight: bold;
                    span{
                        font-size: 10px;
                    }
                }
                i{
                    font-size: 10px;
                    color:rgb(156, 153, 149);
                }
            }
            .gasoline-moretwo{
                span{
                    display: block;
                    width: 30px;
                    height: 30px;
                    border: 1px solid rgb(156, 153, 149);
                    font-size: 20px;
                    float: left;
                    text-align: center;
                    line-height: 30px;
                    border-radius: 50%;
                }
                i{
                    font-size: 20px;
                    line-height: 30px;
                }
            }
        }
        .gasoline-more:last-child{
            border:none
        }
    }

</style>