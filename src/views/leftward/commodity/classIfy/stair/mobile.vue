<template>
  <div class="stair">
    <el-table :data="tableData" min-width="1000" >
      <el-table-column type="selection" width="42" align="center"> </el-table-column>
      <el-table-column
        prop="name"
        label="二级分类"
        width="180"
        align="left"
      ></el-table-column>
      <el-table-column prop="url" label="分类图片" min-width="380" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.url" min-width="480" height="50"/>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="分类排序"
        min-width="100"
        align="center"
      ></el-table-column>
        <el-table-column prop="cha" label="操作" min-width="450" align="center">
         
            <el-button size="mini"  style="color: #5A9EF7">编辑</el-button>
            <el-button size="mini" @click="second"  style="color: #5A9EF7">添加下级分类</el-button>
            <el-button size="mini"  style="color: #5A9EF7">删除</el-button>
          
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          
          name: "手机通讯>",
          address: "01 01",
          url: require("../../../../../assets/images/001.jpg"),
            cha: "查看",
        },
        {
          
          name: "手机配件>",
          address: "01 02",
          url: require("../../../../../assets/images/001.jpg")
        },
        {
          
          name: "电脑整机>",
          address: "01 02",
          url: require("../../../../../assets/images/001.jpg")
        },
         {
          
          name: "电脑配件>",
          address: "01 02",
          url: require("../../../../../assets/images/001.jpg")
        },
         {
          
          name: "办公设备>",
          address: "01 02",
          url: require("../../../../../assets/images/001.jpg")
        },
         {
          
          name: "文具耗材>",
          address: "01 02",
          url: require("../../../../../assets/images/001.jpg")
        },
      
      ],
    };
  },
    methods: {
      second(val){
          console.log(val);
         this.$router.push("/Classify/three");
      }
  },
};
</script>
<style lang="less" scoped>
   @media all and (min-width: 1440px) and (max-width: 1700px){
   .stair{
    margin-left: 40px;margin-top: 20px;
    width: 1180px;
  }
}
</style>