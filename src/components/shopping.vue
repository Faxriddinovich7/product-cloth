<template>
  <clothingHead/>
  <div class="flex gap-8 mx-auto flex-wrap lg:flex-nowrap justify-center">

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
      <div v-for="(product, index) in products" :key="index" class="bg-white p-4 shadow rounded-xl flex flex-col relative">
        <div class="w-full h-64 overflow-hidden flex relative">
          <img :src="product.image" alt="" class="w-full h-full object-cover" />
          <span class="absolute right-8 font-bold text-gray-500 cursor-pointer">x</span>
          <img :src="product.heartClicked ? heartRed : heart" @click="product.heartClicked = !product.heartClicked" class="absolute bottom-0 right-12 w-6 h-6 cursor-pointer" alt="Heart"/>
          <div class="mt-6 ml-4">
            <span class="text-sm font-bold px-3">{{ product.size }}</span>
            <div class="flex flex-col items-center mt-4">
              <div class="bg-black px-2 mb-4">1</div>
              <button class="bg-gray-100 px-2 py-1" @click="product.quantity++">+</button>
              <span>{{ product.quantity }}</span>
              <button class="bg-gray-100 px-2 py-1" @click="product.quantity > 0 ? product.quantity-- : 1">-</button>
              <img :src="product.refresh" alt="Product image" class="w-5 h-5 mt-4" />
            </div>
          </div>
        </div>
        <p  class="text-sm text-gray-500 mt-2">{{ product.category }}</p>
        <div class="flex items-center justify-between mt-1">
          <span class="font-semibold">{{ product.name }}</span>
          <span class="font-semibold">${{ product.price * product.quantity }}</span>
        </div>
      </div>
    </div>
    <OrderSummary :products="products" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import OrderSummary from "./orderSummary.vue";
import clothingHead from "./clothingHead.vue";

import shirt from "../assets/shirt.png";
import shirt2 from "../assets/shirt2.png";
import shirt3 from "../assets/shirt3.png";
import refresh from "../assets/refresh.svg";
import heart from "../assets/heart2.jpg";
import heartRed from "../assets/heart.png";

let products = ref([
  { name: "T-shirt Black", category: "Clothing", price: 99, size: "L", quantity: 1, image: shirt, refresh, heartClicked: false },
  { name: "T-shirt Black", category: "Clothing", price: 99, size: "L", quantity: 1, image: shirt2, refresh, heartClicked: false },
  { name: "T-shirt Black", category: "Clothing", price: 120, size: "L", quantity: 1, image: shirt3, refresh, heartClicked: false }
]);


</script>
