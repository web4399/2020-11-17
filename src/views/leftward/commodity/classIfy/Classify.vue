<template>
  <div style="position: relative">
    <div style="display: flex; justify-content: space-between">
      <div>
        <div class="dian">
          <p>店铺商品列表</p>
        </div>
        <div class="guan">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <span class="dianpu">供应商商品列表</span>
          </el-breadcrumb>
        </div>
      </div>

      <div style="margin-right: 40px; margin-top: 50px">
        <el-button @click="Show"> 新增分类 </el-button>
        <el-button> 删除 </el-button>
      </div>
    </div>

    <!-- 添加分类 -->
    <div v-if="isshow" class="tian" >
      <el-form>
        <!-- 页头 -->
      <div
        style="text-align: center; border-bottom: 1px solid gray; height: 40px"
      >
        <span>新增分类</span>
      </div>
      <!-- 主体 -->
      <div style="margin-left:10px;margin-top:20px">
        <!-- 名称 -->
        <div style="margin-top:10px"><span>分类名称:</span> <input  type="text" /></div>
        <!-- 图片 -->
        <div  style="margin-top:10px">
          <span>分类图片:</span>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <!-- 排序 -->
        <div  style="margin-top:10px"><span>分类名称:</span> <input type="text" /></div>
        <!-- 谁可见 -->
        <div  style="margin-top:10px">
          <span>前端是否可见:</span>
          <el-radio v-model="radio" label="1" style="margin-left:10px;">可见</el-radio>
          <el-radio v-model="radio" label="2">不可见</el-radio>
        </div >
        <!-- 确定选项 -->
        <div  style="margin-top:10px">
          <el-button size="mini"  style="color: #5A9EF7" @click="succeed">确定</el-button>
          <el-button size="mini"  style="color: #5A9EF7">取消</el-button>
        </div>
      </div>
      </el-form>
      
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Classify",
  data() {
    return {
      radio: "1",
      isshow: false,
      imageUrl: "",
    };
  },
  methods: {
    //显示新建分类
    Show() {
      this.isshow = !this.isshow;
    },
    //上传图片
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    succeed(){
      
      this.isshow=false;
    }
  },
};
</script>
<style lang="less" scoped>
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
  padding-right: 40px;
}
.tian {
  z-index: 4;
  width: 300px;
  height: 440px;
  background: #ffffff;
  position: absolute;
  left: 400px;
  border-radius: 5px;
  box-shadow: 0 0  5px #888888;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #ffffff;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  background-image: url('../../../../assets/images/002.jpg');
  
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>