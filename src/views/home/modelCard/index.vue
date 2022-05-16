<template>
  <div class="container" :ref="uuidThree"></div>
</template>

<script lang="ts">
  import HomePageModelItem from '@/views/home/common/HomePageModelItem';
  import { ref } from 'vue';
  import { uniqueId } from 'lodash';

  export default {
    name: 'Index',
    setup() {
      const uuidThree = ref(uniqueId('three-'));
      return {
        uuidThree,
      };
    },
    mounted() {
      new HomePageModelItem(this.$refs[this.uuidThree]);
    },
  };
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
  }
</style>
