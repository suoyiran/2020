<template>
    <div class="bigwantoli">
        <div class="wantoli">
                <div class="wantoli-commodity">
                    <div class="wantoli-commodity-all">全部商品:</div>
                    <div class="wantoli-commodity-alloli">
                        <el-radio @change="getValue()" text-color="#ccc" fill="#ccc"  size="small" v-model="radio1" label="汽油" border>汽油</el-radio>
                        <el-radio @change="getValue()"  text-color="#ccc" fill="#ccc"   size="small" v-model="radio1" label="柴油" border>柴油</el-radio>
                    </div>
                </div>
                <div class="wantoli-commodity">
                    <div class="wantoli-commodity-all">选择油号:</div>
                    <div class="wantoli-commodity-alloli">
                        <el-radio  size="small" v-model="radio2" label="92#" border>92#</el-radio>
                        <el-radio  size="small" v-model="radio2" label="95#" border>95#</el-radio>
                    </div>
                </div>
                <div class="wantoli-commodity">
                    <div class="wantoli-commodity-all">选择枪号:</div>
                    <div class="wantoli-commodity-alloli">
                        <el-radio  size="small" v-model="radio3" label="1号" border>1号</el-radio>
                        <el-radio  size="small" v-model="radio3" label="2号" border>2号</el-radio>
                        <el-radio  size="small" v-model="radio3" label="3号" border>3号</el-radio>
                        <el-radio  size="small" v-model="radio3" label="4号" border>4号</el-radio>
                        <el-radio  size="small" v-model="radio3" label="5号" border>5号</el-radio>
                        <el-radio  size="small" v-model="radio3" label="6号" border>6号</el-radio>
                        
                    </div>
                </div>
        </div>
        <div class="wantoli-commodity">
                    <div class="wantoli-commodity-allcon">
                        <div class="wantoli-commodity-all">选择金额:</div><el-input v-model="input" placeholder="请输入金额"></el-input>
                    </div>
                    <div class="wantoli-commodity-alloli">
                        <el-radio   size="small" v-model="input" label="100" border>￥100</el-radio>
                        <el-radio   size="small" v-model="input" label="200" border>￥200</el-radio>
                        <el-radio   size="small" v-model="input" label="300" border>￥300</el-radio>
                        <el-radio  size="small" v-model="input" label="400" border>￥400</el-radio>
                    </div>
            </div>
    </div>
</template>

<script>
export default {
    name:'wantoli',
    data () {
      return {
        radio1: '',
        radio2: '',
        radio3: '',
        radio4: '',
        input: ''
      };
    },
    mounted(){
         
        
    },
    methods: {
        getValue(){
            console.log(this.radio1)
            this.$store.commit('setPrint',this.radio1)
        }
    }
}
</script>

<style scoped lang="scss">
    .bigwantoli{
        height: 600px;
    }
    .wantoli{
        position: relative;
        top:55px;
        margin-top:20px;
        height: 380px;
        
    }
    .wantoli-commodity{
        width: 93%;
        margin:0 3% 0 3%;
        .wantoli-commodity-all{
            height:40px;
            line-height: 40px;
            color: rgb(145, 142, 142);
        }
        .el-radio.is-bordered{
            margin: 0 0 10px 10px;
        }
    }
    .wantoli-commodity-allcon{
        height: 60px;
        .wantoli-commodity-all{
            float: left;
        }
        .el-input{
            width: 60%;
            height: 60%;
            margin-left: 20px;
        }
        
    }
    
</style>
