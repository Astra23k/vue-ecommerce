<script setup>
import AppCartItem from './AppCartItem.vue'
import { inject } from 'vue'

const { cart, removeFromCart } = inject('cart')
</script>

<template>
  <div class="flex flex-col gap-2">
    <AppCartItem
      v-for="item in cart"
      :key="item.id"
      :title="item.title"
      :price="item.price"
      :altName="item.altName"
      :image-url="item.imageUrl"
      @on-click-remove="() => removeFromCart(item)"
    />
  </div>
</template>
