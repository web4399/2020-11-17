<template>
  <div>
    <div style="display:flex;">
      <div >
        <div class="dian">
          <span>店铺商品列表</span>
         
        </div>
        <div class="guan">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <span class="dianpu">供应商商品列表</span>
          </el-breadcrumb>
        </div>
      </div>

      <div style="margin-left: 640px;margin-top: 24px;">
        <el-button class="el-icon-edit-outline">批量操作</el-button>
      </div>
    </div>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>
<style lang="less" scoped>
//顶部板块
.dian {
  margin-top: 24px;
  margin-left: 40px;

  span{
    font-size: 24px;
  }
}
// 面包屑
.guan {
  margin-top: 6px;
  margin-left: 40px;
  padding-right: 40px;
}
</style>