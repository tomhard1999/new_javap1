<template>
<div>
  <div>BOt 昵称:{{ bot_name }}</div>
  <div>Bot 战力：{{ bot_rating }}</div>
</div>
  <router-view></router-view>
</template>


<script>
import $ from 'jquery';
import {ref } from 'vue';//定义变量

export default{
  name :"App",
  setup:()=>{
    let bot_name=ref("");
    let bot_rating=ref("");

    $.ajax({
      url:"http://localhost:8080/pk/getbotInfo/",
      type:"get",
      success:resp=>{
        bot_name.value=resp.name;
        bot_rating.value=resp.rating;
      }
    });

    return {
      bot_name,
      bot_rating
    }
  }//整个函数的入口
}
</script>
<style>
body{
  background-image: url("@/assets/background.png");
  background-size: cover;
}
</style>
