<template>
	<div class="login">
		<h2 class="title">后台管理系统 </h2>
		<el-form :rules='rules' :model="form" size="mini" label-position="left" >
		    <el-form-item prop='username' label="用户名" label-width="6em">
		      <el-input v-model="form.username"></el-input>
		    </el-form-item>
		    <el-form-item label="密码" label-width="6em">
		      <el-input v-model="form.password" type="password"></el-input>
		    </el-form-item>
		  </el-form>
		  <div class="btns">
		  	<el-button size="mini" @click='login'>登录</el-button>
		  </div>
	</div>
</template>
<script>
	import axios from '@/http/axios'
	export default {
		data(){
			return {
				form:{},
				rules:{
					username:[{
						required:true,
						message:'请输入要用户名',
						triigger:'blur'
					}]
				}
			}
		},
		methods:{
			login(){
				axios.post('/login',this.form).then((respose)=>{
					if(result.status == 200 && result.message == '登录成功'){
						//登录成功的处理
						//1. 页面跳转
						// this.$root
						window.vm.currentComponent = 'App';
						//2. 用户信息的保存
						localStorage.setItem('user',JSON.stingify(result.data))

						localStorage.getItem('user')
					}
				})
				.catch((error)=>{
					this.$notify.error({
						title:'错误',
						message:'网络异常'
					});
				});
			}
		}
	}
</script>
<style>
	input:-webkit-autofill {
		-webkit-box-shadow: 0 0 0px 1000px white inset !important;
	}
	.login{
		width: 400px;
		margin: 0 auto;
	}
	.login .title {
		margin-top: 120px;
		text-align: center;
	}
	.login .btns {
		text-align: right;
	}
</style>
