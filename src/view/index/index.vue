<template>
  <div id="box">
    <div class="title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-s-home"></i>
        </el-breadcrumb-item>
        <el-breadcrumb-item><a href="">活动详情</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="cont">
      <div class="left">
        <div class="m-title">
          <h2>最近项目</h2>
        </div>
        <div class="l-cont">
          <div class="block">
            <el-timeline>
              <el-timeline-item timestamp="2018/4/12" placement="top" color="#6877ed">
                <el-card>
                  <div class="plan-group">
                    <p>项目：<span class="blue">外卖骑手项目</span></p>
                    <p>进度：<span class="purple">待报审</span></p>
                    <p>订单量：<span class="blue">2</span></p>
                    <p>订单额：<span>0.20 元</span></p>
                  </div>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/3" placement="top" color="#6877ed">
                <el-card>
                  <div class="plan-group">
                    <p>项目：<span class="blue">外卖骑手项目</span></p>
                    <p>进度：<span class="purple">待报审</span></p>
                    <p>订单量：<span class="blue">2</span></p>
                    <p>订单额：<span>0.20 元</span></p>
                  </div>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/2" placement="top" color="#3bc8b2">
                <el-card>
                  <div class="plan-group">
                    <p>项目：<span class="blue">外卖骑手项目</span></p>
                    <p>进度：<span class="green">待报审</span></p>
                    <p>订单量：<span class="blue">2</span></p>
                    <p>订单额：<span>0.20 元</span></p>
                  </div>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </div>
      <div class="center">
        <div class="m-title">
          <h2>资金动态</h2>
        </div>
        <div class="c-cont">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="平台结算 -0.02" name="1">
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="平台结算" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="平台结算" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="平台结算" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
      <div class="right">
        <div class="r-top">
          <i class="el-icon-s-order" style="color: #2e54fd;"></i>
          <div class="text-end">
            <p>批量打款</p>
            <p>批量订单快速到账</p>
          </div>
        </div>
        <div class="r-center">
          <i class="el-icon-s-marketing" style="color: #1e7145;"></i>
          <div class="text-end">
            <p>模板下载</p>
            <p style="color: #0bc164;">批量下载Excel模板</p>
          </div>
        </div>
        <div class="r-bottom">
          <div class="m-title">
            <h2>快速链接</h2>
          </div>
          <ul class="list-group">
            <li>项目列表</li>
            <li>订单列表</li>
            <li>异常列表</li>
            <li>发票申请</li>
            <li>交易明细</li>
            <li>专属账户</li>
            <li>企业信息</li>
            <li>账号密码</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '你好',
      reverse: true,
      activities: [{
        content: '活动按期开始',
        timestamp: '2018-04-15'
      }, {
        content: '通过审核',
        timestamp: '2018-04-13'
      }, {
        content: '创建成功',
        timestamp: '2018-04-11'
      }],
      activeNames: ['1']
    }
  },
  methods: {
    handleChange (val) {
      // console.log(val);
    }
  }
}
</script>

<style>
#box{
  width: 100%;
}
.title{
  display: flex;
  align-items: center;
}
.cont{
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.cont>div{
  width: 32.8%;
  height: 620px;
  border-radius: 5px;
}
.cont>.left,.center{
  background: #fff;
}
.m-title{
  border-bottom: 1px solid #e0e0e0;
  padding: 15px 0;
}
.m-title>h2{
  font-size: 18px;
  margin-left: 25px;
}
.l-cont{
  padding: 15px 24px;
}
.plan-group>p{
  margin-bottom: 5px;
}
.plan-group>p>.blue{
  color: #576fe3;
}
.plan-group>p>.purple{
  color: #ba60fd;
}
.plan-group>p>.green{
  color: #6ee1c2;
}
.right{
  display: flex;
  flex-direction: column;
}
.right>.r-top,.r-center{
  height: 120px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.right>.r-top>i,.r-center>i{
  font-size: 80px;
}
.right>.r-bottom{
  flex: 1;
  background-color: #fff;
  border-radius: 5px;
}
.text-end{
/*  display: flex;
  flex-direction: column;
  justify-content: space-between; */
}
.text-end>p:nth-child(1){
  font-weight: bold;
  font-size: 20px;
  text-align: right;
}
.text-end>p:nth-child(2){
  font-size: 14px;
  color: #314ade;
  margin-top: 18px;
  text-align: right;
  font-weight: bold;
}
.list-group{
  padding: 17px;
  box-sizing: border-box;
  height: 300px;
}
.list-group>li{
  float: left;
  padding: 13px 27px;
  background: #f4f5f9;
  border-radius: 5px;
  border: 1px solid #e8e9ed;
  margin-bottom: 16px;
  margin-right: 17px;
}
.list-group>li:nth-child(3n){
  margin-right: 0;
}
.c-cont{
  padding: 15px 26px;
}
</style>
