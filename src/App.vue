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

const getPosts = async () => {
  const { data } = await postApi.getPosts()
    postStore.setPosts(data)
    posts.value = data
  }

</script>

<template>
  <layout></layout>
  <RouterView />
</template>

<style scoped>

</style>
