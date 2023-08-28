<template>
  <div id="demoList">
    <div class="title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-s-claim head-icon"></i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>项目任务</el-breadcrumb-item>
        <el-breadcrumb-item>订单派单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div id="cont-list">
      <div class="title-group">
        <div class="t-g-left">
           <el-button round class="t-btn">全部订单</el-button>
           <el-button round class="t-btn">订单派单</el-button>
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
          class="tabel-t"
          stripe="false"
          :default-sort = "{prop: 'date', order: 'descending'}"
          :row-class-name="tableRowClassName"
          style="width: 1313px">
          <el-table-column
            prop="id"
            label="订单/任务编号"
            width="220">
          </el-table-column>
          <el-table-column
            prop="name"
            label="项目名称"
            width="200">
          </el-table-column>
          <el-table-column
            prop="price"
            label="任务金额"
            sortable
            width="100">
          </el-table-column>
          <el-table-column
            prop="person"
            label="接单人"
            sortable
            class="color-b"
            width="90">
          </el-table-column>
          <el-table-column
            prop="identity"
            label="银行卡号"
            width="170">
          </el-table-column>
          <el-table-column
            prop="start"
            label="银行名称"
            width="126">
          </el-table-column>
          <el-table-column
            prop="time"
            label="状态"
            sortable
            width="133">
          </el-table-column>
          <el-table-column
            prop="rate"
            label="费率"
            width="76">
          </el-table-column>
          <el-table-column
            prop="zhRate"
            label="综合税费"
            width="80">
          </el-table-column>
          <el-table-column
            label="操作"
            label-class-name="operator"
            width="auto">
            <template slot-scope="scope">
              <el-button type="text" size="small" class="l-bank">详情</el-button>
              <el-button type="text" size="small" class="bank">银行回单</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dispatch',
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
        identity: '623061010010909533',
        start: '杭州银行',
        time: '打款成功',
        rate: '5.00%',
        zhRate: '0.00',
        bankStart: true
      }, {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        price: '0.20',
        person: '张晓宇',
        identity: '623061010010909533',
        start: '支付宝',
        time: '打款成功',
        rate: '',
        zhRate: '0.00'
      }, {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        price: '0.20',
        person: '张晓宇',
        identity: '623061010010909533',
        start: '招商银行',
        time: '打款成功',
        rate: '',
        zhRate: '0.00'
      }, {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        price: '0.20',
        person: '张晓宇',
        identity: '623061010010909533',
        start: '杭州银行',
        time: '打款成功',
        rate: '',
        zhRate: '0.00'
      },
      {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        price: '0.20',
        person: '张晓宇',
        identity: '623061010010909533',
        start: '杭州银行',
        time: '打款成功',
        rate: '',
        zhRate: '0.00'
      },
      {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        price: '0.20',
        person: '张晓宇',
        identity: '623061010010909533',
        start: '杭州银行',
        time: '已接单',
        rate: '',
        zhRate: '0.00'
      },
      {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        price: '0.20',
        person: '张晓宇',
        identity: '623061010010909533',
        start: '杭州银行',
        time: '已接单',
        rate: '',
        zhRate: '0.00'
      },
      {
        id: 'P202108250304196531',
        name: '外卖骑手项目',
        price: '0.20',
        person: '张晓宇',
        identity: '623061010010909533',
        start: '杭州银行',
        time: '已接单',
        rate: '',
        zhRate: '0.00'
      }]
    }
  },
  methods: {
    handleClick (row) {
      console.log(row)
    },
    tableRowClassName ({ row, rowIndex }) {
      // let str = ''
      // const evenIndexes = this.tableData.map((item, index) => {
      //   if (item.time == '已作废') {
      //     return index;
      //   }
      // }).filter(index => index !== undefined);
      // console.log(evenIndexes);
      if (rowIndex === 1 || rowIndex === 2 || rowIndex === 0 || rowIndex === 3 || rowIndex === 4) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
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
.l-bank{
  float: left;
  color: #2d4196;
  font-weight: bold;
}
.bank{
  float: left;
  color: #22a7d3 !important;
  border-left: 2px solid #ccc !important;
  padding: 0 !important;
  padding-left: 8px !important;
  height: 20px !important;
  font-weight: bold !important;
  display: none !important;
  margin-top: 6px;
}
.tabel-t tbody>tr>td:last-child .cell button:last-child{
  /* visibility: visible !important; */
  /* overflow: inherit !important; */
}
.el-table .warning-row td:last-child .cell button:last-child{
  display: block !important;
}
.el-table .warning-row td:nth-child(7)>.cell{
  color: #33c984 !important;
}
.el-table .success-row {
  background: #f0f9eb;
}
</style>
