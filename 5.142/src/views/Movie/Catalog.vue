<template>
    <div>
      <Catalogheader/>
      <div id="connt">
          <div  class="cinema_menu">
            <div v-for="nav in navs" 
                    :key="nav.id"
                    @click="mork = nav.mork"
                    :class="{active:mork === nav.mork}"
                    >
              {{nav.name}}
          </div>
	  	  </div>
      </div>
      <Tmalldetail/>
    </div>
</template>

<script>
import Catalogheader from '@/components/Catalogheader';
import Tmalldetail from '@/components/Tmalldetail';
export default {
  name:"catalog",
  components : {
    Catalogheader,
    Tmalldetail
    },
    data () {
        return {
            mork:'city',
            navs:[
                {id:1,name:'综合',mork:'city'},
                {id:2,name:'销量',mork:'hot'},
                {id:3,name:'价格',mork:'search'},
            ]
        }
    },
}
</script>

<style scoped lang="scss">
#connt .cinema_menu{position: fixed;top:55px; width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;z-index:100;} 
.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
</style>
