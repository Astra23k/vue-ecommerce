<script setup>
defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  altName: String,
  isAdded: Boolean,
  isFavorite: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function
})
</script>

<template>
  <div>
    <div
      class="relative bg-amber-50 border border-slate-200 rounded-xl cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
    >
      <img
        :src="isFavorite ? '/like-1.svg' : '/like-2.svg'"
        alt="Favorite"
        class="h-10 absolute top-2 left-2"
        @click="onClickFavorite"
      />

      <img :src="imageUrl" :alt="altName" class="h-80 rounded-xl" />
      <p class="mt-4 ml-5 font-bold text-base">{{ title }}</p>

      <div class="flex justify-between mt-5">
        <div class="flex flex-col ml-5">
          <span class="text-slate-500">Price:</span>
          <b>{{ price }} kzt</b>
        </div>

        <img
          @click="onClickAdd"
          :src="isAdded ? '/checked.svg' : '/plus.svg'"
          alt="Add"
          class="h-12"
        />
      </div>
    </div>
  </div>
</template>
