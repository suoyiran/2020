<template>
    <div class="Caroust">
            <el-carousel height="170px">
            <el-carousel-item v-for="item in 4" :key="item" >
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589296721490&di=7098c3456131ef75992ab7e3c96c641b&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F16%2F05%2F28%2F1657495a2b287f6.jpg" alt="">
            </el-carousel-item>
            </el-carousel>
            <div class="Caroust-file">
                <div>加油通</div>
                <marquee>滚动文字滚动文字滚动文字滚动文字</marquee>
            </div>
    </div>
</template>

<script>


export default {
    name : 'Caroust',
    data(){
        return {
           
        }
    },
    
}
</script>

<style scoped lang="scss">
.Caroust{
    margin-top:40px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .Caroust-file{
      width: 100%;
      height: 35px;
      background-color: rgb(240, 231, 230);
        line-height: 35px;
      div{
          float: left;
          padding-left: 20px;
      }
      marquee{
          width: 70%;
          float: right;
          padding-right: 20px;
      }
  }
</style>
