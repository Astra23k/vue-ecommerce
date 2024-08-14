<template>
  <div class="flex items-center gap-4 mb-4">
    <img
      @click="closeCart"
      src="/arrow-next.svg"
      class="h-6 opacity-50 cursor-pointer hover:opacity-100 transition hover:-translate-x-1"
      alt="Arrow"
    />
    <h2 class="text-lg font-bold">Cart</h2>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const { closeCart } = inject('cartActions')
</script>
