<script setup>
import { Input } from 'ant-design-vue';
import PostCard from '@/components/PostCard.vue'
import { posts } from '@/assets/js/posts.js'

</script>

<template>
  <div>
    <header class="w-full h-[80px] bg-blue-700 sticky flex justify-between">
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
      <nav class="w-[250px] h-[1400px] bg-blue-900">
        <ul class="text-white text-xl font-bold m-5">
          <li>
            <i class=" mr-3 fa-solid fa-list"></i>
            <a href="#">所有看板</a>
          </li>
          <li class="pt-5">
            <i class="mr-3 fa-solid fa-fire"></i>
            <a href="#">即時熱門看板</a>
          </li>
          <li class="pt-5">
            <i class="mr-3 fa-solid fa-person"></i>
            <a href="#">精選看板</a>
          </li>
        </ul>
      </nav>
      <main class="w-full h-[1400px] bg-blue-900">
        <div class="w-2/3 bg-white h-[1320px] mt-6 rounded-sm">
          <div class="flex items-center text-gray-500 text-md cursor-pointer h-[40px]">
            <span class="ml-10">全部</span>
            <span class="ml-6">追蹤</span>
            <span class="ml-6">主題</span>
          </div>
          <hr class="text-gray-500">
            <post-card
            v-for="(item, index) in posts"
            :key="index"
            :category="post.category"
            :title="post.title"
            :content="post.content"
            :likes="post.likes"
            :comments="post.comments"
            />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
</style>
