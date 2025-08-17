<template>
  <header class="bg-[#17191DB2] p-4">
    <div class="max-w-[1120px] mx-auto flex items-center justify-between gap-4">
      <h1 class="text-white text-2xl ">Logo</h1>
      <nav class="text-white flex gap-6">
        <p>О компании</p>
        <p>Портфолио</p>
        <p>Услуги</p>
        <p>Контакты</p>
      </nav>
      <div class="flex items-center gap-4">
        <img :src="moon" alt="moon" />

        <div class="text-white text-sm leading-tight">
          <p>+998 90 777-77-77</p>
          <p>chotatam@gmail.com</p>
        </div>
        <button class="bg-[#6911AD] h-10 w-[150px] rounded text-white">
          Заказать звонок
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import moon from "../assets/moon.svg";
</script>
