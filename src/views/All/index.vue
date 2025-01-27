<script setup>

const categories = [
  {
    id:1,
    title:"美食"
  },
  {
    id:2,
    category:"追星"
  },
  {
    id:3,
    category:"有趣"
  },
  {
    id:4,
    category:"美妝"
  },
  {
    id:5,
    category:"比賽"
  },
  {
    id:6,
    category:"工作"
  }
]

const handleCategory = () => {

}
</script>

<template>
<div class="flex-1 bg-[#213555] h-[calc(100vh-80px)] overflow-y-scroll pt-6 pr-5">
  <div class="bg-white rounded-sm px-20 py-5">
    <ul class="flex items-center text-gray-500 text-md cursor-pointer sticky top-[-24px] bg-white border-b border-solid border-gray-200 font-bold">
      <li @click="handleCategory" v-for="item in categories" :key="item.title" class="py-5 relative px-3 hover:text-black"
      :class="{ 'text-black': activeCategory === item.category }"
      >
      </li>
    </ul>
  </div>
</div>
</template>