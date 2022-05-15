<template>
  <div class="container mx-auto">
    <div class="grid gap-4 grid-cols-3">
      <div :ref="'three' + item" v-for="item of list" :key="item" />
      <div ref="three"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import BasicScenario from '@/threeBase/baseCommon/BasicScenario';
  export default {
    name: 'IndexCom',
    data() {
      return {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      };
    },
    mounted() {
      this.list.forEach((item: number) => {
        new BasicScenario(this.$refs['three' + item][0]);
      });
    },
  };
</script>

<style scoped>
  .grid div {
    height: 25vh;
    border-radius: 10px;
    overflow: hidden;
  }
</style>
