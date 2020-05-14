<template>
    <div id="detailed">
        <header id="header">
            <div class="iconfont icon-arrowLeft" @click="goBack"></div>
        </header>
        <div class="block">
            <el-carousel height="300px">
            <el-carousel-item v-for="item in 4" :key="item">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589452085581&di=b3238f2316c2ae2ba20525b529a89ffc&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F20%2F48%2F01300537274627138713487526357.png" alt="">
            </el-carousel-item>
            </el-carousel>
        </div>
        <div class="detailed">
            <div class="detailed-top">
                <i class="iconfont icon-arrowLeft"></i><b>精力佩小麦胚力佩小麦胚芽加软麟的课程那我怕，的，另外</b>
            </div>
            <div class="detailed-con">
                <div class="detailed-con1">
                    <span>券后价</span>
                    <b>￥49.8</b>
                </div>
                <div class="detailed-con2">销量 909</div>
            </div>
            <div class="detailed-bot">原价￥69.8</div>
        </div>
        <div class="discount">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589453972355&di=8c171192f5653c97059cc16c723051e7&imgtype=0&src=http%3A%2F%2Fwww.kaitao.cn%2Fdata%2Fupload%2Fueditor%2F20170726%2F597800ebd4124.png" alt="">
        </div>
        
        <footer>
            <el-button type="danger">危险按钮</el-button>
        </footer>
    </div>
</template>

<script>
export default {
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
}
</script>

<style scoped lang="scss">
    #header{
    width:100%; height:55px; color: #fff; position: fixed;top:0px;z-index:100;
    display: flex; align-items: center;
        div{  
            line-height:30px;
            margin-left:5%;
            font-size: 25px;
            text-align: center;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: rgb(184, 179, 179);
        }
    }
    .block{
        img{
            width: 100%;
            height: 100%;
        }
    }
    .detailed{
        width: 94%;
        height: 130px;
        padding:3%;
        border-bottom:1px solid rgb(177, 174, 174);
        .detailed-top{
            height: 60px;
        }
        .detailed-con{
            display: flex;
            justify-content: space-between;
            height: 40px;
            .detailed-con1{
                span{
                    font-size: 10px;
                    color: rgb(245, 43, 43);
                }
                b{
                    font-size: 20px;
                    color: rgb(245, 43, 43);
                }
            }
            .detailed-con2{
                font-size: 10px;
                color: rgb(177, 174, 174);
            }
        }
        .detailed-bot{
            font-size: 10px;
            text-decoration:line-through;
        }
    }
    .discount{
        width:94%;
        padding: 3%;
        height: 100px;
        img{
            width:100%;
            height: 100%;
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
