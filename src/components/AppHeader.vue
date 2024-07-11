<script setup></script>

<template>
  <header
    class="bg-amber-50 rounded-t-3xl px-2 sm:px-4 py-2 sm:py-3 md:px-8 md:py-4 flex flex-wrap justify-between items-center border-b border-neutral-900"
  >
    <div class="flex items-center mb-2 sm:mb-0 flex-shrink-0">
      <img src="/logo.png" alt="Logo" class="h-9 sm:h-10 mr-2 sm:mr-3" />
      <div>
        <h1 class="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold leading-tight">
          STOUSTICE
        </h1>
        <p class="text-xxs sm:text-xs">Furniture store</p>
      </div>
    </div>
    <nav
      class="flex flex-col sm:flex-row items-center w-full sm:w-auto justify-between sm:justify-center flex-grow space-y-1 sm:space-y-0"
    >
      <ul
        class="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-3 lg:space-x-4 text-neutral-900 mx-auto"
      >
        <li><a href="#" class="font-bold text-xxs sm:text-xs md:text-sm lg:text-base">HOME</a></li>
        <li>
          <a href="#" class="font-bold text-xxs sm:text-xs md:text-sm lg:text-base">COLLECTIONS</a>
        </li>
        <li>
          <a href="#" class="font-bold text-xxs sm:text-xs md:text-sm lg:text-base">NEW ARRIVALS</a>
        </li>
      </ul>
      <div class="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 md:ml-3 lg:ml-4">
        <input
          type="text"
          placeholder="Search collections"
          class="border border-gray-300 rounded-xl pr-2 outline-none focus:border-gray-400 px-1 sm:px-2 py-0.5 text-xxs sm:text-xs md:text-sm lg:text-base w-full sm:w-auto"
        />
        <ul class="flex flex-col sm:flex-row items-center sm:space-x-2 space-y-1 sm:space-y-0">
          <li class="flex items-center">
            <img src="/cart.svg" alt="Cart" class="h-4 sm:h-5 md:h-6 mr-0.5 sm:mr-1" />
            <b class="text-xxs sm:text-xs md:text-sm text-slate-500 hover:text-black cursor-pointer"
              >0 kzt</b
            >
          </li>
          <li class="flex items-center">
            <img src="/heart.svg" alt="Heart" class="h-4 sm:h-5 md:h-6 mr-0.5 sm:mr-1" />
            <b class="text-xxs sm:text-xs md:text-sm text-slate-500 hover:text-black cursor-pointer"
              >Favorites</b
            >
          </li>
          <li class="flex items-center">
            <img src="/profile.svg" alt="Profile" class="h-4 sm:h-5 md:h-6 mr-0.5 sm:mr-1" />
            <b class="text-xxs sm:text-xs md:text-sm text-slate-500 hover:text-black cursor-pointer"
              >Profile</b
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

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
