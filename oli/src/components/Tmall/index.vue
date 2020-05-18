<template>
    <div class="Tmall">
        <div class="Tmall-top" >
            <div  class="Tmall-top-more" @click="tag">
                <div class="Tmall-top-mores" >
                    <div><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589366792151&di=44a7d895a147e7ba724f5f37a0f6aa77&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg" alt=""></div>
                    <span >女装</span>
                </div>
            </div>
            <div  class="Tmall-top-more">
                <div class="Tmall-top-mores">
                    <div></div>
                    <span>女装</span>
                </div>
            </div>
            <div  class="Tmall-top-more">
                <div class="Tmall-top-mores">
                    <div></div>
                    <span>女装</span>
                </div>
            </div>
            <div  class="Tmall-top-more">
                <div class="Tmall-top-mores">
                    <div></div>
                    <span>女装</span>
                </div>
            </div>
            <div  class="Tmall-top-more">
                <div class="Tmall-top-mores">
                    <div></div>
                    <span>问题车品</span>
                </div>
            </div>
            <div  class="Tmall-top-more">
                <div class="Tmall-top-mores">
                    <div></div>
                    <span>女装</span>
                </div>
            </div>
            <div  class="Tmall-top-more">
                <div class="Tmall-top-mores">
                    <div></div>
                    <span>女装</span>
                </div>
            </div>
        </div>
        <div class="Tmall-bottom"  >
            <div class="Tmall-bottom-title"><span>优质推荐</span></div>
            <div class="Tmall-bottom-down" >
                 <el-row >
                    <el-col @click.native="detailed" :span="8" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0" @click="detailed">
                        <el-card :body-style="{ padding: '0px' }">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                        <div style="padding: 8px;">
                            <div class="Tmall-bottom-down1">
                                <i class="iconfont icon-daohang"></i><span>精神境界失敬失敬失敬失敬</span>
                            </div>
                            <div class="Tmall-bottom-down2">
                                <b>原价 ￥25.00</b>
                                <span>销量 1928</span>
                            </div>
                            <div class="Tmall-bottom-down3">
                                <div class="Tmall-bottom-down31">11.00元优惠券</div>
                                <div class="Tmall-bottom-down32">返金币：0.00</div>
                            </div>
                        </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name : 'Tmall',
    data(){
        return {
           
        }
    },
    methods:{
        tag(){
            this.$router.push('/movie/catalog')
        },
        detailed(){
            this.$router.push('/movie/detailed')
        }
    }
    
}
</script>

<style scoped lang="scss">
    .Tmall-top{
        width:100%;
        overflow: hidden;
        .Tmall-top-more{
            width: 20%;
            height: 100px;
            background: #fff;
            float: left;
            .Tmall-top-mores{
                margin: 10px;
                width: 80%;
                height: 80%;
                background: rgb(240, 236, 233);
                text-align: center;
                font-size:5px;
                div{
                    width: 70%;
                    height: 60%;
                    margin-left: 15%;
                    background: rgb(31, 27, 14);
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
    .Tmall-bottom{
        width: 100%;
        margin-top:10px;
        .Tmall-bottom-title{
            width: 100%;
            height:40px;
            background:#fff;
            float: left;
            text-align: center;
            line-height: 40px;
            color:red;
            span{
            font-size: 20px;

            }
        }
    }
.el-col-8{
    width: 50%;
    padding:0;
    margin:0;
    }
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 80%;
    margin-left: 10%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .Tmall-bottom-down1{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .Tmall-bottom-down2{
      display: flex;
      justify-content: space-between;
      padding:7px 0 7px 0;
      b{
          font-size:5px;
          color: crimson;
      }
      span{
          font-size:5px;
          color: rgb(146, 141, 141);
      }
  }
  .Tmall-bottom-down3{
      width: 100%;
      display: flex;
      justify-content: space-between;
      div{
          width: 49%;
          height: 20px;
        float: left;
        color: #fff;
        font-size:5px;
        text-align: center;
      }
       .Tmall-bottom-down31{
              background: rgb(207, 83, 66);
          }
          .Tmall-bottom-down32{
              background: rgb(233, 191, 75);
          }
  }
    
</style>
