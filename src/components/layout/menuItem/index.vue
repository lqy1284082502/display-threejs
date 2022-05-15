<template>
  <el-menu-item index="/home/main">主页</el-menu-item>
  <el-sub-menu index="2">
    <template #title>分类</template>
    <el-menu-item index="2-1">模型类</el-menu-item>
    <el-menu-item index="2-2">HDR分类</el-menu-item>
  </el-sub-menu>
  <el-sub-menu index="3">
    <template #title>设置</template>
    <el-menu-item index="3-1">路由配置</el-menu-item>
  </el-sub-menu>
</template>

<script>
  export default {
    name: 'Index',
  };
</script>

<style scoped></style>
