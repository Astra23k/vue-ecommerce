<script setup>
import AppCard from './AppCard.vue'

defineProps({
  items: Array,
  isFavorites: Boolean
})

const emit = defineEmits(['addToFavorites', 'addToCart'])
</script>

<template>
  <div class="grid gap-6 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
    <AppCard
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :altName="item.altName"
      :isFavorite="item.isFavorite"
      :onClickAdd="isFavorites ? null : () => emit('addToCart', item)"
      :onClickFavorite="isFavorites ? null : () => emit('addToFavorites', item)"
      :isAdded="item.isAdded"
    />
  </div>
</template>
