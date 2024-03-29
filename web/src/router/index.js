import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '../views/PK/PkindexView'
import RecordIndexView from '../views/record/RecordindexView'
import RanklistIndexView from '../views/ranklist/RanklistindexView'
import UserBotIndexView from '../views/user/bot/UserBotindexView'
import NotFound from '../views/error/NotFound'
const routes = [
  {
    path:"/",
    name:"home",
    redirect:"/pk/"
  },
  {
    path:"/pk/",
    name:"pk_index",
    component:PkIndexView,
  },
  {
    path:"/record/",
    name:"record_index",
    component:RecordIndexView,
  },
  {
    path:'/ranklist/',
    name:"ranklist_index",
    component:RanklistIndexView,
  },
  {
    path:'/user/bot/',
    name:"userbot_index",
    component:UserBotIndexView,
  },
  {
    path:'/404/',
    name:"404",
    component:NotFound,
  },
  {
    path:"/:catchAll(.*)",
    redirect:"/404/"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router