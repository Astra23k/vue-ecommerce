<template>
  <div>
    <AppDrawer v-if="drawerOpen" :total-price="totalPrice" :tax-price="taxPrice" />
    <div class="bg-amber-50 w-11/12 m-auto rounded-3xl shadow-xl mt-10">
      <AppHeader :total-price="totalPrice" @open-cart="openCart" />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { computed, provide, ref, watch } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppDrawer from './components/AppDrawer.vue'
import { RouterView } from 'vue-router'

const cart = ref([])

const drawerOpen = ref(false)

const totalPrice = computed(() => {
  return cart.value.reduce((acc, item) => acc + item.price, 0)
})

const taxPrice = computed(() => {
  return Math.round((totalPrice.value * 5) / 100)
})

const closeCart = () => {
  drawerOpen.value = false
}

const openCart = () => {
  drawerOpen.value = true
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
