<script setup>
import { defineProps } from 'vue'

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

const emit = defineEmits(['cardClick'])

const handleClick = () =>{
  emit('cardClick')
}

</script>


<template>
  <div class="py-5" @click = "handleClick">
    <p class="text-gray-500 text-sm mb-3">{{ category }}</p>
    <h3 class="font-bold text-xl mb-2 tracking-[0.5px]">{{ title }}</h3>
    <p class="overflow-hidden text-ellipsis whitespace-nowrap text-sm">{{ content }}</p>
    <div class="flex mt-2">
      <div>
        <i class="fa-regular fa-heart"></i>
        <span class="ml-1">{{ likes }}</span>
      </div>
      <div class="ml-7">
        <i class="fa-solid fa-comment"></i>
        <span class="ml-1">{{ comments.length }}</span>
      </div>
    </div>
  </div>
</template>



