<template>
  <header class="flex items-center justify-between px-4 py-4 bg-gray-50 mb-6 relative">
    <div class="flex items-center justify-between gap-[100px]">
      <img :src="line" alt="menu" class="w-6 h-6" />
      <div class="hidden sm:flex items-center gap-6">
        <nav class="flex space-x-6 text-sm font-semibold text-gray-800">
          <p>Home</p>
          <p>Collections</p>
          <p>New</p>
        </nav>
      </div>
    </div>

    <div class="flex items-center space-x-2">
      <img :src="shop" alt="shop" class="w-10 h-10" />
      <button class=" hidden sm:flex w-16 h-10 flex items-center justify-center bg-black rounded-full text-white">
        cart
      </button>
      <img :src="like" alt="like" class="hidden sm:flex w-10 h-10" />
      <img :src="people" alt="people" class="w-10 h-10" />
    </div>
    <img :src="blackWhite" alt="blackWhite" class="w-10 h-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-[360px]:block hidden"/>
  </header>
</template>

<script setup>
import line from "../assets/line.svg";
import like from "../assets/like.svg";
import shop from "../assets/shop.svg";
import people from "../assets/people.svg";
import blackWhite from "../assets/blackWhite.svg";
</script>
