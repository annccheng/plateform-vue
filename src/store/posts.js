import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const usePostStore = defineStore(
  'post',
  () => {
    const posts = ref('')
    const setPosts = (newPosts) => {
      posts.value = newPosts
    }
    const followCategories = ref('')
    const setFollowCategories = (categories) => {
      followCategories.value = categories
    }
    return {
      posts,
      setPosts,
      followCategories,
      setFollowCategories,
    }
  },
  {
    persist: true
  }
)











