<script setup>
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n'
import { setLanguage } from '@/utils/localStorage'

const { t, locale } = useI18n()

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
    <div class="text-white text-xl mt-6">
      <i @click="changeLanguage" class="mr-3 cursor-pointer fa-solid fa-globe"></i>
      <i class="mr-5 fa-solid fa-right-to-bracket"></i>
    </div>
  </header>
</template>
