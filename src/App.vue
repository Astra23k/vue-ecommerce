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
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { computed, provide, ref, watch } from 'vue'
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppDrawer from './components/AppDrawer.vue'
import { RouterView } from 'vue-router'

const cart = ref([])
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

const addToCart = (item) => {
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) => {
  cart.value = cart.value.filter((cartItem) => cartItem.id !== item.id)
  item.isAdded = false
}

watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
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
