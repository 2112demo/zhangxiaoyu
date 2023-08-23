<template>
  <div id="box">
    <div class="title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-s-claim"></i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>项目任务</el-breadcrumb-item>
        <el-breadcrumb-item>批量新建订单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="order">
      <div class="o-flow">
        <div class="o-one o-active">
          <p>01</p>
          <div>
            <p>项目信息</p>            
            <p>项目名称、类型、预算等</p>
          </div>
        </div>
        <i class="el-icon-more"></i>
        <div class="o-one">
          <p>01</p>
          <div>
            <p>项目信息</p>            
            <p>项目名称、类型、预算等</p>
          </div>
        </div>
        <i class="el-icon-more"></i>
        <div class="o-one">
          <p>01</p>
          <div>
            <p>项目信息</p>            
            <p>项目名称、类型、预算等</p>
          </div>
        </div>
      </div>
      <!-- <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form> -->
      <form action="">
        <div>
          <p>任务类型</p>
          <input type="text">
        </div>
      </form>
    </div>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      msg: '你好'
    }
  }
}
</script>

<style>
.order{
  height: 300px;
  background: #fff;
  margin-top: 15px;
  border-radius: 5px;
  padding: 15px;
  box-sizing: border-box;
}
.o-flow{
  padding: 10px 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 40px;
}
.o-flow>i{
  font-size: 40px;
  font-weight: bold;
  color: #989898;
}
.o-one{
  width: 220px;
  display: flex;
  color: #989898;
}
.o-active{
  color: #cf121a;
}
.o-one>p{
  font-size: 50px;
  font-weight: bold;
}
.o-one>div>p:nth-child(1){
  font-weight: bold;
  font-size: 18px;
  margin-top: 9px;
}
.o-one>div>p:nth-child(2){
  font-size: 12px;
}
</style>
