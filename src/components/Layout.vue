<script setup>
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n'
import { setLanguage } from '@/utils/localStorage'
import { useUserStore } from '@/store/user.js'
import { computed, ref } from 'vue'
import { message } from 'ant-design-vue';

const { t, locale } = useI18n()
const userStore = useUserStore()

const languageList = {
  zh: 'zh_TW',
  en: 'en_US'
}
const changeLanguage = () => {
  const newLanguage = locale.value === languageList.zh ? languageList.en : languageList.zh
  setLanguage(newLanguage)
  locale.value = newLanguage
}

const router = useRouter()
const changePage = (url) => (
  router.push(url)
)

const userName = computed(() => userStore.userName)
const token = computed(() => userStore.token)
const logout = () => {
  userStore.setToken('')
  userStore.setUserName('')
  message.success(t('logout_success'))
}
</script>




<template>
  <header class="w-full h-[80px] bg-blue-700 sticky flex justify-between">
    <div class="flex">
      <div class="text-3xl text-white m-5">
        <i class="fa-regular fa-comment"></i>
        <span @click="changePage('/home')" class="italic cursor-pointer">Discuss more</span>
      </div>
      <div class="w-[600px] h-[70px] m-5">
        <input
          class="w-[500px] focus:outline-0 m-2"
          type="text"
          :placeholder="t('search_topic')"
        />
        <i class="text-white pl-2 fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
    <div class="text-white text-xl mt-6 flex">
      <p v-if="token" class="mr-4">Hi, {{ userName }}</p>
      <i @click="changeLanguage" class="mr-3 cursor-pointer fa-solid fa-globe"></i>
      <ul class="flex">
        <a-tooltip v-if="!token" placement="bottom">
          <template #title>
            <span>{{ t('login') }}</span>
          </template>
          <li @click="changePage('/login')">
            <i class="fa-solid fa-user cursor-pointer"></i>
          </li>
        </a-tooltip>
        <a-tooltip v-else placement="bottom">
          <template #title>
            <span>{{ t('logout') }}</span>
          </template>
          <li @click="logout">
            <i class="fa-solid fa-right-to-bracket cursor-pointer"></i>
          </li>
        </a-tooltip>
      </ul>
    </div>
  </header>
</template>
