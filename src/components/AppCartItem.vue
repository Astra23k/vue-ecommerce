<script setup>
const emit = defineEmits(['onClickRemove'])

defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  altName: String
})
</script>

<template>
  <div class="flex items-center border border-slate-200 p-4 rounded-xl mt-4 gap-4">
    <img class="w-16 h-16" :src="imageUrl" :alt="altName" />

    <div class="flex flex-col flex-grow">
      <p>{{ title }}</p>

      <div class="flex items-center justify-between mt-2">
        <b class="mr-4">{{ price }} kzt</b>
        <img
          @click="emit('onClickRemove')"
          src="/close.svg"
          class="h-9 opacity-40 hover:opacity-100 cursor-pointer transition"
        />
      </div>
    </div>
  </div>
</template>
