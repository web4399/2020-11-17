<template>
  <div>
    <div class="dian">
      <p>商品库存</p>
    </div>
    <div class="guan">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <span class="dianpu">商品库存</span>
      </el-breadcrumb>
    </div>
    <div>

    </div>
     <!-- 二级 -->
    <div class="main-three" v-if="true">
      <el-form
        ref="searchForm"
        :rules="searchFormRules"
        :model="searchForm"
        label-width="0"
      >
      
        <!-- 上部分 -->
        <div class="shang">
        
            <!-- 商品名称部分 -->
          <div class="shang1">
            <el-form-item >
              <el-cascader
                @change="yu"
                v-model="searchForm.menuArr_one"
                :options="options"
           
              ></el-cascader>
            </el-form-item>

            <el-form-item prop="goodsName"  :model="searchForm">
              <el-input
                v-model="searchForm.goodsName"
                placeholder="请输入商品名称"
              ></el-input>
            </el-form-item>
          </div>
          <!-- 商品状态部分 -->
            <div class="shang3">
            <el-form-item >
             <el-button>店铺名称</el-button>
            </el-form-item>

            <el-form-item prop="isName">
              <el-input
                v-model="searchForm.isName"
                placeholder="请输入店铺名称"
              ></el-input>
            </el-form-item>
          </div>
           <!-- 查询按钮 -->
          <div class="xia2">
            <el-form-item style="margin-left: 20px">
              <el-button
                @click="submitForm('searchForm','isShop')"
                style="color: #5A9EF7"
                >查询</el-button
              >
              <el-button @click="resetForm('searchForm','isShop')" style="color: #5A9EF7"
                >重置</el-button
              >
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>

  </div>
</template>
<script>
export default {
    data() {
    return {
      searchForm: {
        menuArrOne: [],
        goodsName: "",
        isName:"",
        menuArrThree: [],
      },

      searchFormRules: {
        goodsName: [
          { required: true, message: "请输入商品名称", trigger: "change" },
        ],
        isName:[
            {required: true, message: "请输入店铺名称", trigger: "change"  }
        ]
      },

     
      value: [],
      options: [
        {
          value: "liebiao",
          label: "商品名称",
        },
        {
          value: "fenlei",
          label: "商品类型",
        },
      ],
   
    
   

      value1: "liebiao",
      value2: "liebiao",
    };
  },
  methods: {

    //提交判断
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    yu() {
      console.log(111111);
    },
  },
}
</script>
<style lang="less" scoped>
@media all and (min-width: 700px) and (max-width: 1450px) {
  //顶部板块
  .dian {
    margin-top: 24px;
    margin-left: 40px;

    p {
      font-size: 24px;
    }
  }
  // 面包屑
  .guan {
    margin-top: 6px;
    margin-left: 40px;
  }
  // 按钮板块
  .main-three {
    width:1200px;
    margin-left: 28px;
    margin-top: 20px;
    display: flex;
    
    // 上部分
    .shang {
      display: flex;
      flex-wrap: wrap;
      margin-left: 14px;

      .shang1 {
        display: flex;
        margin-right: 20px;
        .el-cascader {
          width: 120px;
        }
      
      }
      .shang3 {
        display: flex;
        .el-cascader {
          width: 120px;
        }
         
      }
    }

  }
  //主体
}
</style>