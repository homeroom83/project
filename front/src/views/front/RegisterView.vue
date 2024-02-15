<template>
  <v-navigation-drawer permanent="true" v-if="!isXs" width="224">
    <v-container>
      <v-list class="text-center">
        <v-list-item-title>會員專區</v-list-item-title>
        <v-list-item v-for="item in list" :key="item" :to="item.to">{{ item.text }}</v-list-item>
      </v-list>
    </v-container>
  </v-navigation-drawer>
</template>

<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { xs } = useDisplay()
const isXs = computed(() => xs.value)

const list = computed(() => {
  return [
    { to: '/register', text: '註冊' },
    { to: '/login', text: '登入' }
  ]
})

</script>
