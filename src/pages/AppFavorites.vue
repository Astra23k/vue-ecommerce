<template>
  <div class="p-10">
    <h1 class="text-3xl font-bold mb-7">My bookmarks</h1>
    <AppCardList :items="favorites" is-favorites />
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import AppCardList from '../components/AppCardList.vue'

const favorites = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://8b38c9104c9ae01a.mokky.dev/favorites?_relations=items'
    )
    favorites.value = data.map((obj) => obj.item)
  } catch (error) {
    console.log(error)
  }
})
</script>

<style scoped></style>
