<template>
   <div class="stair">
    <el-table :data="tableData" min-width="1000" >
      <el-table-column type="selection" width="42" align="center"> </el-table-column>
      <el-table-column
        prop="name"
        label="三级分类"
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
          
          name: "手机>",
          address: "01 01",
          url: require("../../../../../assets/images/001.jpg"),
            cha: "查看",
        },
        {
          
          name: "游戏手机>",
          address: "01 02",
          url: require("../../../../../assets/images/001.jpg")
        }, {
          
          name: "5G手机>",
          address: "01 02",
          url: require("../../../../../assets/images/001.jpg")
        },
         {
          
          name: "全面屏手机>",
          address: "01 02",
          url: require("../../../../../assets/images/001.jpg")
        },
         {
          
          name: "老人机>",
          address: "01 02",
          url: require("../../../../../assets/images/001.jpg")
        },
         {
          
          name: "拍照手机>",
          address: "01 02",
          url: require("../../../../../assets/images/001.jpg")
        },
      
      ],
    };
  },
  methods: {
     
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