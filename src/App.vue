<template>
  <div>
    <!-- <AppDrawer /> -->
    <div class="bg-amber-50 w-11/12 m-auto rounded-3xl shadow-xl mt-10">
      <AppHeader />
      <AppBanner />
      <div class="p-10">
        <div class="flex justify-between items-center mb-10">
          <h1 class="text-3xl font-bold">New Arrivals</h1>
          <select class="py-2 px-4 border rounded-xl outline-none border-slate-300">
            <option>By Name</option>
            <option>By Price - low</option>
            <option>By Price - high</option>
          </select>
        </div>

        <AppCardList :items="items" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

import AppHeader from './components/AppHeader.vue'
import AppBanner from './components/AppBanner.vue'
import AppCardList from './components/AppCardList.vue'
import AppDrawer from './components/AppDrawer.vue'

const items = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get('https://cef8e05b069fb362.mokky.dev/items')
    items.value = data
  } catch (error) {
    console.log(error)
  }
})
</script>

<style></style>
