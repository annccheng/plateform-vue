<script setup>
import { Input } from 'ant-design-vue';
import PostCard from '@/components/PostCard.vue'
import { posts } from '@/assets/js/posts.js'
import  Layout  from '@/components/Layout.vue';


</script>


<template>
  <div>
    <layout></layout>
    <div class="flex h-[900px]">
      <nav class="w-[250px] h-[1400px] bg-blue-900">
        <ul class="text-white text-xl font-bold m-5">
          <li>
            <i class=" mr-3 fa-solid fa-list"></i>
            <a href="#">全部看版</a>
          </li>
          <li class="pt-5">
            <i class="mr-3 fa-solid fa-fire"></i>
            <a href="#">及時熱門看板</a>
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
            :category="item.category"
            :title="item.title"
            :content="item.content"
            :likes="item.likes"
            :comments="item.comments"
            />
        </div>
      </main>
    </div>
  </div>
</template>


<style scoped>
</style>
