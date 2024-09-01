<template>
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
    <AppCardList :items="items" @add-to-favorites="addToFavorites" @add-to-cart="onClickAddPlus" />
  </div>
</template>

<script setup>
import debounce from 'lodash.debounce'
import axios from 'axios'
import { reactive, watch, ref, onMounted } from 'vue'
import AppCardList from '../components/AppCardList.vue'
import AppBanner from '../components/AppBanner.vue'
import { inject } from 'vue'

const { cart, addToCart, removeFromCart } = inject('cart')

const items = ref([])

const filters = reactive({
  sortBy: '',
  searchQuery: ''
})

const debouncedFetchItems = debounce(async (filters) => {
  try {
    const params = {
      sortBy: filters.sortBy
    }
    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }
    const { data } = await axios.get('https://8b38c9104c9ae01a.mokky.dev/items', { params })
    items.value = data.map((obj) => {
      const isCart = !!cart.value.some((item) => item.id === obj.id)

      return {
        ...obj,
        isFavorite: false,
        favoriteId: null,
        isAdded: isCart
      }
    })
    await fetchFavorites()
  } catch (error) {
    console.error('Failed to fetch items:', error)
  }
}, 500)

const updateFilter = (key, value) => {
  filters[key] = value
  debouncedFetchItems(filters)
}

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
}

const addToFavorites = async (item) => {
  item.isFavorite = !item.isFavorite
  try {
    if (item.isFavorite) {
      const obj = {
        item_id: item.id
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

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get('https://8b38c9104c9ae01a.mokky.dev/favorites')
    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.item_id === item.id)

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

onMounted(async () => {
  const localCart = localStorage.getItem('cart')
  cart.value = localCart ? JSON.parse(localCart) : []

  await debouncedFetchItems(filters)

  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id)
  }))
})

watch(cart, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id)
  }))
})

watch(filters, () => {
  debouncedFetchItems(filters)
})
</script>

<style scoped></style>
