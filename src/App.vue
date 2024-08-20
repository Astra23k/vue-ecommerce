<template>
  <div>
    <AppDrawer v-if="drawerOpen" />
    <div class="bg-amber-50 w-11/12 m-auto rounded-3xl shadow-xl mt-10">
      <AppHeader @open-cart="openCart" />
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
        <AppCardList :items="items" @add-to-favorites="addToFavorites" @add-to-cart="addToCart" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, provide, reactive, ref, watch } from 'vue'
import axios from 'axios'

import AppHeader from './components/AppHeader.vue'
import AppBanner from './components/AppBanner.vue'
import AppCardList from './components/AppCardList.vue'
import AppDrawer from './components/AppDrawer.vue'

const items = ref([])
const cart = ref([])

const drawerOpen = ref(false)

const closeCart = () => {
  drawerOpen.value = false
}

const openCart = () => {
  drawerOpen.value = true
}

const filters = reactive({
  sortBy: '',
  searchQuery: ''
})

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get('https://8b38c9104c9ae01a.mokky.dev/favorites')
    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.productId === item.id)

      if (!favorite) {
        return item
      }

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id
      }
    })
  } catch (error) {
    console.error('Failed to fetch favorites:', error)
  }
}

const addToFavorites = async (item) => {
  item.isFavorite = !item.isFavorite
  try {
    if (item.isFavorite) {
      const obj = {
        productId: item.id
      }
      const { data } = await axios.post('https://8b38c9104c9ae01a.mokky.dev/favorites', obj)
      item.favoriteId = data.id
    } else {
      await axios.delete(`https://8b38c9104c9ae01a.mokky.dev/favorites/${item.favoriteId}`)
      item.favoriteId = null
    }
  } catch (error) {
    console.log(error)
    item.isFavorite = !item.isFavorite
  }
}

const addToCart = (item) => {
  if (!item.isAdded) {
    cart.value.push(item)
    item.isAdded = true
  } else {
    cart.value.splice(cart.value.indexOf(item), 1)
    item.isAdded = false
  }
}

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }
    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }
    const { data } = await axios.get('https://8b38c9104c9ae01a.mokky.dev/items', { params })
    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false
    }))
  } catch (error) {
    console.error('Failed to fetch items:', error)
  }
}

const updateFilter = (key, value) => {
  filters[key] = value
}

onMounted(async () => {
  await fetchItems()
  await fetchFavorites()
})

watch(filters, fetchItems)

provide('cartActions', {
  closeCart,
  openCart
})
</script>

<style scoped></style>
