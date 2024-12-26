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
  <div class="border border-solid border-gray-300">
    <p class="text-gray-500">{{ post.category }}</p>
    <h3 class="font-bold text-xl">{{ post.title }}</h3>
    <span>{{ post.content }}</span>
    <div class="flex mt-2">
      <div>
        <i class="fa-regular fa-heart"></i>
        <span class="mr-1">{{ post.likes }}</span>
      </div>
      <div class="ml-7">
        <i class="fa-solid fa-comment"></i>
        <span class="mr-1">{{ post.comments }}</span>
      </div>
    </div>
  </div>
</template>
