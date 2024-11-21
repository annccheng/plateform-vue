<script setup>
import { Input } from 'ant-design-vue';

</script>

<template>
  <div>
    <header class="w-full h-[80px] bg-blue-500 sticky flex justify-between">
      <div class="flex">
        <div class="text-3xl text-white m-5">
          <i class="fa-regular fa-comment"></i>
          <span class="italic">Discuss more</span>
        </div>
        <div class="w-[600px] h-[70px] m-5">
          <input class="w-[500px] focus:outline-0 m-2" type="text" placeholder="請搜尋話題">
          <i class="text-white pl-2 fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div class="text-white text-xl mt-6">
        <i class="mr-3 fa-solid fa-globe "></i>
        <i class="mr-5 fa-solid fa-right-to-bracket"></i>
      </div>
    </header>
    <div class="flex h-[900px]">
      <nav class="w-[200px] bg-red-500">
        <ul class="text-white text-xl font-bold m-5">
          <li>
            <a href="#">所有看板</a>
          </li>
          <li class="pt-5">
            <a href="#">即時熱門看板</a>
          </li>
          <li class="pt-5">
            <a href="#">精選看板</a>
          </li>
        </ul>
      </nav>
      <main class="w-full bg-purple-500">
        <div class="w-2/3 bg-white h-[700px] mt-6 rounded-sm">

        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
</style>
