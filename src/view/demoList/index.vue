<template>
  <div id="demoList">
    <div class="title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-s-claim head-icon"></i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>项目任务</el-breadcrumb-item>
        <el-breadcrumb-item>批量新建订单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div id="cont-list">
      <div class="title-group">
        <div class="t-g-left">
           <el-button round class="t-btn">全部项目</el-button>
           <el-button round class="t-btn">批量导入</el-button>
           <el-button round class="t-btn">已作废项目</el-button>
        </div>
        <div class="t-g-right">
          <el-input placeholder="项目名称关键词搜索" class="search" v-model="search"></el-input>
          <el-select placeholder="请选择状态" class="start" v-model="start">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            class="time">
          </el-date-picker>
          <el-button type="primary" class="btn-search">搜索</el-button>
        </div>
      </div>
      <template>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="date"
            label="项目编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="项目名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="任务">
          </el-table-column>
          <el-table-column
            prop="address"
            label="订单">
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demoList',
  data () {
    return {
      msg: '你好',
      search:'',
      start:'',
      value1:'',
      tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
              }]
    }
  }
}
</script>

<style>
#cont-list{
  background-color: #fff;
  border-radius: 5px;
  margin-top: 15px;
}
.title-group{
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
.t-btn{
  border-color: #788ae9;
  color: #788ae9;
  height: 30px;
  padding-top: 7px !important;
}
.t-g-left{
  width: 300px;
  display: flex;
}
.t-g-right{
  height: 30px;
  display: flex;
  border: 1px solid #d7d7d7;
  border-radius: 30px;
  overflow: hidden;
}
.t-g-right>.search{
  width: 180px;
}
.t-g-right>.search>input{
  height: 30px;
  border: none;
}
.t-g-right>.start>div{
  width: 120px;
  height: 35px;
  border-left:1px solid #d7d7d7;
}
.t-g-right>.start>div>input{
  height: 30px;
  border: none;
}
.t-g-right>.time{
  width: 230px;
  height: 30px;
  border-radius: 0;
  border: none;
  border-left:1px solid #d7d7d7;
}
.t-g-right>.time>i,.t-g-right>.time>span{
  margin-bottom: 8px;
}
.t-g-right>.btn-search{
  border-radius: 0;
  padding-top: 8px !important;
}

</style>