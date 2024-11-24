<script setup>
</script>

<template>
  <form class="flex flex-col items-center my-[300px] w-[400px] mx-auto">
    <div class="flex mb-4">
      <label class="w-[100px] block text-left mr-2" for="username">使用者名稱</label>
      <input type="text" id="username" class="px-2 py-1 w-56 rounded bg-gray-100 focus:outline-0" />
    </div>
    <div class="flex mb-4">
      <label class="w-[100px] block text-left mr-2" for="password">密碼</label>
      <input type="password" id="password" class="px-2 py-1 w-56 rounded bg-gray-100 focus:outline-0" />
    </div>
    <button class="px-5 py-1 bg-themeColor rounded-sm disabled:bg-gray-200 disabled:text-gray-300 cursor-pointer"
      type="submit">登入</button>
  </form>
</template>

<style scoped>
</style>
