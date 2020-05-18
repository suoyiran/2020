<template>
    <div id="brand">
        <Brandheader/>
        <div class="brandcon">
            <div>
                <div class="brandcon-fis">
                    <span>确认订单</span>
                    <el-switch
                    v-model="value"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                    </el-switch>
                </div>
            </div>
            <div class="brandcon-bot">
                <div class="brandcon-boton">
                    <div>单笔限额</div>
                    <el-dropdown @command="handleCommand">
                    <div>
                        <span class="el-dropdown-link">{{money}}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </div>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="100元/笔">100元/笔</el-dropdown-item>
                        <el-dropdown-item command="200元/笔">200元/笔</el-dropdown-item>
                        <el-dropdown-item command="300元/笔">300元/笔</el-dropdown-item>
                        <el-dropdown-item command="400元/笔">400元/笔</el-dropdown-item>
                        <el-dropdown-item command="500元/笔">500元/笔</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="brandcon-boton">
                    <div>扣款频率</div>
                    <el-dropdown @command="handlecon">
                    <div>
                        <span>{{lecon}}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="1次/天">1次/天</el-dropdown-item>
                        <el-dropdown-item command="2次/天">2次/天</el-dropdown-item>
                        <el-dropdown-item command="3次/天">3次/天</el-dropdown-item>
                        <el-dropdown-item command="4次/天">4次/天</el-dropdown-item>
                        <el-dropdown-item command="5次/天">5次/天</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <div class="brandcon-now">
                <el-button type="danger">立即开通</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import Brandheader from '@/components/Brandheader'
export default {
    components:{
        Brandheader
    },
     data() {
      return {
        value: true,
        money:'100元/笔',
        lecon:'1次/天'
      }
    },
    
    methods: {
    handleCommand(command) {
    this.money = command;
    },
    handlecon(command){
        this.lecon = command;
    }
    }
}
</script>

<style scoped lang="scss">
.brandcon{
    position: relative;
    top:55px;
    margin-top:10px;
    .brandcon-fis{
        padding:0 3% 0 3%;
        background: ghostwhite;
        width:94%;
        height: 50px;
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
    .brandcon-bot{
        margin-top:10px;
        width: 100%;
        background: ghostwhite;
        .brandcon-boton{
            width: 94%;
            margin:0 3% 0 3%;
            height: 50px;
            align-items: center;
            display: flex;
            justify-content: space-between;
        }
        .brandcon-boton:first-child{
            
            border-bottom:1px solid rgb(216, 213, 213);
        }
    }
    .brandcon-now{
        width:100%;
        height: 45px;
        margin-top: 10px;
        background: ghostwhite;
        display: flex;
        justify-content: center;
        .el-button{
            width: 90%;
        }
    }
}
</style>
