<script setup>
import { onMounted, onUnmounted, inject } from 'vue'
import AppDrawerHead from './AppDrawerHead.vue'
import AppCartItemList from './AppCartItemList.vue'
import AppInfoBlock from './AppInfoBlock.vue'

const { closeCart } = inject('cart')

defineProps({
  totalPrice: Number,
  taxPrice: Number,
  buttonDisabled: Boolean
})

const emit = defineEmits(['createOrder'])

const handleEscape = (event) => {
  if (event.key === 'Escape') {
    closeCart()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <div>
    <div
      class="fixed top-0 left-0 h-full w-full bg-black bg-opacity-70 z-10"
      @click="closeCart"
    ></div>

    <div
      class="fixed right-0 top-0 h-full bg-white w-full md:w-1/2 lg:w-1/3 xl:w-1/4 z-20 p-4 sm:p-8 overflow-auto"
      @click.stop
    >
      <AppDrawerHead />

      <div v-if="!totalPrice" class="flex h-full items-center">
        <AppInfoBlock
          title="Cart is empty"
          description="Add at least one product to place an order."
          image-url="/empty-cart.svg"
        />
      </div>

      <div v-else>
        <AppCartItemList />

        <div class="flex flex-col gap-4 my-6">
          <div class="flex gap-3 text-sm sm:text-base">
            <span>Total:</span>
            <div class="flex-1 border-b border-dashed"></div>
            <b>{{ totalPrice }} kzt</b>
          </div>

          <div class="flex gap-3 text-sm sm:text-base">
            <span>Tax 5%:</span>
            <div class="flex-1 border-b border-dashed"></div>
            <b> {{ taxPrice }} kzt</b>
          </div>

          <button
            :disabled="buttonDisabled"
            @click="() => emit('createOrder')"
            class="bg-blue-900 text-white px-4 py-2 sm:px-8 sm:py-2 rounded-xl disabled:opacity-50 hover:bg-blue-950 transition cursor-pointer"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
