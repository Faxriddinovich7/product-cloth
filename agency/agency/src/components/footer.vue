<template>
<footer class="bg-[#17191DB2] p-10 rounded-xl border-t border-gray-400/50">
  <div class="max-w-[1120px] mx-auto flex items-center justify-between gap-4 text-white">
    <h1 class="text-white text-4xl	font-semibold tracking-widest">LOGO</h1>
    <div class="flex items-center justify-between gap-4">
      <div>
        <img :src="location" alt="location" class="object-cover " />
      </div>
      <p>Manzil:  Toshkent shahri, Sergeli tumani, Navro’z ko’cha 3-uy.<br/>
      Mo’ljal:  “ASIA AUTO” avtosalon ichki qismi</p>
    </div>
     <div>
       <div class="flex items-center justify-between gap-4" >
         <img :src="telephone" alt="telephone" class="object-cover " />
         <span>+998 99 999 99 99</span>
       </div>
       <div class="flex items-center justify-between gap-4" >
         <img :src="telephone" alt="telephone" class="object-cover " />
         <span>+998 99 999 99 99</span>
       </div>
     </div>
    <div class="flex items-center justify-between gap-4" >
      <img :src="telegram" alt="telegram" class="object-cover " />
      <img :src="facebook" alt="facebook" class="object-cover " />
      <img :src="instagram" alt="instagram" class="object-cover " />
    </div>
  </div>
</footer>
</template>


<script setup>
import telephone from "../assets/telephone.svg"
import location from "../assets/location.svg";
import telegram from "../assets/telegram.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
</script>