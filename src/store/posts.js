import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const usePostStore = defineStore(
  'post',
  () => {
    const posts = ref('')
    const setPosts = (newPosts) => {
      posts.value = newPosts
    }
    return {
      posts,
      setPosts,
    }
  },
  {
    persist: true
  }
)











