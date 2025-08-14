<template>
  <div class="bg-white p-6 shadow rounded-xl w-full sm:w-80 h-fit mt-6 sm:mt-0">
    <h2 class="text-lg font-semibold mb-4">Order Summary</h2>

    <div class="flex justify-between mb-2" v-for="(product, index) in products" :key="'summary' + index">
      <span>{{ product.name }} {{ product.quantity }}</span>
      <span>${{ product.price * product.quantity }}</span>
    </div>
    <hr class="my-4" />
    <div class="flex justify-between font-bold">
      <p>Total<span class="text-gray-400"> (Tax incl.)</span></p>
      <span>${{ totalPrice }}</span>
    </div>
    <div class="mt-4 flex items-center gap-2">
      <input type="checkbox" id="agree" class="w-4 h-4">
      <label for="agree" class="text-sm text-gray-400">
        I agree to the Terms & Conditions
      </label>
    </div>
    <button
        class="mt-4 bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 w-full ">
      Checkout
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";

let props = defineProps(['products']);

let totalPrice = computed(() =>
    props.products.reduce((sum, p) => sum + p.price * p.quantity, 0)
);
</script>
