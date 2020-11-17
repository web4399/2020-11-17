<template>
  <div class="main-go">
    <div class="dian">
      <p>店铺商品列表</p>
    </div>
    <div class="guan">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <span class="dianpu">供应商商品池</span>
      </el-breadcrumb>
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
        <div class="xia">
          <!-- 批量更改 -->
          <div class="xia3" >
            <el-form-item>
              <el-button class="el-icon-edit-outline">批量操作</el-button>
            </el-form-item>
          </div>
        </div>
        <!-- 下部分 -->
        <div class="shang">
        
          <!-- 时间部分 -->
          <div class="shang2">
           
            <el-form-item label="">
              <div>
                <el-button>从</el-button>
                <el-date-picker
                  type="date"
                  placeholder="选择开始日期"
                  v-model="searchForm.date1"
                ></el-date-picker>
                <el-button>至</el-button>
                <el-date-picker
                  type="date"
                  placeholder="选择开始日期"
                  v-model="searchForm.date2"
                ></el-date-picker>
              </div>
            </el-form-item>
          </div>
            <!-- 商品名称部分 -->
          <div class="shang1">
            <el-form-item prop="menuArr">
              <el-cascader
                @change="yu"
                v-model="searchForm.menuArr_one"
                :options="options"
                :props="{ expandTrigger: 'hover' }"
              ></el-cascader>
            </el-form-item>

            <el-form-item prop="goodsName">
              <el-input
                v-model="searchForm.goodsName"
                placeholder="请输入商品名称"
              ></el-input>
            </el-form-item>
          </div>
          <!-- 商品状态部分 -->
          <div class="shang3">
            <el-form-item prop="menuArr">
              <el-button>商品状态</el-button>
              <el-cascader
                v-model="searchForm.menuArr_three"
                :options="options3"
                :props="{ expandTrigger: 'hover' }"
              ></el-cascader>
            </el-form-item>
          </div>
           <!-- 查询按钮 -->
          <div class="xia2">
            <el-form-item style="margin-left: 20px">
              <el-button
                @click="submitForm('searchForm')"
                style="color: #5A9EF7"
                >查询</el-button
              >
              <el-button @click="resetForm('searchForm')" style="color: #5A9EF7"
                >重置</el-button
              >
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>

    <!-- 商品分类 -->
    <div class="main-two" v-if="true" style="overflow-x: hidden">
      <el-table
        style="overflow-x: hidden"
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange"
      
        size="mini"
        fit
        
      >
        <el-table-column type="selection" fixed> </el-table-column>
        <el-table-column type="index" align="center" fixed> </el-table-column>

        <el-table-column prop="bian" label="商品编码" min-width="80">
          <template slot-scope="scope">{{ scope.row.bian }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="商品名称"
          style="font-size: 14px"
          align="center"
          show-overflow-tooltip
          min-width="80px"
        >
        </el-table-column>
        <el-table-column prop="url" label="默认图片" min-width="80" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.url" height="48" />
          </template>
        </el-table-column>
        <el-table-column prop="jiage" label="协议价" min-width="80" align="center">
        </el-table-column>
        <el-table-column prop="jiage" label="零售价" min-width="80" align="center">
        </el-table-column>
        <el-table-column prop="jiage" label="指导价" min-width="80" align="center">
        </el-table-column>
        <el-table-column prop="jiage" label="批发价" align="center" >
        </el-table-column>
        <el-table-column prop="lilv" label="利率" align="center" >
        </el-table-column>
        <el-table-column
          prop="fen"
          label="商品分类"
          align="center"
      
        >
        </el-table-column>
        <el-table-column prop="jian" label="商品单位" align="center" min-width="80">
        </el-table-column>
       
        <el-table-column prop="shang" label="供应商" align="center" min-width="80">
        </el-table-column>
        <el-table-column prop="cha" label="操作" align="center" min-width="180">
          <template>
            <el-button size="mini" @click="cha"  style="color: #5A9EF7">查看</el-button>
            <el-button size="mini" style="color: #5A9EF7">推荐</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页部分 -->
      <div class="block">
        <el-pagination
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="sizes, prev, pager, next"
          :total="1000"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Main",
  data() {
    return {
      searchForm: {
        menuArrOne: [],
        goodsName: "",
        date1: "",
        date2: "",
        menuArrTwo: [],
        menuArrThree: [],
        menuArrFour: [],
        menuArrFive: [],
        priceStar: "",
        priceEnd: "",
      },

      searchFormRules: {
        goodsName: [
          { required: true, message: "请输入商品名称", trigger: "change" },
        ],
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
      options2: [
        {
          value: "putaway",
          label: "上传时间",
        },
        {
          value: "shijian2",
          label: "上传时间2",
        },
      ],
      options3: [
        {
          value: "putaway",
          label: "上架中",
        },
        {
          value: "audit",
          label: "待审核",
        },
        {
          value: "putaway2",
          label: "待上架",
        },
      ],
      input1: "",
      input2: "",
      input3: "",
      tableData: [
        {
          bian: "kdds111111",
          date: "2016-05-02",
          date2: "2016-05-02",
          name: "睡眠（AlSleep） 枕芯 磁石款决明备份 10",
          url: require("../../../../assets/images/001.jpg"),
          jiage: "￥999.99",
          lilv: "14%",
          fen: "个人护理洗浴中心产品经理",
          jian: "件",
          shang: "上海衣食住行有限公司",
          cha: "查看",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          bian: "kdds111111",
          date: "2016-05-02",
          date2: "2016-05-02",
          name: "睡眠（AlSleep） 枕芯 磁石款决明备份 10",
          url: require("../../../../assets/images/001.jpg"),
          jiage: "￥999.99",
          lilv: "14%",
          fen: "个人护理洗浴中心产品经理",
          jian: "件",
          shang: "上海衣食住行有限公司",
          cha: "查看",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          bian: "kdds111111",
          date: "2016-05-02",
          date2: "2016-05-02",
          name: "睡眠（AlSleep） 枕芯 磁石款决明备份 10",
          url: require("../../../../assets/images/001.jpg"),
          jiage: "￥999.99",
          lilv: "14%",
          fen: "个人护理洗浴中心产品经理",
          jian: "件",
          shang: "上海衣食住行有限公司",
          cha: "查看",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          bian: "kdds111111",
          date: "2016-05-02",
          date2: "2016-05-02",
          name: "睡眠（AlSleep） 枕芯 磁石款决明备份 10",
          url: require("../../../../assets/images/001.jpg"),
          jiage: "￥999.99",
          lilv: "14%",
          fen: "个人护理洗浴中心产品经理",
          jian: "件",
          shang: "上海衣食住行有限公司",
          cha: "查看",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          bian: "kdds111111",
          date: "2016-05-02",
          date2: "2016-05-02",
          name: "睡眠（AlSleep） 枕芯 磁石款决明备份 10",
          url: require("../../../../assets/images/001.jpg"),
          jiage: "￥999.99",
          lilv: "14%",
          fen: "个人护理洗浴中心产品经理",
          jian: "件",
          shang: "上海衣食住行有限公司",
          cha: "查看",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          bian: "kdds111111",
          date: "2016-05-02",
          date2: "2016-05-02",
          name: "睡眠（AlSleep） 枕芯 磁石款决明备份 10",
          url: require("../../../../assets/images/001.jpg"),
          jiage: "￥999.99",
          lilv: "14%",
          fen: "个人护理洗浴中心产品经理",
          jian: "件",
          shang: "上海衣食住行有限公司",
          cha: "查看",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          bian: "kdds111111",
          date: "2016-05-02",
          date2: "2016-05-02",
          name: "睡眠（AlSleep） 枕芯 磁石款决明备份 10",
          url: require("../../../../assets/images/001.jpg"),
          jiage: "￥999.99",
          lilv: "14%",
          fen: "个人护理洗浴中心产品经理",
          jian: "件",
          shang: "上海衣食住行有限公司",
          cha: "查看",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          bian: "kdds111111",
          date: "2016-05-02",
          date2: "2016-05-02",
          name: "睡眠（AlSleep） 枕芯 磁石款决明备份 10",
          url: require("../../../../assets/images/001.jpg"),
          jiage: "￥999.99",
          lilv: "14%",
          fen: "个人护理洗浴中心产品经理",
          jian: "件",
          shang: "上海衣食住行有限公司",
          cha: "查看",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          bian: "kdds111111",
          date: "2016-05-02",
          date2: "2016-05-02",
          name: "睡眠（AlSleep） 枕芯 磁石款决明备份 10",
          url: require("../../../../assets/images/001.jpg"),
          jiage: "￥999.99",
          lilv: "14%",
          fen: "个人护理洗浴中心产品经理",
          jian: "件",
          shang: "上海衣食住行有限公司",
          cha: "查看",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          bian: "kdds111111",
          date: "2016-05-02",
          date2: "2016-05-02",
          name: "睡眠（AlSleep） 枕芯 磁石款决明备份 10",
          url: require("../../../../assets/images/001.jpg"),
          jiage: "￥999.99",
          lilv: "14%",
          fen: "个人护理洗浴中心产品经理",
          jian: "件",
          shang: "上海衣食住行有限公司",
          cha: "查看",
          address: "上海市普陀区金沙江路 1518 弄",
        },
       
      ],

    //   pickerOptions: {
    //     shortcuts: [
    //       {
    //         text: "最近一周",
    //         onClick(picker) {
    //           const end = new Date();
    //           const start = new Date();
    //           start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
    //           picker.$emit("pick", [start, end]);
    //         },
    //       },
    //       {
    //         text: "最近一个月",
    //         onClick(picker) {
    //           const end = new Date();
    //           const start = new Date();
    //           start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
    //           picker.$emit("pick", [start, end]);
    //         },
    //       },
    //       {
    //         text: "最近三个月",
    //         onClick(picker) {
    //           const end = new Date();
    //           const start = new Date();
    //           start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
    //           picker.$emit("pick", [start, end]);
    //         },
    //       },
    //     ],
    //   },
      value1: "liebiao",
      value2: "liebiao",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    cascaderChange(val) {
      console.log(val);
    },

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
    //查询商品时跳转
    cha() {
      this.$router.push("/main/examine");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //多选框事件
    handleSelectionChange(val) {
      console.log(val);
    },
    yu() {
      console.log(111111);
    },
  },
};
</script>
<style lang="less" scoped>
.el-pagination {
  float: right;
}
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
    margin-left: 5px;
    display: flex;
    flex-wrap: wrap;
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
        // .el-input {
        //   width: 130px;
        // }
      }
      .shang2 {
        display: flex;
        margin-right: 20px;
        .el-cascader {
          width: 120px;
        }
        .el-date-editor.el-input {
          width: 150px;
        }
      }
      .shang3 {
        display: flex;
        .el-cascader {
          width: 120px;
        }
      }
    }
    //下部分
    .xia {
      .xia3 {
        margin-left:1070px;
      }
    }
  }
  //主体
  .main-two{
    width: 1200px;
    margin-left: 20px;
    margin-top: 10px;
  }
}

</style>


