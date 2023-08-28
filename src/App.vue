<template>
  <div id="app">
    <div class="box">
      <div id="left">
        <!-- <div class="left-title">灵活用工服务平台</div> -->
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo lt-title"
          :class="{twh:isCollapse}"
          @open="handleOpen"
          @close="handleClose"
          disabled="true"
          :collapse="isCollapse"
          background-color="#cf121a"
          active-text-color="#fff">
          <el-menu-item index="1" class="left-title">
            <i class="el-icon-s-promotion" :class="{fontBig:isCollapse}"></i>
            <span slot="title" >灵活用工服务平台</span>
          </el-menu-item>
        </el-menu>
        <div class="navGroup">
          <div class="common">
            <p class="t-text" v-show="!isCollapse">常用操作</p>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              style="border: none;border-radius: 80px;margin-top: 10px;"
              disabled="true"
              :collapse="isCollapse"
              background-color="#e0dfdf"
              active-text-color="#162d8d">
              <router-link to="/">
                <el-menu-item index="1" class="common-item">
                    <i class="el-icon-s-home" style="color: #162d8d;" :class="{fontBig:isCollapse}"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
              </router-link>
            </el-menu>
          </div>
          <div class="common">
            <p class="t-text" v-show="!isCollapse">业务管理</p>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose" style="border: none;"
              :collapse="isCollapse"
              collapse-transition="false"
              active-text-color="#2d4196"
              >
              <el-submenu index="1" style="width:170px;" route="demo">
                <template slot="title">
                  <i class="el-icon-s-claim" :class="{fontBig:isCollapse}"></i>
                  <span>项目任务</span>
                </template>
                <router-link to="/demo">
                  <el-menu-item index="1-1" class="l-arrows">
                      <i class="el-icon-arrow-right"></i>
                      批量新建订单
                  </el-menu-item>
                </router-link>
                <router-link to="/demoList">
                  <el-menu-item index="1-2" class="l-arrows">
                    <i class="el-icon-arrow-right"></i>项目列表</el-menu-item>
                </router-link>
                <router-link to="/orders">
                  <el-menu-item index="1-3" class="l-arrows">
                    <i class="el-icon-arrow-right"></i>任务派单</el-menu-item>
                </router-link>
                <router-link to="/dispatch">
                  <el-menu-item index="1-4" class="l-arrows">
                    <i class="el-icon-arrow-right"></i>订单派单</el-menu-item>
                </router-link>
              </el-submenu>
              <el-submenu index="2" style="width:170px;">
                <template slot="title">
                  <i class="el-icon-s-order" :class="{fontBig:isCollapse}"></i>
                  <span>资金发票</span>
                </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-submenu>
              <el-submenu index="3" style="width:170px;">
                <template slot="title">
                  <i class="el-icon-s-data" :class="{fontBig:isCollapse}"></i>
                  <span>企业管理</span>
                </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
          <div class="common">
            <p class="t-text" v-show="!isCollapse">服务中心</p>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose" style="border: none;"
              :collapse="isCollapse">
              <el-submenu index="1" style="width:170px;">
                <template slot="title">
                  <i class="el-icon-user-solid" :class="{fontBig:isCollapse}"></i>
                  <span>身份&安全</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </div>
        </div>
      </div>
      <div id="right">
        <div class="t-right">
          <div class="t-start">
            <i class="el-icon-s-fold" @click="cut"></i>
            <i class="el-icon-menu"></i>
          </div>
          <div class="t-end">
            <p>帮小忙 (北京) 文化发展有限公司</p>
            <i class="el-icon-setting"></i>
          </div>
        </div>
        <div class="r-cont">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    cut () {
      this.isCollapse = !this.isCollapse
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
body{
  background-color: #f4f4f4;
}

.box{
  width: 100%;
  display: flex;
}
#left{
  /* width: 200px; */
  height: 100vh;
  /* height: auto; */
  background: #fff;
  overflow: hidden;
}
.twh{
  width: 95px !important;
  transition: 0.5s;
}
/* 缩小变大 */
.fontBig{
  font-size: 30px !important;
  margin-left: -2.5px !important;
  transition: 0.5s;
}
.lt-title{
  width: 200px;
  border: none;
}
.left-title{
  height: 50px;
  /* background: #cf121a; */
  text-align: center;
  line-height: 50px;
  color: #fff;
}
.left-title>i{
  color: #fff;
}
/* .left-title:hover {
  background: #cf121a;
} */
.navGroup{
  padding: 12px 15px;
}
.common{
  margin-bottom: 20px;
}
.common .t-text{
  font-size: 13px;
  font-weight: bold;
  color: #6c7379;
}
.common-item{
  /* margin-top: 10px; */
  height: 45px;
  background: #e0dfdf;
  border-radius: 30px;
  /* text-align: center; */
  line-height: 45px;
  font-weight: bold;
  color: #162d8d;
}
/* .common-item>i{
  color: #162d8d;
} */
#right{
  flex: 1;
}
.t-right{
  background-color: #2d4196;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 20px;
}
.t-right>.t-start>i{
  font-size: 20px;
  margin-right: 15px;
}
.t-right>.t-end{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.t-right>.t-end>p{
  margin-right: 30px;
}
.r-cont{
  padding: 15px 10px;
  box-sizing: border-box;
  width: 100%;
  height: 92vh;
  overflow: scroll;
}
/* 子项目左侧箭头 */
.l-arrows{
  padding-left: 25px !important;
}
.l-arrows>a>i{
  font-size: 12px !important;
  font-weight: bold !important;
  color: #444346 !important;
  margin-right: 0 !important;
}
a{
  color: #7c7f81;
  text-decoration: none;
}
.head-icon{
  color: #2d4196;
  font-size: 15px;
}
</style>
