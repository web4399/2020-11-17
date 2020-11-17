<template>
  <div class="main-go">
    <!-- 店铺列表 -->
    <div class="examine-dian"  v-if="true" >
      <div class="examine-one" >
        <div style="width: 400px">
          <div>
            <span  style="font-size: 24px">店铺商品列表</span>
          </div>
          <div style="margin-top: 7px; height: 30px" >
            <el-breadcrumb
              separator-class="el-icon-arrow-right"
              style="font-size: 16px"
            >
              <el-breadcrumb-item>商品管理</el-breadcrumb-item>
              <el-breadcrumb-item>店铺商品列表</el-breadcrumb-item>
              <span class="dianpu">商品详情</span>
            </el-breadcrumb>
          </div>
        </div>
        <div >
          <el-button style="margin-right: 40px" @click="go">返回</el-button>
        </div>
      </div>
    </div>
    <!-- 基础信息 -->
    <div class="examine-two"  >
      <div style="margin-left:32px" >
        <span style="font-size:24px">基础信息</span>
        <!-- <p style="font-size: 24px">基础信息</p> -->
      </div>
      <!-- 商品名称 -->
      <div style="display: flex;margin-left:50px;" >
        <div>
          <div>
            <span style="font-size: 18px">商品名称：</span
            ><span style="font-size: 14px"
              >睡眠（AlSleep）枕芯 磁款决明子荞</span
            >
          </div>
          <div>
            <span style="font-size: 18px">商品编码：</span
            ><span style="font-size: 14px">YDFA4315</span>
          </div>
          <div>
            <span style="font-size: 18px">商品品牌：</span
            ><span style="font-size: 14px">商家自营</span>
          </div>
          <div style="display: flex">
            <span style="font-size: 18px">商品简介：</span>
            <p style="width: 386px">
              睡眠（AlSleep）枕芯 磁款决明子荞麦枕芯 给您舒适的睡眠体验。
            </p>
          </div>
        </div>
        <!-- 关键词 -->
        <div style="margin-left: 203px">
          <div>
            <span style="font-size: 18px">关键词：</span
            ><el-tag color="#ffffff">标签一</el-tag>
            <el-tag color="#ffffff">标签二</el-tag>
            <el-tag color="#ffffff">标签三</el-tag>
          </div>
          <div style="display: flex; align-items: center">
            <span style="font-size: 18px">*商品分类：</span>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div>
            <p style="font-size: 18px">*商品相册：</p>
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </div>
        </div>
      </div>
    </div>
    <!-- 规格状态 -->
    <div class="examine-three">
      <div class="three1">
        <span style="font-size: 24px">规格状态</span>
      </div>
      <div class="three2"><span>*商品状态：</span><span>已上线</span></div>
      <div class="three3">
        <p>商品价格：</p>

        <el-table
          height="99"
          border
          :data="tableData"
          style="margin-left: 100px"
          :flt="false"
        >
          <el-table-column prop="name" label="市场价">
          </el-table-column>
          <el-table-column prop="address" label="销售价" >
          </el-table-column>
        </el-table>
      </div>
      <div class="three4">
        <p>商品规格：</p>
        <el-table
          border
          :data="tableData2"
          style="margin-left:100px; width: 1000px"
          :flt="true"
        >
          <el-table-column prop="guige" label="规格">
          </el-table-column>

          <el-table-column prop="url" label="默认图片" >
            <template slot-scope="scope">
              <img :src="scope.row.url" min-width="70" height="70" />
            </template>
          </el-table-column>
          <el-table-column prop="huohao" label="商品SKU货号" >
          </el-table-column>
          <el-table-column prop="xiaoshou" label="销售价" >
          </el-table-column>
          <el-table-column prop="shichang" label="市场价">
          </el-table-column>
          <el-table-column prop="zhong" label="重量(g)" >
          </el-table-column>
          <el-table-column prop="dan" label="单位" >
          </el-table-column>
          <el-table-column prop="zhuangtai" label="状态" >
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 图文详情 -->
    <div class="examine-four" >
      <!-- 图文详情 -->
        <span>图文详情</span>
        <div style="margin-left: 25px">
          <img
            src="../../../../assets/images/001.jpg"
            alt=""
            style="width: 504px; height: 734px"
          />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Main",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      tableData: [
        {
          name: "￥192",
          address: "￥299",
        },
      ],
      url: "../../../../assets/images/001.jpg",
      tableData2: [
        {
          guige: "红色",
          url: require("../../../../assets/images/001.jpg"),
          huohao: "Yl928379-01",
          xiaoshou: "198.00",
          shichang: "299.00",
          zhong: "100",
          dan: "个",
          zhuangtai: "已上架",
        },
        {
          guige: "红色",
          url: require("../../../../assets/images/001.jpg"),
          huohao: "Yl928379-01",
          xiaoshou: "198.00",
          shichang: "299.00",
          zhong: "100",
          dan: "个",
          zhuangtai: "已上架",
        },
        {
          guige: "红色",
          url: require("../../../../assets/images/001.jpg"),
          huohao: "Yl928379-01",
          xiaoshou: "198.00",
          shichang: "299.00",
          zhong: "100",
          dan: "个",
          zhuangtai: "已上架",
        },
      ],
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    go() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
@media all and (min-width: 1440px) and (max-width: 1700px) {
  .examine-dian{
    background: #ffffff;width:1252px;
  }
  //店铺列表
  .examine-one {
    display: flex;
    justify-content: space-between;
    margin-left: 40px;
    padding-top: 24px;
    width:1200px;
  }
  //基础信息
.examine-two {
  background: #ffffff;
   width:1200px;
  margin-top: 24px;
  margin-left: 40px;
 
}
//规格状态
.examine-three {
  background: #ffffff;
  width:1200px;
  margin-left: 40px;
  margin-top: 24px;
 
  .three1 {
    margin-left: 33px;
    padding-top: 16px;
  }
  .three2 {
    margin-left: 33px;
    margin-top: 30px;
  }
  .three3 {
    width: 162px;
    margin-left: 33px;
    margin-top: 20px;
  }
  .three4 {
    margin-left: 33px;
    margin-top: 90px;
    padding-bottom: 40px;
  }
}
//图文详情
.examine-four {
  width:1200px;
  display: flex;
  margin-top: 40px;
  margin-left: 40px;
}

}




</style>


