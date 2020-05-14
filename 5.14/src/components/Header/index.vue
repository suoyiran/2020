<template>
    <header id="header">
        <div class="demo-input-suffix">
            <el-input
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                >
            </el-input>
        </div>   
        <div class="iconfont icon-gouwucheman"></div>
    </header>
</template>

<script>
export default {
    name : 'Header',
}
</script>

<style scoped lang="scss">
#header{
    width:100%; height:55px; color: #fff; background: #e54847; border-bottom: 1px solid #e54847; position: relative;
    
    }
.demo-input-suffix{
    width: 80%;
    height: 10px;
    float: left;
    margin:10px 0  0 20px;
}

.icon-gouwucheman{
    float: left;
    font-size: 25px;
    padding: 15px 0 0 15px ;
} 
</style>
