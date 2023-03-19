<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
  <div class="container">
    <router-link class="navbar-brand" :to="{name:'home'}">King of Bots</router-link>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" :to="{name:'pk_index'}">对战</router-link>
          <!--这样的话，页面就不会刷新了-->
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" :to="{name:'record_index'}">对局列表</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" :to="{name:'ranklist_index'}">排行榜</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tom
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link class="dropdown-item" :to="{nameL:'userbot_index'}">我的bot</router-link>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">退出</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>

import { useRoute } from 'vue-router'
import { computed } from 'vue'
export default{
    setup(){
    const route=useRoute();
    let route_name=computed(()=>route.name)
    return{
      route_name
    }
  }
}
</script>
<style scoped>/*在这里面写的css会加上一个随机字符串，使得样式不会影响组件以外的部分*/ 

</style>