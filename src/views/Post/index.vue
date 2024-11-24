<script setup>
</script>

<template>
<div>
    <header class="w-full h-[80px] bg-blue-700 sticky flex justify-between">
      <div class="flex">
        <div class="text-3xl text-white m-5">
          <i class="fa-regular fa-comment"></i>
          <span class="italic">Discuss more</span>
        </div>
        <div class="w-[600px] h-[70px] m-5">
          <input class="w-[500px] focus:outline-0 m-2" type="text" placeholder="請搜尋話題">
          <i class="text-white pl-2 fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div class="text-white text-xl mt-6">
        <i class="mr-3 fa-solid fa-globe "></i>
        <i class="mr-5 fa-solid fa-right-to-bracket"></i>
      </div>
    </header>
    <div class="flex h-[900px]">
      <nav class="w-[250px] h-[1400px] bg-blue-900">
        <ul class="text-white text-xl font-bold m-5">
          <li>
            <i class=" mr-3 fa-solid fa-list"></i>
            <a href="#">所有看板</a>
          </li>
          <li class="pt-5">
            <i class="mr-3 fa-solid fa-fire"></i>
            <a href="#">即時熱門看板</a>
          </li>
          <li class="pt-5">
            <i class="mr-3 fa-solid fa-person"></i>
            <a href="#">精選看板</a>
          </li>
        </ul>
      </nav>
      <main class="w-full h-[1400px] bg-blue-900">
        <div class="w-2/3 bg-white h-[1320px] mt-6 rounded-sm">
          <div class="text-gray-500 text-md cursor-pointer h-[40px]">
            <span class="ml-10">工作</span>
          </div>
          <hr class="text-gray-500">
          <h1 class="font-bold text-2xl m-5">#閒聊 公司不同意我離職</h1>
          <span class="text-md m-5">
                何況是公司叫我離職
                結果公司現在不僅沒幫我退保
                連離職單也不拿出來給我
                害我現在卡在第二份工作面試跟入職的關係
                因為勞健保還持續

                公司還打電話來噴我
                說什麼沒給我離職 我憑什麼離職……
                但因為我禮拜一當下口頭與訊息已經說好當天下班就會離職
                後來的時間我都沒去了
                現在公司拿我在職期間曠職理由

                想扣我薪水也想把我整個薪水都省掉不發</span>
          <div class="flex mt-2">
            <div>
              <span class="mr-1">732</span>
              <i class="fa-regular fa-heart"></i>
            </div>
            <div class="ml-7">
              <span class="mr-1">474</span>
              <i class="fa-solid fa-comment"></i>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
</style>
