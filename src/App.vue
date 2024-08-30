<template>
  <div>
    <AppDrawer
      v-if="drawerOpen"
      :total-price="totalPrice"
      :tax-price="taxPrice"
      @create-order="createOrder"
      :button-disabled="cartButtonDisabled"
    />
    <div class="bg-amber-50 w-11/12 m-auto rounded-3xl shadow-xl mt-10">
      <AppHeader :total-price="totalPrice" @open-cart="openCart" />
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
        <AppCardList
          :items="items"
          @add-to-favorites="addToFavorites"
          @add-to-cart="onClickAddPlus"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, provide, reactive, ref, watch } from 'vue'
import axios from 'axios'

import AppHeader from './components/AppHeader.vue'
import AppBanner from './components/AppBanner.vue'
import AppCardList from './components/AppCardList.vue'
import AppDrawer from './components/AppDrawer.vue'

const items = ref([])
const cart = ref(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])
const isCreateOrder = ref(false)

const drawerOpen = ref(false)

const totalPrice = computed(() => {
  return cart.value.reduce((acc, item) => acc + item.price, 0)
})

const taxPrice = computed(() => {
  return Math.round((totalPrice.value * 5) / 100)
})

const cartButtonDisabled = computed(() => {
  return isCreateOrder.value ? true : totalPrice.value ? false : true
})

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

const createOrder = async () => {
  try {
    isCreateOrder.value = true
    const { data } = await axios.post('https://8b38c9104c9ae01a.mokky.dev/orders', {
      items: cart.value,
      totalPrice: totalPrice.value
    })
    cart.value = []
    return data
  } catch (error) {
    console.error('Failed to create order:', error)
  } finally {
    isCreateOrder.value = false
  }
}

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
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) => {
  cart.value = cart.value.filter((cartItem) => cartItem.id !== item.id)
  item.isAdded = false
}

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
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
    items.value = data.map((obj) => {
      const isCart = !!cart.value.some((item) => item.id === obj.id)

      return {
        ...obj,
        isFavorite: false,
        favoriteId: null,
        isAdded: isCart
      }
    })
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

watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
    items.value = items.value.map((obj) => {
      const isCart = !!cart.value.some((item) => item.id === obj.id)

      return {
        ...obj,
        isAdded: isCart
      }
    })
  },
  { deep: true }
)

provide('cart', {
  cart,
  closeCart,
  openCart,
  addToCart,
  removeFromCart
})
</script>

<style scoped></style>
