<template>
  <div>
    <AppDrawer />
    <div class="bg-amber-50 w-11/12 m-auto rounded-3xl shadow-xl mt-10">
      <AppHeader />
      <AppBanner />
      <div class="p-10">
        <h1 class="text-3xl font-bold mb-10">New Arrivals</h1>
        <AppCardList />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import AppBanner from './components/AppBanner.vue';
import AppCardList from './components/AppCardList.vue';
import AppDrawer from './components/AppDrawer.vue';
</script>
