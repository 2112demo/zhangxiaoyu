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
          stripe="false"
          class="tabel-t"
          style="width: 1313px">
          <el-table-column
            prop="id"
            label="项目编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="项目名称"
            width="170">
          </el-table-column>
          <el-table-column
            prop="task"
            label="任务"
            width="60">
          </el-table-column>
          <el-table-column
            prop="orderForm"
            label="订单"
            width="78">
          </el-table-column>
          <el-table-column
            prop="start"
            label="状态"
            width="125">
          </el-table-column>
          <el-table-column
            prop="price"
            label="项目金额"
            width="99">
          </el-table-column>
          <el-table-column
            prop="tax"
            label="税费服务费"
            width="120">
          </el-table-column>
          <el-table-column
            prop="time"
            label="项目时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="city"
            label="省份城市"
            width="122">
          </el-table-column>
          <el-table-column
            prop="establish"
            label="创建时间"
            width="180">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            label-class-name="operator"
            width="150">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small" style="color: rgb(0 226 150);font-weight: bold;">提交审核</el-button>
              <el-button type="text" size="small" style="color: #eb0000;font-weight: bold;">作废</el-button>
            </template>
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
      search: '',
      start: '',
      value1: '',
      tableData: [{
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        task: 2,
        province: '2',
        orderForm: '报审',
        start: '待报审',
        price: '0.20',
        tax: '0.00',
        time: '2021-08-25~2021-08-26',
        city: '河北省-邢台市',
        establish: '2021-08-25~2021-08-26'
      }, {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        task: 2,
        province: '2',
        orderForm: '报审',
        start: '待报审',
        price: '0.20',
        tax: '0.00',
        time: '2021-08-25~2021-08-26',
        city: '河北省-邢台市',
        establish: '2021-08-25~2021-08-26'
      }, {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        task: 2,
        province: '2',
        orderForm: '报审',
        start: '待报审',
        price: '0.20',
        tax: '0.00',
        time: '2021-08-25~2021-08-26',
        city: '河北省-邢台市',
        establish: '2021-08-25~2021-08-26'
      }, {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        task: 2,
        province: '2',
        orderForm: '报审',
        start: '待报审',
        price: '0.20',
        tax: '0.00',
        time: '2021-08-25~2021-08-26',
        city: '河北省-邢台市',
        establish: '2021-08-25~2021-08-26'
      },
      {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        task: 2,
        province: '2',
        orderForm: '报审',
        start: '待报审',
        price: '0.20',
        tax: '0.00',
        time: '2021-08-25~2021-08-26',
        city: '河北省-邢台市',
        establish: '2021-08-25~2021-08-26'
      },
      {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        task: 2,
        province: '2',
        orderForm: '报审',
        start: '待报审',
        price: '0.20',
        tax: '0.00',
        time: '2021-08-25~2021-08-26',
        city: '河北省-邢台市',
        establish: '2021-08-25~2021-08-26'
      },
      {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        task: 2,
        province: '2',
        orderForm: '报审',
        start: '待报审',
        price: '0.20',
        tax: '0.00',
        time: '2021-08-25~2021-08-26',
        city: '河北省-邢台市',
        establish: '2021-08-25~2021-08-26'
      },
      {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        task: 2,
        province: '2',
        orderForm: '报审',
        start: '待报审',
        price: '0.20',
        tax: '0.00',
        time: '2021-08-25~2021-08-26',
        city: '河北省-邢台市',
        establish: '2021-08-25~2021-08-26'
      }]
    }
  },
  methods: {
    handleClick (row) {
      console.log(row)
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
.tabel-t .has-gutter>tr>th{
  background-color: #eaedf4;
  color: #000;
}
.tabel-t tbody>tr>td{
  border-bottom: 1px solid #EBEEF5;
}
.tabel-t thead>tr>th:last-child{
  background-color:#eaedf4;
}
.tabel-t tbody>tr>td:nth-child(6){
  color:#33c984;
}
.operator{
  color: #000;
}
.tabel-t{
  overflow-x: scroll;
}
/* 清除滚动条样式 */
.tabel-t::-webkit-scrollbar {
  display: none;
  /* width: 0 !important;
  height: 0 !important; */
}
.tabel-t::-webkit-scrollbar-track {
  background: none;
}

.tabel-t::-webkit-scrollbar-thumb {
  background-color: transparent;
}

.tabel-t::-webkit-scrollbar-thumb:hover {
  background-color: transparent;
}
</style>
