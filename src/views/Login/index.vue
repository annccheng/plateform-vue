<script setup>
import Layout from '@/components/Layout.vue';
import { reactive } from 'vue'
import { setToken, getToken } from '@/utils/localStorage.js'
import { userApi } from '@/api/user.js'


const formData = reactive({
  username: '',
  password: ''
})


const submit = async(e) =>{
  console.log(formData.username);
  console.log(formData.password);
  e.preventDefault()
  const data = await userApi.login(username, password)
  //const { token } = data
  setToken(token)
}


</script>


<template>
  <layout></layout>
  <form @submit="submit" class="flex flex-col items-center justify-center mt-[200px] w-[420px] mx-auto">
    <div class="flex mb-4 items-center">
      <label class="w-[150px] block text-left mr-2" for="username">明子</label>
      <input type="text" id="username" v-model="formData.username"
        class="px-2 py-1 w-56 rounded border border-solid border-gray-300 focus:outline-0"
        placeholder="請輸入明子" />
    </div>
    <div class="flex mb-4 items-center">
      <label class="w-[150px] block text-left mr-2" for="password">密碼</label>
      <input type="password" id="password" v-model="formData.password"
        class="px-2 py-1 w-56 rounded border border-solid border-gray-300 focus:outline-0"
        placeholder="密碼" />
    </div>
    <button
      class="px-5 py-1 rounded-sm text-white bg-blue-900 disabled:bg-gray-500 disabled:text-gray-400 cursor-pointer"
      type="submit">登入</button>
  </form>
</template>


<style scoped>


</style>