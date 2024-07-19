<script setup>
import AppCard from './AppCard.vue'

defineProps({
  items: Array
})
</script>

<template>
  <div class="grid gap-6 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
    <AppCard
      v-for="item in items"
      :key="item.id"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :altName="item.altName"
      :isFavorite="item.isFavorite"
    />
  </div>
</template>
