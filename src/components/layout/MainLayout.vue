<template>
  <el-container>
    <el-header class="el-header">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        default-active="/home/main"
      >
        <menu-item />
      </el-menu>
    </el-header>
    <el-main class="el-main">
      <router-view key="/main/home" v-slot="{ Component }">
        <transition name="router-fade" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </el-main>
  </el-container>
</template>

<script>
  import { MenuItem } from '@/components/layout/index';

  export default {
    name: 'MainLayout',
    components: {
      MenuItem,
    },
  };
</script>

<style scoped>
  .el-header {
    padding: 0;
  }
</style>
