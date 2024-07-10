<script setup></script>

<template>
  <section
    class="banner bg-gradient-to-r from-zinc-900 to-zinc-800 px-8 md:px-36 py-20 flex flex-col items-center"
  >
    <div class="text-center mb-10">
      <h2 class="text-4xl font-bold mb-4 text-slate-200">LOTUS DESIGN</h2>
      <p class="text-lg text-zinc-300">
        Welcome to our serene and stylish living room showcase, where modern elegance meets cozy
        comfort. This thoughtfully designed space features a harmonious blend of contemporary
        furniture and decor, creating an inviting atmosphere perfect for relaxation and social
        gatherings.
      </p>
    </div>
    <div class="flex flex-col md:flex-row items-center">
      <img
        src="/banner.jpg"
        alt="Lotus Design"
        class="w-full md:w-1/2 mb-6 md:mb-0 md:mr-6 rounded-3xl"
      />
      <div class="text-left">
        <h3 class="text-2xl font-bold mb-4 text-slate-200">Elegance Reimagined</h3>
        <p class="text-lg text-zinc-300 mb-6">
          Crafted with precision for those who appreciate the finer aspects of modern living spaces.
        </p>
        <button class="bg-white text-black px-8 py-2 rounded-xl">Shop This Look</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 768px) {
  .banner {
    padding: 10px 20px;
  }
  .text-center {
    margin-bottom: 20px;
  }
  img {
    width: 100%;
  }
}
</style>
