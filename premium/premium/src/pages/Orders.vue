<template>
  <div>
    <Header />
    <main class="p-6">
      <h2 class="text-2xl font-semibold mb-4">Orders Sahifasi</h2>
      <ul class="space-y-3">
        <li v-for="n in 5" :key="n" class="border p-3 rounded shadow hover:shadow-lg">
          Buyurtma {{ n }} <Button>Ko‘rish</Button>
        </li>
      </ul>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Button from '../components/Button.vue'
</script>
