<script setup>
import AppDrawerHead from './AppDrawerHead.vue'
import AppCartItem from './AppCartItem.vue'
</script>

<template>
  <div>
    <div class="fixed top-0 left-0 h-full w-full bg-black bg-opacity-70 z-10"></div>
    <div class="fixed right-0 top-0 h-full bg-white w-1/4 z-20 p-8">
      <AppDrawerHead />

      <AppCartItem />
      <AppCartItem />
      <AppCartItem />
      <AppCartItem />
    </div>
  </div>
</template>
