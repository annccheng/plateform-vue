<script setup>
import Layout from '@/components/Layout.vue';
import { reactive, onMounted, ref } from 'vue'
import { setToken, getToken } from '@/utils/localStorage.js'
import { userApi } from '@/api/user.js'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const formData = reactive({
  username: '',
  password: ''
})

const router = useRouter()
const token = ref(getToken.token)

const goToHome = () => {
  router.push('/')
}

const submit = async(e) => {
  e.preventDefault()
  try {
    const { data, code } = await userApi.login(formData.username, formData.password)
    if (code === 200) {
      const { token } = data
      setToken(token)
      message.success(t("login_success"))
      goToHome()
    }
  } catch(err) {
    message.error(t("login_fail"))
  }
}

onMounted(() => {
  if (token.value) {
    goToHome()
  }
})
</script>


<template>
  <layout></layout>
  <form @submit="submit" class="flex flex-col items-center justify-center mt-[200px] w-[420px] mx-auto">
    <div class="flex mb-4 items-center">
      <label class="w-[150px] block text-left mr-2" for="username">{{ t('username')}}</label>
      <input type="text" id="username" v-model="formData.username"
        class="px-2 py-1 w-56 rounded border border-solid border-gray-300 focus:outline-0"
        :placeholder="t('username_placeholder')" />
    </div>
    <div class="flex mb-4 items-center">
      <label class="w-[150px] block text-left mr-2" for="password">{{ t('password')}}</label>
      <input type="password" id="password" v-model="formData.password"
        class="px-2 py-1 w-56 rounded border border-solid border-gray-300 focus:outline-0"
        :placeholder="t('password')" />
    </div>
    <button
      class="px-5 py-1 rounded-sm text-white bg-blue-900 disabled:bg-gray-500 disabled:text-gray-200 cursor-pointer"
      type="submit" :disabled="!formData.username || !formData.password">{{ t('login')}}</button>
  </form>
</template>


<style scoped>


</style>