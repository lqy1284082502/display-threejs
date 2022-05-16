<template>
  <div class="container mx-auto">
    <el-row :gutter="20">
      <el-col v-for="item of list" :key="item" :xs="layout.xs" :sm="layout.sm" :md="layout.md">
        <model-card class="model-card" />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
  import ModelCard from '@/views/home/modelCard/index.vue';
  export default {
    name: 'IndexCom',
    components: {
      ModelCard,
    },
    data() {
      return {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        layout: {
          xs: 24,
          sm: 12,
          md: 8,
        },
      };
    },
  };
</script>

<style scoped>
  .model-card {
    height: 25vh;
  }
  .el-row .el-col {
    margin-bottom: 20px;
  }
</style>
