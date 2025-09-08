<template>
  <header class="flex items-center justify-between px-4 py-4 bg-gray-50 mb-6 relative">
    <!-- Left: menu + nav + language -->
    <div class="flex items-center gap-6">
      <img :src="line" alt="menu" class="w-6 h-6" />

      <div class="hidden sm:flex items-center gap-6">
        <Language />

        <nav class="flex space-x-6 text-sm font-semibold text-gray-800">
          <p>{{ t('Home') }}</p>
          <p>{{ t('Collections') }}</p>
          <p>{{ t('New') }}</p>
        </nav>
      </div>
    </div>

    <!-- Right: icons + cart -->
    <div class="flex items-center space-x-2">
      <img :src="shop" alt="shop" class="w-10 h-10" />
      <button class="hidden sm:flex w-16 h-10 items-center justify-center bg-black rounded-full text-white hover:bg-gray-800">
        Cart
      </button>
      <img :src="like" alt="like" class="hidden sm:flex w-10 h-10" />
      <img :src="people" alt="people" class="w-10 h-10" />
    </div>
    <img :src="blackWhite" alt="logo" class="w-10 h-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-[360px]:block hidden" />
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import line from "../assets/line.svg";
import like from "../assets/like.svg";
import shop from "../assets/shop.svg";
import people from "../assets/people.svg";
import blackWhite from "../assets/blackWhite.svg";
import Language from './language.vue';

const { t } = useI18n();
</script>
