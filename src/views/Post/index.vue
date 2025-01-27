<script setup>
import { postApi } from '@/api/post.js'
import PostCard from '@/components/PostCard.vue'
import { Item } from 'ant-design-vue/es/menu';
import { usePostStore } from '@/store/posts.js';
import { useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()
const id = Number(route.params.id)
const postStore = usePostStore()
const post = postStore.posts.find(item => item.id === id)
</script>

<template>
  <div class="flex-1 bg-[#213555] h-[calc(100vh-80px)] overflow-y-scroll pt-6 pr-5">
    <div class="rounded-sm px-20  py-5 bg-white h-[calc(100vh-80px)] relative">
      <button class="absolute top-5 left-5" @click="router.push('/')">
        <i class="fa-solid fa-chevron-left text-lg hover:text-gray-500"></i>
      </button>
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
          <i class="fa-regular fa-heart mr-1"></i>
          <span class="mr-1">{{ post.likes }}</span>
        </div>
        <div class="ml-7">
          <i class="fa-solid fa-comment mr-1"></i>
          <span class="mr-1">{{ post.comments.length }}</span>
        </div>
      </div>
      <div v-for="item in post.comments" :key="item.id" class="border-b border-gray-200 border-solid mt-5 h-[70px] flex items-center justify-between">
        <div>
          <div class="flex">
            <i class="fa-solid fa-person"></i>
            <p class="ml-2">{{ item.school }}</p>
          </div>
          <span class="ml-5">{{ item.content }}</span>
        </div>
        <i class="fa-regular fa-heart ml-50"></i>
      </div>
    </div>
  </div>
</template>
