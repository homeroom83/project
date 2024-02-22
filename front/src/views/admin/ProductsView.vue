<template>
  <v-navigation-drawer permanent>
    <v-container>
      <v-row>
        <v-col class="text-center">商品管理</v-col>
      </v-row>
      <v-col>
        <v-btn>新增商品</v-btn>
      </v-col>
      <v-list>
        <v-list-item v-for="item in list" :key="item">{{ item.text }}</v-list-item>
      </v-list>
    </v-container>
  </v-navigation-drawer>
</template>

<script setup>
import { computed } from 'vue'

const list = computed(() => {
  return [
    { text: 'Nike' },
    { text: 'New Balance' }
  ]
})
</script>
