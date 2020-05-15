<template>
    <div id="oline">
        <Olineheader/>
        <div class="box-gasoline-firstoli">
            <div class="gasoline-distance">
                <div class="gasoline-distance-con"><img src="" alt=""></div>
                <div class="gasoline-distance-left">
                    <div class="gasoline-distance-near">
                        <b>中惠泽石油英雄山路站</b>
                    </div>
                    <div class="gasoline-distance-address">
                        <i class="iconfont icon-guanyu"></i>
                        <span>济南市市中区英雄山路216号（银座奥特莱斯对面）</span>
                    </div>
                    <div  class="gasoline-distance-down">
                        <span class="gasoline-distance-down1">￥4.88</span>
                        <span class="gasoline-distance-down2">已降￥0.60</span>
                    </div>
                </div>
                <div class="gasoline-distance-right">
                    <i class="iconfont icon-daohang"></i>
                    <span >1.47km</span>
                </div>
            </div>
            <div class="gasoline-distance-oil"> 
                <div>
                    <i class="iconfont icon-guanyu"></i><span>加油满150免费洗车</span>
                </div>
                <div>
                    <i class="iconfont icon-guanyu"></i><span>满150返0.5元</span>
                </div>
                <div class="gasoline-distance-oilzan">
                    站内开票
                </div>
            </div>
        </div > 
            <div id="contentcon">
                <div class="movie_menu">
                    <router-link tag="div" to="/oline/wantoli" class="city_name">
                        <span>我要加油</span>
                    </router-link>
                    <div class="hot_swtich">
                        <router-link tag="div" to="/oline/riders" class="hot_item">车友印象</router-link>
                    </div>
                    <router-link tag="div" to="/oline/order" class="search_entry">
                        <span>实时订单</span>
                    </router-link>
                </div>    
                </div>
        <router-view/>
        <footer>
            <el-button type="danger" @click="esult">下一步</el-button>
        </footer>
    </div>
</template>

<script>
import Olineheader from '@/components/Olineheader';
export default {
    components: {
        Olineheader
    },
    data () {
        return {
           
        }
    },
    methods: {
        esult(){
            this.$router.push('/closing')
        }
    }
}
</script>

<style scoped lang="scss">
#contentcon .movie_menu{position: relative;top:55px; width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}

    .box-gasoline-firstoli{
       position: relative;
        top:55px;
        width: 84%;
        height: 220px;
        background: rgb(243, 233, 235);
        left: 3%;
        border-radius: 5%;
        padding: 5%;
        .gasoline-distance{
            padding:15px 0 25px 0;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgb(243, 237, 237);
            .gasoline-distance-con{
                width: 15%;
                height: 50px;
                background: red;
            }
            .gasoline-distance-left{
                width: 60%;
                height: 80px;
                .gasoline-distance-near{
                    width: 100%;
                    padding-bottom: 5px ;
                    height: 25px;
                    
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
                width: 15%;
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
        .gasoline-distance-oil{
            div{
                width: 100%;
                height: 30px;
                 span{
                    font-size:10px;
                    color: rgb(156, 153, 149);
                    padding-left: 5px ;
                    line-height: 20px;
                }
                i{
                    color:rgb(235, 51, 51);
                }
                
            }  
            .gasoline-distance-oilzan{
                     color:rgb(235, 51, 51);
                     width: 55px;
                     text-align: center;
                     line-height: 20px;
                     height: 20px;
                     border: 1px solid rgb(235, 51, 51);
                     font-size:10px;
                }
        }
        
    }
    footer{
        width:94%;
        padding: 3%;
        height: 35px;
        position: fixed;
        bottom:0;
        z-index: 100;
        background: white;
        button{
            width:100%;
        }
    }
</style>
