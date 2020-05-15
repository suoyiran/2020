<template>
    <div id="main">
        <Header title="喵喵电影" />
        <div id="content">
            <div  class="cinema_menu">
				<div v-for="nav in navs" 
                :key="nav.id"
                 @click="mork = nav.mork"
                 :class="{active:mork === nav.mork}"
                 >
					{{nav.name}}
			</div>
		</div>
            <Caroust/>
                
            <Tmall/>
        </div>
           
        <TabBar />
    </div>
</template>

<script>

import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import Caroust from '@/components/Caroust'
import Tmall from '@/components/Tmall';
export default {
    name : 'Movie',
    components : {
        Header,
        TabBar,
        Caroust,
        Tmall,
    },
    data () {
        return {
            mork:'city',
            navs:[
                {id:1,name:'全程',mork:'city'},
                {id:2,name:'品牌',mork:'hot'},
                {id:3,name:'特色',mork:'search'},
            ]
        }
    },
    
}
</script>

<style scoped>
#content .cinema_menu{position: fixed;top:55px; width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;z-index:100;} 
/* #content .movie_menu{position: fixed;top:50px; width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:100;} */
/* .movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;} */
.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
/* .movie_menu .hot_item{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry i{  font-size:24px; color:red;}

.slide-enter-active{ animation : 13s detailMove;}
@keyframes detailMove{
	0%{
		transform : translateX(100%);
	}
	100%{
		transform : translateX(0);
	}
} */
</style>
