<template>
    <header id="header">
        <i class="iconfont icon-arrowLeft" @click="goBack"></i>
        <span>{{queryname}}</span>
    </header>
</template>

<script>
export default {
    name : 'Header',
    data () {
        return {
            queryname:''
        }
    },
    created () {
        this.queryname = this.$route.query.queryname
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    },
}
</script>

<style scoped lang="scss">
#header{
    width:100%; height:55px; color: #fff; background: #e54847; border-bottom: 1px solid #e54847; position: fixed;top:0px;z-index:100;
        i{
            line-height: 55px;
            margin-left:5%;
            font-size: 20px;
        }
        span{
            margin-left:35%;
        } 
    }

</style>
