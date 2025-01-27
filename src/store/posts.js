import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const usePostStore = defineStore(
  'post',
  () => {
    const posts = ref('')
    const setPosts = (newPosts) => {
      posts.value = newPosts
    }
    const followCategories = ref([
      {
        id:1,
        title:"美食",
        isFollow:false
      },
      {
        id:2,
        category:"追星",
        isFollow:false
      },
      {
        id:3,
        category:"有趣",
        isFollow:false
      },
      {
        id:4,
        category:"美妝",
        isFollow:false
      },
      {
        id:5,
        category:"比賽",
        isFollow:false
      },
      {
        id:6,
        category:"工作",
        isFollow:false
      }
    ])
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











