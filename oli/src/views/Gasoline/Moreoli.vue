<template>
    <div id="moreoli">
        <!-- <header>
            <i class="iconfont icon-arrowLeft" @click="goBack"></i>
            <span>一键充电</span>
        </header> -->
        <Brandheader/>
        <nav>
            <el-menu  class="el-menu-demo" mode="horizontal"  @select="handleSelect" >
            <el-submenu index="1" ref="menu" >
                <template slot="title">{{screen}}</template>
                <el-menu-item index="智能筛选">智能筛选</el-menu-item>
                <el-menu-item index="停车免费">停车免费</el-menu-item>
                <el-menu-item index="卫生间">卫生间</el-menu-item>
            </el-submenu>
            </el-menu>
            <el-menu  class="el-menu-demo" mode="horizontal"  @select="handdistance"  >
            <el-submenu index="2" ref="menu" >
                <template slot="title">{{distance}}</template>
                <el-menu-item index="1km内">1km内</el-menu-item>
                <el-menu-item index="2km内">2km内</el-menu-item>
                <el-menu-item index="3km内">3km内</el-menu-item>
                <el-menu-item index="5km内">5km内</el-menu-item>
                <el-menu-item index="10km内">10km内</el-menu-item>
                <el-menu-item index="20km内">20km内</el-menu-item>
            </el-submenu>
            </el-menu>
            <el-menu  class="el-menu-demo" mode="horizontal"  @select="handcharge" >
            <el-submenu index="3" ref="menu" >
            <template slot="title">{{charge}}</template>
                <el-menu-item index="快充">快充</el-menu-item>
                <el-menu-item index="慢充">慢充</el-menu-item>
            </el-submenu>
            </el-menu>
        </nav>
        <div class="gasoliness">
            <div class="gasoline-first">
                <div class="gasoline-distance">
                    <div class="gasoline-distance-left">
                        <div class="gasoline-distance-near">
                            <b>中惠泽石油英雄山路站</b>
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
                     <div class="mask" v-if="showModal" @click="showModal=false">
                     </div>
                    <div class="pop" v-if="showModal">
                        <div class="mapp">高德地图</div>
                        <div @click="showModal=false" class="btn">取消</div>
                    </div>
                    <div class="gasoline-distance-right" @click="showModal=true">
                        <i class="iconfont icon-daohang"></i>
                        <span >1.47km</span>
                    </div>
                </div>
            </div > 
             
        </div> 
    </div>
</template>

<script>
import Brandheader from '@/components/Brandheader'
export default {
    name : 'moreoli',
    components:{
        Brandheader
    },
    data() {
      return {
        activeIndex1: '1',
        activeIndex2: '1',
        screen:'智能筛选',
        distance:'1km内',
        charge:'快充',
        showModal: false
      }
    },
    created () {
        console.log(this.$route.query.queryname)
    },
    methods: {
      /* goBack() {
        this.$router.push('/gasoline')
      }, */
      handleSelect(index, indexPath) {
          this.screen = index
      },
      handdistance(index, indexPath){
          this.distance = index
      },
      handcharge(index, indexPath){
          this.charge = index
      },
    }
    
}
</script>

<style scoped lang="scss">

/* header{
    width:100%; height:55px; color: #fff; background: #e54847; border-bottom: 1px solid #e54847; position: fixed;top:0px;z-index:100;
        i{
            line-height: 55px;
            margin-left:5%;
            font-size: 20px;
        }
        span{
            margin-left:37%;
        } 
    } */
nav{
    width:100%;
    display:flex;
    justify-content:  space-between;
    position:fixed;
    top:55px;
}
.gasoliness{
        position: absolute; 
        width:100%;
        top:115px;
    .gasoline-first{
        height: 140px;
        background: rgb(243, 233, 235);
        padding: 3%;
        border-bottom:1px solid gray;
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
        
    } 
     .mask {
    background-color: #000;
    opacity: 0.3;
    position: fixed;
    bottom:0;
    left:0;
    width: 100%;
    height: 120px;
    z-index: 1
    }
    .pop {
    background-color: #fff;
    position: fixed;
    bottom:0;
    left:0;
    width: 100%;
    height: 120px;
    z-index: 2;
    div{
        height:60px;
        text-align:center;
        line-height:70px;
    }
    }
    .btn {
    background-color: #fff;
    border-top:1px solid gray;
    }
</style>
