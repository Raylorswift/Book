<template>
  <div class="app">
    <div class="header">
      <div class="title"><i class="fa fa-book"></i>图书管理系统</div>
      <div class="info">
        <img :src="user.userface" alt="">
        <!-- <div class="user">
          <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                {{user.nickname}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item command='logout'>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
        </div> -->
      </div>
    </div>
    <div class="content">
      <div class="left_nav">
        <ul>
          <li :class="{current:currentRoute=='/home'}">
            <i class="fa fa-500px"></i>
            <router-link to='/home'>欢迎页面</router-link>
            <i class="fa fa-angle-right"></i>
          </li>
          <li :class="{current:currentRoute=='/category'}">
            <i class="fa fa-align-justify"></i>
            <router-link to='/category'>栏目管理</router-link>
            <i class="fa fa-angle-right"></i>
          </li>
          <li :class="{current:currentRoute=='/article'}">
           <!--  <router-link to='/article'>文章管理</router-link> -->
           <i class="fa fa-tree"></i>
           <a href="javascript:void(0)" @click='jump("/article")'>文章管理</a>
           <i class="fa fa-angle-right"></i>
          </li>
          <li :class="{current:currentRoute=='/user'}">
            <i class="fa fa-user"></i>
             <router-link to='/user'>用户管理</router-link>
             <i class="fa fa-angle-right"></i>
          </li>
        </ul>
      </div>
      <div class="right_content">
        <div class="wrapper">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from '@/http/axios'
  export default {
    methods:{
      jump(url){
        // alert(url);
        this.$router.push(url)
      },
      // handleCommand(command){
      //   if(command == 'logout'){
      //     axios.get('/logout').then(()=>{
      //      localStorage.removeItem('user')
      //     });
      //   }
      // }, 
    },
    created(){
      //处理路由默认显示
      // this.currentRoute = this.$route.path;
      //处理用户登录
      // let user = JSON.parse(localStorage.getItem('user'));
      // if(user){
      //   this.user = user;
      // } else {
      //   window.vm.currentComponent = 'Login';
      // }
    },
    mounted(){
      // this.$router.push('/user');
      
    },
    watch:{
      '$route':function(to,from){
        this.currentRoute = to.path;
      }
    },
    data(){
      return {
        msg:'App.vue',
        currentRoute:'/home',
        user:{}
      }
    }
  }
</script>

<style>
  html{
    color:#666;
    font:normal normal 20px '微软雅黑'/*cursive*/;
  }
  body,ul,ol,dl,p,h1,h2,h3{
    margin:0;
    padding: 0;
    /*解决左右混动条*/
  }
  ul,ol {
    list-style: none;
  }
  a{
    text-decoration: none;
    color: #666;
  }
  div{
    box-sizing: border-box;
  }
  .el-dialog__body {
    padding: 0 20px;
  }
  .wrapper{
    overflow-y: auto;
  }
  .header{
    position: absolute;
    width: 100%;
    height: 60px;
    top:0px;
    background-color:#89bf04;
  }
  .header .title{
    color: #ffffff;
    line-height: 60px;
    padding: 0 1.5em;
    font-size: 30px;
    font-weight: 780;
    font-family:cursive;
    float: left;
  }
  .header .info {
    line-height: 60px;
    height: 60px;
    text-align: right;
   }
  .header .info>img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 5px;
    margin-right: 1em;
  }
  .header .info > .user {
    float: right;
    cursor: pointer;
  }
   .header .info > .user .el-dropdown {
    color: #fff;
   }

  .content{
    position: absolute;
    width: 100%;
    top:60px;
    bottom: 0px;
  }
 .content > .left_nav{
    width: 160px;
    height: 100%;
    float: left; 
  }
  .left_nav ul{

  }
  .left_nav ul li{
    line-height: 38px;
    text-align: center;
    border-bottom: 1px solid #ededed;
    position: relative;
  }
  .left_nav ul li.current {
    background-color: #f0f0f0;
  }
  .left_nav ul li >i:first-child {
    position: absolute;
    left: 1.2em;
    font-size: 14px; 
    top: 12px;
  }
   .left_nav ul li >i:last-child {
    position: absolute;
    right: 1.7em;
    font-size: 14px; 
    top: 12px;
  }
  .content >.right_content{
    box-sizing: border-box;
    margin-left:160px;
    height: 100%;
    background-color: #f0f0f0;
    padding: .5em;
    font-size: 2em;
  }
  .content >.right_content >.wrapper{
    box-sizing: border-box;
    width:100%;
    height: 100%;
    border-radius:5px;
    background-color: #ffffff;
    padding: .5em;
    overflow-y: auto;
  }

</style>



