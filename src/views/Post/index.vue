<script setup>
import { postApi } from '@/api/post.js'
import PostCard from '@/components/PostCard.vue'
import { Item } from 'ant-design-vue/es/menu';
import { usePostStore } from '@/store/posts.js';
import { useRoute } from 'vue-router'

const route = useRoute()
const id = Number(route.params.id)
const postStore = usePostStore()
const post = postStore.posts.find(item => item.id === id)
</script>

<template>
  <div class="flex h-[100vh]">
    <div class="w-1/4 bg-[#213555]"></div>
    <div class="w-2/4 rounded-sm p-4">
      <div class="flex p-3 items-center border-b border-gray-200 border-solid">
        <i class="fa-solid fa-person"></i>
        <p class="text-black pl-2">{{ post.category }}</p>
      </div>
      <div class="flex-grow overflow-y-auto mt-4">
        <h3 class="font-bold text-xl text-gray-800">{{ post.title }}</h3>
        <p class="mt-4 leading-relaxed">{{ post.content }}</p>
      </div>
      <div class="flex mt-4">
        <div>
          <i class="fa-regular fa-heart"></i>
          <span class="mr-1">{{ post.likes }}</span>
        </div>
        <div class="ml-7">
          <i class="fa-solid fa-comment"></i>
          <span class="mr-1">{{ post.comments }}</span>
      </div>
      </div>
      <div class="border-b border-t border-gray-200 border-solid mt-5 h-[70px] flex">
        <div>
          <div class="flex">
            <i class="fa-solid fa-person"></i>
            <p class="ml-2">國立雲林科技大學</p>
          </div>
          <span class="ml-5">直接去鹹水雞攤買才叫懶人吧😂</span>
        </div>
        <i class="fa-solid fa-heart ml-50"></i>
      </div>
      <div class="border-b border-gray-200 border-solid mt-5 h-[70px] flex">
        <div>
          <div class="flex">
            <i class="fa-solid fa-person"></i>
            <p class="ml-2">健行科技大學</p>
          </div>
          <span class="ml-5">如果能算好價格就更棒了，謝謝</span>
        </div>
        <i class="fa-solid fa-heart ml-50"></i>
      </div>
      <div class="border-b border-gray-200 border-solid mt-5 h-[70px] flex">
        <div>
          <div class="flex">
            <i class="fa-solid fa-person"></i>
            <p class="ml-2">國立臺灣大學 資訊網路與多媒體研究所</p>
          </div>
          <span class="ml-5">那盒可貴的
          </span>
        </div>
        <i class="fa-solid fa-heart ml-50"></i>
      </div>
      <div class="border-b border-gray-200 border-solid mt-5 h-[70px] flex">
        <div>
          <div class="flex">
            <i class="fa-solid fa-person"></i>
            <p class="ml-2">口口</p>
          </div>
          <span class="ml-5">請問胡椒粉是一般的白胡椒嗎</span>
        </div>
        <i class="fa-solid fa-heart ml-50"></i>
      </div>
    </div>
    <div class="w-1/4 bg-[#213555]"></div>
  </div>
</template>
