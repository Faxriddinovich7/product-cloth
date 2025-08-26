<template>
  <div>
    <Header />
    <main class="p-6">
      <h2 class="text-2xl font-semibold mb-4">Support Sahifasi</h2>
      <form class="max-w-md space-y-4">
        <input type="text" placeholder="Ismingiz" class="w-full border px-3 py-2 rounded"/>
        <input type="email" placeholder="Email" class="w-full border px-3 py-2 rounded"/>
        <textarea placeholder="Savol..." class="w-full border px-3 py-2 rounded h-28"></textarea>
        <Button id="support-submit">Yuborish</Button>
      </form>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import Button from '../components/button.vue'
</script>
