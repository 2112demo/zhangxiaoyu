<template>
  <div id="demoList">
    <div class="title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-s-claim head-icon"></i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>项目任务</el-breadcrumb-item>
        <el-breadcrumb-item>任务派单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div id="cont-list">
      <div class="title-group">
        <div class="t-g-left">
           <el-button round class="t-btn">全部任务</el-button>
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
            label="订单/任务编号"
            width="220">
          </el-table-column>
          <el-table-column
            prop="name"
            label="项目名称"
            width="350">
          </el-table-column>
          <el-table-column
            prop="price"
            label="任务金额"
            width="95">
          </el-table-column>
          <el-table-column
            prop="person"
            label="接单人"
            class="color-b"
            width="75">
          </el-table-column>
          <el-table-column
            prop="identity"
            label="身份证号"
            width="185">
          </el-table-column>
          <el-table-column
            prop="start"
            label="接单状态"
            width="95">
          </el-table-column>
          <el-table-column
            prop="time"
            label="创建时间"
            width="180">
          </el-table-column>
          <el-table-column
            label="操作"
            width="auto">
            <template slot-scope="scope">
              <el-button type="text" size="small" style="color: #2d4196;font-weight: bold;">订单详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orders',
  data () {
    return {
      msg: '你好',
      search: '',
      start: '',
      value1: '',
      tableData: [{
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        price: '0.20',
        person: '张晓宇',
        identity: '411322200402212451',
        start: '已接单',
        time: '2021-08-25~2021-08-26'
      }, {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        price: '0.20',
        person: '邓迎硕',
        identity: '411322200402212451',
        start: '已接单',
        time: '2021-08-25~2021-08-26'
      }, {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        price: '0.20',
        person: '阮桑',
        identity: '411322200402212451',
        start: '已接单',
        time: '2021-08-25~2021-08-26'
      }, {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        price: '0.20',
        person: '张晓宇',
        identity: '411322200402212451',
        start: '已接单',
        time: '2021-08-25~2021-08-26'
      },
      {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        price: '0.20',
        person: '张晓宇',
        identity: '411322200402212451',
        start: '已接单',
        time: '2021-08-25~2021-08-26'
      },
      {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        price: '0.20',
        person: '张晓宇',
        identity: '411322200402212451',
        start: '已接单',
        time: '2021-08-25~2021-08-26'
      },
      {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        price: '0.20',
        person: '张晓宇',
        identity: '411322200402212451',
        start: '已接单',
        time: '2021-08-25~2021-08-26'
      },
      {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        price: '0.20',
        person: '张晓宇',
        identity: '411322200402212451',
        start: '已接单',
        time: '2021-08-25~2021-08-26'
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
  padding-bottom: 30px;
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
.tabel-t tbody>tr>td:nth-child(4),.tabel-t tbody>tr>td:nth-child(2){
  color: #2d4196;
  text-decoration: underline;
}
</style>
