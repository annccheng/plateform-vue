<script setup>
defineProps({
    category: {
      type:String
    },
    title: {
      type:String
    },
    content: {
      type:String
    },
    likes: {
      type:Number
    },
    comments: {
      type:Number
    },
})
</script>


<template>
  <div class="border border-solid border-gray-300">
    <p class="text-gray-500">{{ category }}</p>
    <h3 class="font-bold text-xl">{{ title }}</h3>
    <span>{{ content }}</span>
    <div class="flex mt-2">
      <div>
        <i class="fa-regular fa-heart"></i>
        <span class="mr-1">{{ likes }}</span>
      </div>
      <div class="ml-7">
        <i class="fa-solid fa-comment"></i>
        <span class="mr-1">{{ comments }}</span>
      </div>
    </div>
  </div>
</template>



