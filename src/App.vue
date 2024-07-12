<template>
  <div>
    <!-- <AppDrawer /> -->
    <div class="bg-amber-50 w-11/12 m-auto rounded-3xl shadow-xl mt-10">
      <AppHeader />
      <AppBanner />
      <div class="p-10">
        <div class="flex flex-wrap justify-between items-center mb-10 space-y-4 md:space-y-0">
          <h1 class="text-3xl font-bold">New Arrivals</h1>
          <div class="flex space-x-4 w-full md:w-auto">
            <input
              @input="updateFilter('searchQuery', $event.target.value)"
              type="text"
              placeholder="Search"
              class="border border-gray-300 rounded-xl pr-2 outline-none focus:border-gray-400 px-2 py-1 text-base w-full md:w-auto"
            />
            <select
              @change="updateFilter('sortBy', $event.target.value)"
              class="py-2 px-4 border rounded-xl outline-none border-slate-300"
            >
              <option value="">All Filters</option>
              <option value="price">By Price - low</option>
              <option value="-price">By Price - high</option>
            </select>
          </div>
        </div>
        <AppCardList :items="items" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import axios from 'axios'

import AppHeader from './components/AppHeader.vue'
import AppBanner from './components/AppBanner.vue'
import AppCardList from './components/AppCardList.vue'
// import AppDrawer from './components/AppDrawer.vue'

const items = ref([])

const filters = reactive({
  sortBy: '',
  searchQuery: ''
})

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }
    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }
    const { data } = await axios.get('https://cef8e05b069fb362.mokky.dev/items', { params })
    items.value = data
  } catch (error) {
    console.error('Failed to fetch items:', error)
  }
}

const updateFilter = (key, value) => {
  filters[key] = value
}

onMounted(fetchItems)

watch(filters, fetchItems)
</script>

<style scoped></style>
