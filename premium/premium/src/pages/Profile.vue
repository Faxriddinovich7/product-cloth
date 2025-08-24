<template>
  <main class="p-6">
    <h2 class="text-2xl font-semibold mb-4">Profile Sahifasi</h2>
    <div class="border rounded-lg p-6 shadow max-w-md bg-white">
      <img :src="avatar" alt="User avatar" class="w-24 h-24 rounded-full mb-4"/>
      <h3 class="font-bold text-xl">Muhammadali Ubaydullayev</h3>
      <p class="text-gray-600 mt-2">Premium foydalanuvchi</p>
      <Button>Profilda o‘zgartirish</Button>
    </div>
  </main>
</template>
<script setup>
import Button from '../components/Button.vue'
import avatar from '../assets/tony.jpg'
</script>
