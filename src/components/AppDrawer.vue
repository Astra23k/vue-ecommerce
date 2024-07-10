<script setup>
import AppDrawerHead from './AppDrawerHead.vue'
import AppCartItemList from './AppCartItemList.vue'
</script>

<template>
  <div>
    <div class="fixed top-0 left-0 h-full w-full bg-black bg-opacity-70 z-10"></div>
    <div
      class="fixed right-0 top-0 h-full bg-white w-full md:w-1/2 lg:w-1/3 xl:w-1/4 z-20 p-4 sm:p-8 overflow-auto"
    >
      <AppDrawerHead />

      <AppCartItemList />

      <div class="flex flex-col gap-4 my-6">
        <div class="flex gap-3 text-sm sm:text-base">
          <span>Total:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>133100 kzt</b>
        </div>

        <div class="flex gap-3 text-sm sm:text-base">
          <span>Tax 15%:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>155100 kzt</b>
        </div>

        <button
          disabled
          class="bg-blue-900 text-white px-4 py-2 sm:px-8 sm:py-2 rounded-xl disabled:opacity-50 hover:bg-blue-950 transition cursor-pointer"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>
