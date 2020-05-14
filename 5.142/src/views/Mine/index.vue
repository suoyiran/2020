<template>
    <div id="main">
        <header>
            <div class="mainnotice"><i class="iconfont icon-guanyu" ></i> </div>

            <div class="mainportrait">
                <div class="iconfont icon-geren"></div>
                <div  class="mainportrait-right">
                    <div class="mainportrait-right1">用户</div>
                    <div class="mainportrait-right2">
                        <div>注册会员</div>
                        <div>未认证私家车</div>
                    </div>
                </div>
            </div>
        </header>
        <div class="maindiscount">
            <!-- <el-divider direction="vertical" class="divider"></el-divider> -->
            <div class="maindiscount-down">
                <div class="maindiscount-down1">0</div>
                <div class="maindiscount-down2">油票(元)</div>
            </div>
            <div class="maindiscount-down">
                <div class="maindiscount-down1">0</div>
                <div class="maindiscount-down2">油票(元)</div>
            </div>
            <div class="maindiscount-down">
                <div class="maindiscount-down1">0</div>
                <div class="maindiscount-down2">油票(元)</div>
            </div>
            <div class="maindiscount-down">
                <div class="maindiscount-down1">0</div>
                <div class="maindiscount-down2">油票(元)</div>
            </div>
        </div>
        <div class="maindiscountimg">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589431577884&di=3933d7474716f7170940d9c65677ad23&imgtype=0&src=http%3A%2F%2Fimg.ewebweb.com%2Fuploads%2F20191224%2F22%2F1577197932-lIdZgizKWO.jpg" alt="">
        </div>
        <div class="gasoline-moss">
                <div class="gasoline-more" v-for="item in items" :key="item.id">
                    <div class="gasoline-moreone">
                        <span :class="item.icon1"></span><i>{{item.title2}}</i>
                    </div>
                    <div class="gasoline-moretwo">
                        <i class="iconfont icon-youjiantou"></i>
                    </div>
                </div>
                
            </div> 
        <TabBar />
    </div>
</template>
<script>
import TabBar from '@/components/TabBar';
export default {
    name : 'Mine',
    components : {
        TabBar,
    },
    data() {
        return {
            items:[
                {id:1,title2:'车票支付',icon1:'iconfont icon-gengduo'},
                {id:2,title2:'礼品兑换',icon1:'iconfont icon-gengduo'},
                {id:3,title2:'我要合作',icon1:'iconfont icon-geren'},
                {id:4,title2:'帮助中心',icon1:'iconfont icon-jurassic_users'},
                {id:5,title2:'客服种子',icon1:'iconfont icon-bao'},
                {id:6,title2:'客服种子',icon1:'iconfont icon-bao'}
            ]
        }
    },
    methods: {
        
    },
}
</script>

<style scoped lang="scss">
    header{
        width: 100%;
        height: 150px;
        background: wheat;
    }
    .mainnotice{
        height: 50px;
        display: flex;
        justify-content: flex-end;
        i{
            padding:10px;
            font-size:20px;
        }
    }
    .mainportrait{
        height: 100px;
        display: flex;
        justify-content: flex-start;
        .icon-geren{
            font-size:30px;
            width: 50px;
            height: 50px;
            color: white;
            border-radius: 50%;
            background-color: #837d7d;
            text-align: center;
            line-height: 50px;
            margin:0 20px  0 20px;
        }
    }
    .mainportrait-right{
        width: 180px;
        .mainportrait-right1{
            text-align: center;
        }
        .mainportrait-right2{
            font-size: 10px;
            display: flex;
            justify-content: space-around;
            margin-top:10px;
            div{
                float: left;
                padding: 3px 5px 3px 5px;
                background-color: white;
                border-radius: 5px;
            }
        }
    }
    .maindiscount{
        width:94%;
        height: 100px;
        margin:2% 3% 2% 3%;
        background: wheat;
        /* padding: 5%; */
        border-radius: 5%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .maindiscount-down{
            text-align: center;
            div{
                margin:10px 0 10px 0;
                
            }
            .maindiscount-down2{
                font-size: 10px;
                color: rgb(146, 140, 140);
            }
        }
        
    }
    .maindiscountimg{
        width:94%;
        height:100px;
        margin:2% 3% 2% 3%;
        border-radius: 5%;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .gasoline-moss{
        width: 84%;
        background: rgb(243, 233, 235);
        margin:2% 3% 3% 3%;
        border-radius: 5%;
        padding:5% 5%  0 5%;
        margin-bottom: 50px;
        .gasoline-more{
            padding:10px 0 5px 0;
            height: 40px;
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
                    color:rgb(41, 41, 40);
                    margin-left: 7px;
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
