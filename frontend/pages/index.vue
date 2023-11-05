<template>
  <div class="mx:60px my:30px f:medium">
    <section class="my:60px">
        <h1 class="f:40">充實歷程，成就青春</h1>
          <p class="my:20px color:gray">我們是嘉義高中讀書會，除了辦理每天中午的實體讀書會外<br>也有物理辯論隊伍，並定期舉辦西洋棋比賽、線上讀書會等課外活動<br>除了充實你的學習，更為高中生活留下滿滿回憶!</p>
        <div class="inline-block">
          <a class="btn m:10px" target="_blank" href="https://www.instagram.com/studygroup_cysh/"><IconBrandInstagram class="mr:3px"/>查看IG粉絲專業</a>
          <a class="btn m:10px" target="_blank" href="https://bit.ly/45Y9AIX"><IconBrandDiscordFilled class="mr:3px"/>加入我們Discord</a>
          <a class="btn m:10px" target="_blank" href="https://bit.ly/48D54C2"><IconPlus/>加入我們!!</a>
          <a class="btn m:10px purple-button" target="_blank" href="https://bit.ly/3QIK9qp"><IconChess/>西洋棋錦標賽 (名額有限)</a>
        </div>
    </section>
    <section class="my:60px w:250px@<sm w:600@>sm">
        <h1>我們是誰：</h1>
        <p class="f:20 color:gray mt:10px">
          CSG 全名為 CYSH Study Group，即嘉義高中讀書會。<br>
          實體讀書會於每天午休時間舉行，<br>
          在課餘時間亦會舉辦各種活動。<br>
          我們有IG帳號與Discord社群，歡迎加入我們!
        </p>
    </section>
    <section class="my:40px">
    <ul ref="imgList" class="list-style:none flex-wrap:nowrap flex overflow:hidden">
      <li :class="`overflow:hidden flex:0|0|auto ~300ms|ease-in translateX(${transfroms}%)`" v-for="img in imgs" :key="img">
        <img :src="img" class="w:100vw">
      </li>
    </ul>

      <div class="flex jc:center bottom:100px@>md bottom:80px@<md rel">
        <IconArrowBadgeLeft @click="changp_func('next_')" height="40px" width="40px" color="white" class="m:20px cursor:pointer shadow:0|3px|white:hover ~300ms|ease-in"/>
        <IconArrowBadgeRight @click="changp_func('pre')" height="40px" width="40px" color="white" class="m:20px cursor:pointer shadow:0|3px|white:hover ~300ms|ease-in"/>
      </div>
    </section>
    <section class="my:60px w:250px@<sm w:600@>sm">
      <h1>讀書會</h1>
      <ul class="inline-block list-style:none text:left mt:10px bt:2|solid|gray-86">
        <li class="my:10px flex"><IconCircleCheck color='gray'/>週一化學：由學競選手與科學班同學傳授有機化學知識</li>
        <li class="my:10px flex"><IconCircleCheck color='gray'/>週二物辯：討論並研究 2024 TYPT 選題，組隊參加比賽</li>
        <li class="my:10px flex"><IconCircleCheck color='gray'/>週三數學：在兩位老師的帶領下由學生設計並講授競賽題</li>
        <li class="my:10px flex"><IconCircleCheck color='gray'/>週四生物：直攻大學課程，為生奧做準備</li>
        <li class="my:10px flex"><IconCircleCheck color='gray'/>週五物理：以物奧為目標，學習超越高中的物理概念</li>
        <li class="my:10px flex"><IconPlus color='gray'/>線上讀書會：由同學擔任講師，於假日分享程式、軟體使用、語言學習等知識</li>
      </ul>
    </section>
    <section class="my:60px w:250px@<sm w:600@>sm">
        <h1>和我們互動~</h1>
          <p class="inline-block f:20 color:gray mt:10px">
            我們有一個 Discord 伺服器，除了不定期辦適合大眾的線上讀書會外，
            也有一個溫暖的社群 (至少目前如此)
            快點來吧!
            </p>
            <div class="block">
              <a target="_blank" href="https://bit.ly/45Y9AIX" class="f:18 text:center flex color:gray-60 shadow:0|2|gray-60:hover ~300ms|ease-in"><IconBrandDiscordFilled/> Discord</a>
            </div>
    </section>
    <section>
      <h1>目前幹部職位有：</h1>
      <ul class="list-style:none inline-block mt:10px bt:2|solid|gray-86">
        <li class="my:10px flex color:gray"><IconFocus2 color="gray"/>管理員：處理伺服器 ticket、網站維護等</li>
        <li class="my:10px flex color:gray"><IconBrandInstagram color="gray"/>公關：經營 IG、處理電子郵件等。</li>
        <li class="my:10px flex color:gray"><IconSettings2 color="gray"/>講師：假日時間分享任何 (合法的) 知識!</li>
        <a class="btn mt:20px flex" target="_blank" href="https://bit.ly/48D54C2"><IconPlus/>加入我們!!</a>
      </ul>
    </section>
    <div class="w:100% h:20px text:center"><a target="_blank" href="https://github.com/TommcyOWO" class="flex jc:center color:gray"><IconBadgeCc/> Dev by Tomycat</a></div>
  </div>
</template>

<script setup lang="ts">
import { init, Style } from '@master/css';
import { IconChess } from '@tabler/icons-vue';
import { IconCircleCheck,IconBrandDiscordFilled , IconPlus, IconBadgeCc, IconFocus2, IconBrandInstagram, IconSettings2, IconArrowBadgeRight, IconArrowBadgeLeft } from '@tabler/icons-vue';

Style.extend('classes', {
  btn: 'inline-flex b:none center-content font:14 font:semibold font:white bg:sky-74 px:18 h:40 r:4',
})

init()

const imgs = ref(['1.png', '2.png', '3.png', '4.png', '5.png'])

const transfroms = ref(0)

const changp_func = (type:string) => {
  if (type === 'next_') {
    transfroms.value += 100
  } else {
    transfroms.value -= 100
  }
}

watch(transfroms,(newVal,oldVal)=>{
  if (newVal > 0 || newVal <-400){
    transfroms.value = 0
  }
})

</script>

<style scoped>
.purple-button {
  background-color: #c553f5; /* Use the color code for light purple that you prefer. */
  /* Additional styling properties if needed */
}
</style>