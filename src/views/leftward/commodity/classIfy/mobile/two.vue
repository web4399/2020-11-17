<template>
  <div>
    <el-table :data="tableData" style="width: 100%" >
      <el-table-column type="selection" width="42" align="center"> </el-table-column>
      <el-table-column
        prop="name"
        label="二级分类"
        width="180"
        align="left"
      ></el-table-column>
      <el-table-column prop="url" label="分类图片" width="480" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.url" min-width="480" height="50" />
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="分类排序"
        width="180"
        align="center"
      ></el-table-column>
        <el-table-column prop="cha" label="操作" width="700" align="center">
         
            <el-button size="mini">编辑</el-button>
            <el-button size="mini" @click="second">添加下级分类</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          
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
      
      ],
    };
  },
    methods: {
      second(val){
          console.log(val);
         this.$router.push("/fen/three");
      }
  },
};
</script>