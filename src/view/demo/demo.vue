<template>
  <div id="box">
    <div class="title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-s-claim head-icon"></i>
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
          <p>02</p>
          <div>
            <p>项目信息</p>
            <p>项目名称、类型、预算等</p>
          </div>
        </div>
        <i class="el-icon-more"></i>
        <div class="o-one">
          <p>03</p>
          <div>
            <p>项目信息</p>
            <p>项目名称、类型、预算等</p>
          </div>
        </div>
      </div>
      <div class="from-cont">
        <div class="b-one" v-show="plan==1">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="任务类型" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择任务类型">
                <el-option label="快递服务" value="kuaidi"></el-option>
                <el-option label="餐饮服务" value="canyin"></el-option>
                <el-option label="物流服务" value="wuliu"></el-option>
                <el-option label="互联网科技" value="hulianwang"></el-option>
                <el-option label="管理咨询" value="guanli"></el-option>
                <el-option label="餐饮服务" value="canyin"></el-option>
                <el-option label="贸易服务" value="maoyi"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="省份" prop="province">
              <template>
                <el-select v-model="ruleForm.province" placeholder="请选择省份">
                  <el-option
                    v-for="item in cities"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    <span style="float: left">{{ item.label }}</span>
                    <!-- <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span> -->
                  </el-option>
                </el-select>
              </template>
            </el-form-item>
            <el-form-item label="城市" prop="city">
              <el-select v-model="ruleForm.city" placeholder="请选择城市">
                <el-option label="南阳" value="nanyang"></el-option>
                <el-option label="保定" value="baoding"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="项目时间" required prop="time">
              <div class="block">
                <el-date-picker
                  v-model="ruleForm.time"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </div>
            </el-form-item>
            <el-form-item label="项目名称" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入项目名称"></el-input>
            </el-form-item>
            <el-form-item label="任务描述" prop="describe">
              <el-input type="textarea" v-model="ruleForm.describe" class="textArea"></el-input>
            </el-form-item>
            <el-form-item label="详细地址" prop="site">
              <el-input v-model="ruleForm.site"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')" class="nextBtn">下一步->人员导入</el-button>
              <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
            </el-form-item>
          </el-form>
        </div>
        <div class="b-two" v-show="plan==2">
          <div style="margin: 20px;"></div>
          <el-form :label-position="right" label-width="80px">
            <el-form-item label="项目名称">
              <p class="rider-name">外卖骑手项目</p>
            </el-form-item>
            <el-form-item label="人员模板">
              <p class="file-p"><i class="el-icon-document"></i>下载模板</p>
            </el-form-item>
            <el-form-item label="上传数据">
              <div class="uploading-box">
                <img src="../../img/money.png" alt="">
                <div class="u-text">
                  <p>点击上传，或将填好数据的Exc文件拖拽到虚线框内</p>
                  <p>仅支持上传xls .xlsx扩展名的Exce文件</p>
                  <p>文件中不可有外部引用的数据，不能含有公式</p>
                  <p>上传数据前请再次核对是否存在人员信息重复，溢免造成资金损失！</p>
                </div>
              </div>
            </el-form-item>
          </el-form>
          <button class="information">&lt;项目信息</button>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      msg: '你好',
      ruleForm: {
        region: '',
        province: '',
        city: '',
        time: '',
        name: '',
        describe: '',
        site: '',
        
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        region: [
          { required: true, message: '请选择任务类型', trigger: 'change' }
        ],
        province: [
          { required: true, message: '请选择省份', trigger: 'change' }
        ],
        city: [
          { required: true, message: '请选择城市', trigger: 'change' }
        ],
        time: [
          { required: true, message: '请选择时间', trigger: 'change' }
        ],
        name: [
          { required: true, message: '请输入项目名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        describe: [
          { required: true, message: '请输入任务描述', trigger: 'change' }
        ],
        site: [
          { required: true, message: '请输入详细地址', trigger: 'change' }
        ]
      },
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      cities: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Nanjing',
        label: '南京'
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }],
      value: '',
      plan: 1,
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  }
}
</script>

<style>
.order{
  /* height: 300px; */
  background: #fff;
  margin-top: 15px;
  border-radius: 5px;
  padding: 15px;
  box-sizing: border-box;
  padding-bottom: 80px;
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
.from-cont{
  width: 490px;
  margin-top: 16px;
}
.textArea>textarea{
  height: 117px;
}
.nextBtn{
  width: 156px;
  height: 30px;
  background-color: #6276e6;
  color: #fff;
  padding: 0;
  border-radius: 20px;
  line-height: 30px;
}
.rider-name{
  font-size: 16px;
  font-weight: bold;
  color: #24c56a;
}
.file-p{
  width: 130px;
  height: 28px;
  border: 1px solid #62d2c1;
  border-radius: 15px;
  line-height: 28px;
  text-align: center;
  color: #007f0a;
  font-size: 14px;
  box-shadow: 1px 1px 5px;
}
.uploading-box{
  width: 590px;
  height: 200px;
  border: 2px dashed #6275e6;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 38px;
}
.uploading-box>img{
  margin-top: 30px;
}
.uploading-box>.u-text{
  height: 100px;
  margin-top: -20px;
}
.u-text>p{
  height: 30px;
  margin-left: 20px;
  line-height: 30px;
}
.u-text>p:nth-child(4){
  color: red;
}
.information{
  width: 110px;
  height: 28px;
  border: 1px solid #8999ec;
  border-radius: 15px;
  background: #fff;
  margin: 15px 80px 0;
  color: #8999ec;
}

</style>
