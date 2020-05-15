<template>
    <header id="header">
        <el-page-header title='' @back="goBack" content="中惠泽石油英雄山路站" class="olicon">
            中惠泽石
        </el-page-header>
    </header>
</template>

<script>
export default {
    name : 'Header',
    methods: {
      goBack() {
        this.$router.push('/gasoline')
      }
    }
}
</script>

<style scoped lang="scss">
#header{
    width:100%; height:55px; background: #e54847; border-bottom: 1px solid #e54847; position: fixed;top:0px;z-index:100;
        .olicon{
            line-height: 55px;color: #fff;
        }
    }

</style>
