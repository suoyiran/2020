<template>
    <div id="main">
        <Header title="喵喵电影" />
        <div id="content">
            <div  class="cinema_menu">
				<div to="/movie/tmall" class="city_name">
					全城 
				</div>
				<div to="/movie/nowPlaying" class="hot_item">
					品牌 
				</div>
				<div to="/movie/search" class="search_entry">
					特色 
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
    /* methods:{
        tag(){
            this.$router.push("./move/detail")
            
        }
    }, */
    mounted(){

     /*    setTimeout(()=>{
            this.axios.get('/api/getLocation').then((res)=>{
                var msg = res.data.msg;
                if(msg === 'ok'){

                    var nm = res.data.data.nm;
                    var id = res.data.data.id;
                    if( this.$store.state.city.id == id ){return;}
                    messageBox({
                        title : '定位',
                        content : nm,
                        cancel : '取消',
                        ok : '切换定位',
                        handleOk(){
                            window.localStorage.setItem('nowNm',nm);
                            window.localStorage.setItem('nowId',id);
                            window.location.reload();
                        }
                    });
                }
            });
        },3000); */
       
    }
}
</script>

<style scoped>
#content .cinema_menu{position: fixed;top:55px; width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;z-index:100;} 
/* #content .movie_menu{position: fixed;top:50px; width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:100;} */
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.cinema_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_item{ display: flex; height:100%; line-height: 45px;}
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
}
</style>
