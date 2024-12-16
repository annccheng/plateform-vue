<script setup>
import Layout from '@/components/Layout.vue';

</script>


<template>
  <layout></layout>
  <form class="flex flex-col items-center justify-center mt-[200px] w-[420px] mx-auto">
    <div class="flex mb-4 items-center">
      <label class="w-[150px] block text-left mr-2" for="username">明子</label>
      <input type="text" id="username"
        class="px-2 py-1 w-56 rounded border border-solid border-primaryGray focus:outline-0"
        placeholder="請輸入明子" />
    </div>
    <div class="flex mb-4 items-center">
      <label class="w-[150px] block text-left mr-2" for="password">密碼</label>
      <input type="password" id="password"
        class="px-2 py-1 w-56 rounded border border-solid border-primaryGray focus:outline-0"
        placeholder="密碼" />
    </div>
    <button
      class="px-5 py-1 bg-themeColor rounded-sm text-white disabled:bg-bgGray disabled:text-textGray cursor-pointer"
      type="submit">登入</button>
  </form>
</template>


<style scoped>


</style>