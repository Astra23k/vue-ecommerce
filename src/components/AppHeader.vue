<script setup></script>

<template>
  <header
    class="bg-amber-50 rounded-t-3xl px-8 md:px-36 py-6 flex flex-wrap justify-between items-center border-b border-neutral-900"
  >
    <div class="flex items-center mb-4 md:mb-0">
      <img src="/logo.png" alt="Logo" class="h-11 mr-3" />
      <div>
        <h1 class="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">STOUSTICE</h1>
        <p class="text-xs md:text-sm">Furniture store</p>
      </div>
    </div>
    <nav
      class="flex flex-col md:flex-row items-center w-full md:w-auto justify-between md:justify-center flex-grow"
    >
      <ul
        class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16 text-neutral-900 mb-4 md:mb-0 mx-auto"
      >
        <li><a href="#" class="font-bold text-sm md:text-base">HOME</a></li>
        <li><a href="#" class="font-bold text-sm md:text-base">COLLECTIONS</a></li>
        <li><a href="#" class="font-bold text-sm md:text-base">NEW ARRIVALS</a></li>
      </ul>
      <div class="flex flex-col md:flex-row items-center">
        <input
          type="text"
          placeholder="Search our collections"
          class="border border-gray-300 rounded-full px-4 py-1 mr-0 md:mr-6 mb-4 md:mb-0"
        />
        <ul class="flex flex-col md:flex-row items-center md:space-x-6">
          <li class="flex items-center mb-2 md:mb-0">
            <img src="/cart.svg" alt="Cart" class="h-7 mr-2" />
            <b class="text-sm md:text-base text-slate-500 hover:text-black cursor-pointer">0 kzt</b>
          </li>
          <li class="flex items-center mb-2 md:mb-0">
            <img src="/heart.svg" alt="Heart" class="h-7 mr-2" />
            <b class="text-sm md:text-base text-slate-500 hover:text-black cursor-pointer"
              >Favorites</b
            >
          </li>
          <li class="flex items-center mb-2 md:mb-0">
            <img src="/profile.svg" alt="Profile" class="h-7 mr-2" />
            <b class="text-sm md:text-base text-slate-500 hover:text-black cursor-pointer"
              >Profile</b
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
