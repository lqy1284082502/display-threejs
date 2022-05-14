<template>
  <div class="container mx-auto mt-10">
    <div class="grid gap-3 grid-cols-3">
      <div class="bg-amber-300 rounded-md min-h-200" v-for="item of list" :key="item">{{
        item
      }}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { ElButton } from 'element-plus';
  export default {
    name: 'HomePage',
    components: { ElButton },
    data() {
      return {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      };
    },
  };
</script>

<style scoped></style>
