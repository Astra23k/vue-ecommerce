<template>
  <header
    class="bg-amber-50 rounded-t-3xl px-4 py-3 md:px-8 md:py-4 flex flex-wrap justify-between items-center border-b border-neutral-900"
  >
    <div class="flex items-center mb-2 md:mb-0 flex-shrink-0">
      <img src="/logo.png" alt="Logo" class="h-10 mr-3" />
      <div>
        <h1 class="text-xl font-bold leading-tight">STOUSTICE</h1>
        <p class="text-xs">Furniture store</p>
      </div>
    </div>
    <nav
      class="flex flex-col md:flex-row items-center w-full md:w-auto justify-between md:justify-center flex-grow space-y-1 md:space-y-0"
    >
      <ul
        class="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-8 text-neutral-900 mx-auto"
      >
        <li><a href="#" class="font-bold text-base">HOME</a></li>
        <li><a href="#" class="font-bold text-base">COLLECTIONS</a></li>
        <li><a href="#" class="font-bold text-base">NEW ARRIVALS</a></li>
      </ul>
      <div class="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:ml-4">
        <ul class="flex flex-col md:flex-row items-center md:space-x-8 space-y-1 md:space-y-0">
          <li class="flex items-center">
            <img src="/cart.svg" alt="Cart" class="h-6 mr-1" />
            <b class="text-sm text-slate-500 hover:text-black cursor-pointer">0 kzt</b>
          </li>
          <li class="flex items-center">
            <img src="/heart.svg" alt="Heart" class="h-6 mr-1" />
            <b class="text-sm text-slate-500 hover:text-black cursor-pointer">Favorites</b>
          </li>
          <li class="flex items-center">
            <img src="/profile.svg" alt="Profile" class="h-6 mr-1" />
            <b class="text-sm text-slate-500 hover:text-black cursor-pointer">Profile</b>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
header {
  font-size: calc(0.5rem + 0.25vw);
}
@media (max-width: 1024px) {
  header {
    font-size: calc(0.5rem + 0.5vw);
  }
}
</style>
