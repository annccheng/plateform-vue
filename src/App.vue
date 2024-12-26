<script setup>
import { RouterView } from 'vue-router';
import Layout from '@/components/Layout.vue'
import '@/mock/index.js'
import { postApi } from '@/api/post.js'
import { ref, onMounted } from "vue"
import { usePostStore } from '@/store/posts.js';
import { useRouter } from "vue-router"

const postStore = usePostStore()
const router = useRouter()
const posts = ref(postStore.posts)

const getPosts = async () => {
  const { data } = await postApi.getPosts()
  postStore.setPosts(data)
  posts.value = data
}
onMounted(() => {
  if (!posts.value.length) {
    getPosts()
  }
})
</script>

<template>
  <layout>
    <RouterView />
  </layout>
</template>

<style scoped>

</style>
