<script setup>
import { usePostStore } from '@/store/posts'
import { computed } from 'vue'

const postStore = usePostStore()
const followCategories = computed(() => postStore.followCategories)

const handleCategory = (item) => {
  console.log(item.category)
}

const handleFollow = (id) => {
  const newCategories = postStore.followCategories.map(item => {
    if (item.id === id){
      item.isFollow = !item.isFollow
      return item
    }
    return item
  })
  postStore.setFollowCategories(newCategories)
}
</script>

<template>
<div class="flex-1 bg-[#213555] h-[calc(100vh-80px)] overflow-y-scroll pt-6 pr-5">
  <div class="bg-white rounded-sm px-20 py-5">
    <ul class="text-gray-500 text-md cursor-pointer bg-white">
      <li v-for="item in followCategories" :key="item.id" class="flex justify-between py-5 hover:text-black"
      >
      <p @click="handleCategory">{{ item.category }}</p>
      <button class="bg-[#213555] text-white px-1 py-2 rounded hover:bg-slate-600" :class="{ 'bg-gray-300 text-gray-500' : item.isFollow }" @click="handleFollow(item.id)">{{ item.isFollow ? '已追蹤' : '追蹤' }}</button>
      </li>
    </ul>
  </div>
</div>
</template>