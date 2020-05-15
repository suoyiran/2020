<template>
    <div class="colsing">
        <header id="header">
            <i class="iconfont icon-arrowLeft" @click="goBack"></i>
            <span>确认订单</span>
        </header>
        <div class="colsingcon">
            <div class="colsingcon-one">
                <div class="colsingcon-one-hed">
                    <b class="colsingcon-one-hedon">加油订单</b>
                    <div class="colsingcon-one-hedtw">
                        <span> 对加油金额/升数有疑问</span>
                        <i class="iconfont icon-arrowLeft"></i>
                    </div>
                </div>
                <div class="colsingcon-one-cen">
                    <div>油号、枪号</div>
                    <div>
                        <span>92#</span>
                        <span>1号枪</span>
                    </div>
                </div>
                <div class="colsingcon-one-dwn">
                    <div>金额</div>
                    <div>
                        <span class="colsingcon-one-dwnnn">约20.49L</span>
                        <span>￥100.00</span>
                    </div>
                </div>
            </div>
             <div class="colsingcon-one">
                <div class="colsingcon-one-hed">
                    <b class="colsingcon-one-hedon">加油优惠</b>
                    <div class="colsingcon-one-hedtw">
                        <i class="iconfont icon-arrowLeft"></i>
                    </div>
                </div>
                <div class="colsingcon-one-cen">
                    <div>
                        <i class="iconfont icon-arrowLeft"></i>
                        <span>直降优惠</span>
                    </div>
                    <div>
                        <span>-￥2.87</span>
                    </div>
                </div>
                <div class="colsingcon-one-dwn">
                    <div>
                        <i class="iconfont icon-arrowLeft"></i>
                        <span>优惠券</span>
                    </div>
                    <div>
                        <span class="colsingcon-one-dwnnn">查看可用券</span>
                       <span class="iconfont icon-arrowLeft"></span>
                    </div>
                </div>
            </div>
            <div class="colsingcon-down">
                <div class="colsingcon-one-hed">
                    <b class="colsingcon-one-hedon">支付</b>
                    <div class="colsingcon-one-hedtw">
                        <i class="iconfont icon-arrowLeft"></i>
                    </div>
                </div>
                <div class="colsingcon-one-cen">
                    <div>
                        <i class="iconfont icon-arrowLeft"></i>
                        <span>油票支付</span>
                         <span>￥0.00</span>
                    </div>
                    <div>
                        <span>本次可用0.00</span>
                        <i class="iconfont icon-arrowLeft"></i>
                    </div>
                </div>
                <div class="colsingcon-one-dwn">
                    <div>
                        <i class="iconfont icon-arrowLeft"></i>
                        <span>微信支付</span>
                    </div>
                    <div>
                        <span class="iconfont icon-arrowLeft"></span>
                    </div>
                </div>
                <div class="colsingcon-one-dwn">
                    <div>
                        <i class="iconfont icon-arrowLeft"></i>
                        <span>支付宝支付</span>
                    </div>
                    <div>
                        <span class="iconfont icon-arrowLeft"></span>
                    </div>
                </div>
                <div class="colsingcon-one-dwn">
                    <div>
                        <i class="iconfont icon-arrowLeft"></i>
                        <span>云支付</span>
                    </div>
                    <div>
                        <span class="colsingcon-one-dwnnn">查看可用券</span>
                        <span class="iconfont icon-arrowLeft"></span>
                    </div>
                </div>
                <div class="colsingcon-one-dwn">
                    <div>
                        <i class="iconfont icon-arrowLeft"></i>
                        <span>优惠券</span>
                    </div>
                    <div>
                        <span class="colsingcon-one-dwnnn">查看可用券</span>
                        <span class="iconfont icon-arrowLeft"></span>
                    </div>
                </div>
            </div>
        </div>
        
        <footer>
            <div class="footer-left">
                <span>合计</span>
                <b>￥97.13</b>
            </div>
            <div class="footer-right">
                <div class="footer-righton">
                    <span>明细</span>
                    <i class="iconfont icon-arrowLeft"></i>
                </div>
                <div class="footer-righttw">
                    确认支付
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name:'colsing',
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
}
</script>

<style scoped lang="scss">
.colsing{
    background:#e4dddd ;
}
header{
    width:100%; height:55px;background: white;  border-bottom: 1px solid #aca6a6; position: fixed;top:0px;z-index:100;
        i{
            line-height: 55px;
            margin-left:5%;
            font-size: 20px;
        }
        span{
            margin-left:35%;
        } 
    }
.colsingcon{
    width: 100%;
    height: 900px;
    position: relative;
    top:55px;
    .colsingcon-one{
        height: 153px;
        background: white;
        margin-bottom: 10px;
        div{
            height: 50px;
        }
        .colsingcon-one-hed{
            line-height: 50px;
            display: flex;
            justify-content: space-between;
            border-bottom:1px solid #aca6a6;
            b{
                margin-left:10px;
                font-size: 15px;
            }
            div{
                margin-right:12px;
            }
        }
        .colsingcon-one-hedtw{
            font-size: 10px;
            color: #aca6a6;
        }
    }
    .colsingcon-one-cen{
        margin:0 5% 0 5%;
        display: flex;
        justify-content: space-between;
        line-height: 50px;
        border-bottom:1px solid #aca6a6;
        font-size: 12px;
        color: rgb(49, 49, 49);
        span{
            margin-left:5px;
        }
    }
    .colsingcon-one-dwn{
        margin:0 5% 0 5%;
        display: flex;
        justify-content: space-between;
        line-height: 50px;
        font-size: 12px;
        color: rgb(49, 49, 49);
        .colsingcon-one-dwnnn{
            color: #aca6a6;
        }
        span{
            margin-left:5px;
        }
    }
    .colsingcon-down{
        height: 303px;
        background: white;
        margin-bottom: 10px;
        div{
            height: 50px;
        }
        .colsingcon-one-hed{
            line-height: 50px;
            display: flex;
            justify-content: space-between;
            border-bottom:1px solid #aca6a6;
            b{
                margin-left:10px;
                font-size: 15px;
            }
            div{
                margin-right:12px;
            }
        }
        .colsingcon-one-hedtw{
            font-size: 10px;
            color: #aca6a6;
        }
    }
}
footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: white;
    border-top:1px solid #aca6a6;
    display: flex;
    justify-content: space-between;
    div{
        line-height: 50px;
    }
    .footer-left{
        span{
            margin: 0 10px 0 10px;
        }
    }
    .footer-right{
        div{
            float: left;
        }
        .footer-righton{
            span{color: red;}
            i{
                margin: 0 10px 0 10px;
            }
        }
        .footer-righttw{
            width: 120px;
            background: red;
            text-align: center;
            color: white;
        }
    }
}
</style>
