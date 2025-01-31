<script setup>
import { Input } from 'ant-design-vue';
import PostCard from '@/components/PostCard.vue'
import { useI18n } from 'vue-i18n'
import { ref, onMounted, computed, watch } from "vue"
import { useRouter } from 'vue-router'
import { usePostStore } from '@/store/posts.js';

const postStore = usePostStore()
const router = useRouter()

const { t, locale } = useI18n()
const goToPost = (id) =>{
  router.push(`/post/${id}`)
}
const categories = [
  {
    title: t('all'),
    category: 'all'
  },
  {
    title: t('following'),
    category: 'following'
  },
]

// 全部貼文
const posts = computed(() => postStore.posts)
// 追蹤主題貼文
const filteredPosts = ref([])
// 當前的標籤
const activeCategory = ref(categories[0].category)
const handleActiveCategory = (category) => {
  activeCategory.value = category
  if (category === 'following') {
    // 取得目前追蹤的主題並且轉換成字串，例如['美食', '追星']
    const followCategories = postStore.followCategories.filter(item => item.isFollow).map(item => item.category)
    // 取得追蹤主題的貼文
    const newPosts = []
    for (const item of posts.value) {
      if (followCategories.includes(item.category)) {
        newPosts.push(item)
      }
    }
    filteredPosts.value = newPosts
  }
}

</script>


<template>
<div class="flex-1 bg-[#213555] h-[calc(100vh-80px)] overflow-y-scroll pt-6 pr-5">
  <div class="bg-white rounded-sm px-20 py-5">
    <ul class="flex items-center text-gray-500 text-md cursor-pointer sticky top-[-24px] bg-white border-b border-solid border-gray-200 font-bold">
      <li @click="handleActiveCategory(item.category)" v-for="item in categories" :key="item.title" class="py-5 relative px-3 hover:text-black"
      :class="{ 'text-black': activeCategory === item.category }"
      >
        {{ item.title }}
        <div v-if="activeCategory === item.category" class="bg-[#3E5879] h-[2px] absolute bottom-0 left-0 w-full"></div>
      </li>
    </ul>
    <template v-if="activeCategory === 'all'">
      <post-card
        class="mb-5 border-b border-gray-200 border-solid"
        v-for="(item, index) in posts"
        :key="index"
        :category="item.category"
        :title="item.title"
        :content="item.content"
        :likes="item.likes"
        :comments="item.comments"
        @card-click = "goToPost(item.id)"
      />
    </template>
    <template v-if="activeCategory === 'following'">
      <post-card
        class="mb-5 border-b border-gray-200 border-solid"
        v-for="(item, index) in filteredPosts"
        :key="index"
        :category="item.category"
        :title="item.title"
        :content="item.content"
        :likes="item.likes"
        :comments="item.comments"
        @card-click = "goToPost(item.id)"
      />
      <p v-if="!filteredPosts.length" class="py-4 text-gray-500 text-center">目前無追蹤貼文</p>
    </template>
  </div>
</div>
</template>


<style scoped>
</style>
