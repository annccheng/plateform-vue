<script setup>
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n'
import { setLanguage } from '@/utils/localStorage'
import { useUserStore } from '@/store/user.js'
import { usePostStore } from '@/store/posts'
import { computed, ref } from 'vue'
import { message } from 'ant-design-vue';

const { t, locale } = useI18n()
const userStore = useUserStore()
const postStore = usePostStore()

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

const followCategories = computed(() => postStore.followCategories)
const userName = computed(() => userStore.userName)
const token = computed(() => userStore.token)
const logout = () => {
  userStore.setToken('')
  userStore.setUserName('')
  message.success(t('logout_success'))
}
</script>



<template>
  <div>
    <header class="w-full h-[80px] bg-[#3E5879] flex justify-between fixed top-0 left-0 px-5">
      <div class="flex items-center">
        <div class="text-3xl text-white mr-5">
          <i class="fa-regular fa-comment"></i>
          <span @click="changePage('/home')" class="italic cursor-pointer">Discuss more</span>
        </div>
        <div class="flex w-[500px]">
          <input
            class="focus:outline-0 flex-1 py-1 pl-2"
            type="text"
            :placeholder="t('search_topic')"
          />
          <button class="border border-solid border-white w-9">
            <i class="text-white fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <ul class="text-white text-xl mt-6 flex">
        <li v-if="token" class="mr-4">Hi, {{ userName }}</li>
        <li>
          <i @click="changeLanguage" class="mr-3 cursor-pointer fa-solid fa-globe"></i>
        </li>
        <li @click="changePage('/login')">
          <a-tooltip v-if="!token" placement="bottom">
          <template #title>
            <span>{{ t('login') }}</span>
          </template>
            <i class="fa-solid fa-user cursor-pointer"></i>
          </a-tooltip>
          <a-tooltip v-else placement="bottom">
            <template #title>
              <span>{{ t('logout') }}</span>
            </template>
            <li @click="logout">
              <i class="fa-solid fa-right-to-bracket cursor-pointer"></i>
            </li>
          </a-tooltip>
        </li>
      </ul>
    </header>
    <main class="pt-20">
      <div>
        <nav class="w-[250px] bg-[#213555] h-[calc(100vh-80px)]">
          <ul class="text-white m-5">
            <li class="pt-5 flex items-center">
              <i class="mr-3 fa-solid fa-list"></i>
              <p @click="changPage('/all')">{{ t('all_board')}}</p>
            </li>
            <p class="text-gray-400 mt-3 pl-4">追蹤看板</p>
            <li class="pl-4" v-for="item in followCategories" :key="item.id">
              <i class="mr-3 fa-solid fa-person"></i>
              <a href="#">{{ item.category }}</a>
            </li>
          </ul>
        </nav>
        <slot/>
      </div>
    </main>
  </div>
</template>
