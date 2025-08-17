<template>
  <div class="w-full min-h-screen bg-cover bg-center pb-[120px]"
       :style="{ backgroundImage: `url(${noise})` }">
    <div class="max-w-[1120px] mx-auto">
      <h1 class="text-2xl font-bold text-white text-center pt-[80px] pb-[40px]">
        Bajargan loyihalarimiz
      </h1>
      <div class="bg-[#1E1E1E] rounded-full p-1 flex gap-2 w-fit mx-auto border border-gray-500 mb-10">
        <button v-for="cat in categories" :key="cat" @click="selectedCategory = cat"
            class="px-6 py-2 rounded-full text-white font-medium transition"
            :class="selectedCategory === cat ? 'bg-gradient-to-r from-[#6911AD] to-[#4E11AD]'
            : 'hover:bg-[#2a2a2a]'">
          {{ cat }}
        </button>
      </div>
      <div class="grid grid-cols-3 gap-6">
        <div v-for="(img, index) in filteredImages" :key="index" class="relative">
          <img :src="img.src" :alt="img.alt" class="w-full h-64 object-cover rounded-lg"/>
          <button @click="toggleOverlay(index)" class="absolute top-3 right-3 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-full shadow-md">
            {{ img.category }}
          </button>
          <div v-if="activeImageIndex === index" class="absolute inset-2 bg-black/70 rounded-lg flex flex-col justify-between p-4 transition">
            <button @click="activeImageIndex = null" class="self-end text-white text-4xl">
              ↗
            </button>
            <p class="text-white font-semibold">{{ img.category }}</p>
          </div>
        </div>
      </div>
    </div>
    <Section></Section>
  </div>
</template>

<script setup>
import Section from '../components/section2.vue'
import { ref, computed } from "vue";

import phone from '../assets/phone.png';
import exportImg from '../assets/export.png';
import smm from '../assets/smm.png';
import child from '../assets/child.png';
import information from '../assets/information.png';
import ingenuity from '../assets/ingenuity.png';
import noise from '../assets/noise.png';

let images = [
  { src: phone, alt: 'Phone', category: "Mobil ilova" },
  { src: exportImg, alt: 'Export', category: "Veb sayt" },
  { src: smm, alt: 'SMM', category: "SMM" },
  { src: child, alt: 'Child', category: "Mobil ilova" },
  { src: information, alt: 'Information', category: "Veb sayt" },
  { src: ingenuity, alt: 'Ingenuity', category: "SMM" },
  { src: phone, alt: 'Phone2', category: "Mobil ilova" },
  { src: exportImg, alt: 'Export2', category: "Veb sayt" },
  { src: smm, alt: 'SMM2', category: "SMM" },
  { src: child, alt: 'Child2', category: "Mobil ilova" },
  { src: information, alt: 'Information2', category: "Veb sayt" },
  { src: ingenuity, alt: 'Ingenuity2', category: "SMM" },
];

let categories = ["Barchasi", "Veb sayt", "Veb dizayn", "SMM", "Mobil ilova"];
let selectedCategory = ref("Barchasi");

let activeImageIndex = ref(null);

function toggleOverlay(index) {
  activeImageIndex.value = (activeImageIndex.value === index) ? null : index;
}

let filteredImages = computed(() => {
  if (selectedCategory.value === "Barchasi") {
    return images;
  }
  if (selectedCategory.value === "Veb dizayn") {
    return images.filter(img => img.category === "Veb sayt");
  }
  return images.filter(img => img.category === selectedCategory.value);
});
</script>
