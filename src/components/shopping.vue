<template>
  <div class="flex gap-8 mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
      <div v-for="(product, index) in products" :key="index" class="bg-white p-4 shadow rounded-xl flex flex-col">
        <div class="w-full h-64 overflow-hidden  flex">
          <img :src="product.image" alt="" class="w-full h-full object-cover" />
          <span class="position: absolute text-bold text-gray-500 ml-[230px]">x</span>
          <div class=" mt-6 ml-4 ">
            <span class="text-sm font-bold  px-3 ">{{ product.size }}</span>
            <div class="flex flex-col items-center mt-4">
              <div class="bg-black px-2 mb-4">1</div>
              <button class="bg-gray-100 px-2 py-1" @click="product.quantity++">+</button>
              <span>{{ product.quantity }}</span>
              <button class="bg-gray-100 px-2 py-1" @click="product.quantity > 0 ? product.quantity-- : 1">-</button>
              <img :src="product.refresh" alt="Product image" class="w-5 h-5 mt-4" />
            </div>
          </div>
        </div>
        <p class="text-sm text-gray-500 mt-2">{{ product.category }}</p>
        <div class="flex items-center justify-between mt-1">
          <span class="font-semibold">{{ product.name }}</span>
          <span class="font-semibold">${{ product.price * product.quantity }}</span>
        </div>
      </div>
    </div>
    <div class="bg-white p-6 shadow rounded-xl w-80 h-fit">
      <h2 class="text-lg font-semibold mb-4">Order Summary</h2>
      <div class="flex justify-between mb-2" v-for="(product, index) in products" :key="'summary' + index">
        <span>{{ product.name }} {{ product.quantity }}</span>
        <span>${{ product.price * product.quantity }}</span>
      </div>
      <hr class="my-4" />
      <div class="flex justify-between font-bold">
        <p>Total<span class=" text-gray-400"> (Tax incl.)</span></p>
        <span>${{ totalPrice }}</span>
      </div>
      <div class="mt-4 flex items-center gap-2">
        <input type="checkbox" id="agree" class="w-4 h-4">
        <label for="agree" class="text-sm text-gray-400">
          I agree to the Terms & Conditions
        </label>
      </div>
      <button class="mt-4 bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 w-full disabled:opacity-50 disabled:cursor-not-allowed">
        Checkout
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import shirt from "../assets/shirt.png";
import shirt2 from "../assets/shirt2.png";
import shirt3 from "../assets/shirt3.png";
import refresh from "../assets/refresh.svg";

let products = ref([
  { name: "T-shirt Black", category: "Clothing", price: 99, size: "L", quantity: 1, image: shirt,refresh: refresh },
  { name: "T-shirt Black", category: "Clothing", price: 99, size: "L", quantity: 1, image: shirt2,refresh: refresh },
  { name: "T-shirt Black", category: "Clothing", price: 120, size: "L", quantity: 1, image: shirt3,refresh: refresh }
]);

let totalPrice = computed(() =>
    products.value.reduce((sum, p) => sum + p.price * p.quantity, 0)
);

</script>
