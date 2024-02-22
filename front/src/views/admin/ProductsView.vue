<template>
  <v-navigation-drawer permanent>
    <v-container>
      <v-btn >新增商品</v-btn>
    </v-container>
    <v-container>
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
