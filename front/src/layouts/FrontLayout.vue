<template>
  <!-- 手機側欄 -->
  <v-navigation-drawer v-model="drawer" v-if="isXs || isSm" color="orange-lighten-5">
    <v-list v-model="list">
      <v-list-group v-for="item in  menu " :key="item">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" :title="item.title" class="text-center"></v-list-item>
        </template>
        <v-list-item class="bg-white" v-for=" page in item.pages " :key="page.to" :to="page.to">
          <v-list-item>{{ page.text }}</v-list-item>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>

  <!-- 導覽列 -->
  <v-app-bar color="orange-lighten-4">
    <v-container class="d-flex align-center">
      <!-- Logo -->
      <router-link to="/" class="sneaker">
        <v-app-bar-title>
          sneaker
        </v-app-bar-title>
      </router-link>
      <v-spacer></v-spacer>
      <!-- 手機版 -->
      <template v-if="isXs || isSm">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </template>
      <!-- 電腦版 -->
      <template v-else>
        <!-- 選項列表 -->
        <v-menu open-on-hover v-for="item in menu" :key="item">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :title="item.title" style="cursor: pointer;"></v-list-item>
          </template>
          <v-list>
            <v-list-item v-for="page in  item.pages " :key="page" :to="page.to" :active="false">
              <v-list-item>{{ page.text }}</v-list-item>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-container>
  </v-app-bar>
  <!-- 頁面內容 -->
  <v-main>
    <router-view></router-view>
  </v-main>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import { ref, computed } from 'vue'

// 手機版判斷
const { sm, xs } = useDisplay()
const isSm = computed(() => sm.value)
const isXs = computed(() => xs.value)

// 手機版側欄開關
const drawer = ref(false)
const list = ref(false)

const menu = computed(() => {
  return [
    {
      title: '商品總覽',
      pages: [
        { to: '/register', text: 'nike' },
        { to: '/login', text: 'adidas' }
      ]
    },
    {
      title: '交流專區',
      pages: [
        { to: '/register', text: 'nike' },
        { to: '/login', text: 'adidas' }
      ]
    },
    {
      title: '會員專區',
      pages: [
        { to: '/register', text: '註冊' },
        { to: '/login', text: '登入' }
      ]
    }
  ]
})

</script>

<style>
.sneaker {
  text-decoration: none;
  color: black
}
</style>
