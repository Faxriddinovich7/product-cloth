<template>
  <div class="max-w-[1120px] mx-auto flex items-start justify-between gap-10 mt-[120px] rounded-xl border border-gray-500/50">
    <div class="grid grid-cols-2  bg-[#0E1014E5] rounded-xl  p-1 flex gap-12 w-fit ">
      <div class="ml-[80px] text-white mt-[60px]">
        <i class="font-medium block mb-6">
          Sizni bir finjon qahva ustida loyihangizni <br>
          batafsil muhokama qilishga mamnuniyat ila <br>
          taklif qilamiz.
        </i>
        <div class="space-y-3 mb-6 flex grid grid-rows-3">
          <input type="text" placeholder="Ismingiz"
                 class="w-[340px] bg-transparent border-b border-gray-500 px-2 py-2 text-sm text-white focus:outline-none focus:border-purple-500" />

          <input type="text" placeholder="Telefon raqamingiz"
                 class="w-[340px] bg-transparent border-b border-gray-500 px-2 py-2 text-sm text-white focus:outline-none focus:border-purple-500" />

          <input type="text" placeholder="G'oyangiz xaqida qisqacha (Muhim emas)"
                 class="w-[340px] bg-transparent border-b border-gray-500 px-2 py-2 text-sm text-white focus:outline-none focus:border-purple-500" />
        </div>
        <h2 class="font-medium mb-4">Qanday xizmatlardan foydalanishni xoxlaysiz?</h2>
        <div class="grid grid-cols-2 gap-y-3 gap-x-6 gap-y-6 text-sm">
          <label class="flex items-center gap-2">
            <input type="checkbox" class="w-4 h-4 accent-purple-500">
            <span>Backend</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" class="w-4 h-4 accent-purple-500">
            <span>Frontend</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" class="w-4 h-4 accent-purple-500">
            <span>CRM ishlab chiqish</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" class="w-4 h-4 accent-purple-500">
            <span>Grafik dizayn</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" class="w-4 h-4 accent-purple-500">
            <span>Internet magazin ishlab chiqish</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" class="w-4 h-4 accent-purple-500">
            <span>Motion dizayn</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" class="w-4 h-4 accent-purple-500">
            <span>Logotip va Brandbook</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" class="w-4 h-4 accent-purple-500">
            <span>Mobil ilova ishlab chiqish</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" class="w-4 h-4 accent-purple-500">
            <span>Portal ishlab chiqish</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" class="w-4 h-4 accent-purple-500">
            <span>Veb sayt ishlab chiqish</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" class="w-4 h-4 accent-purple-500">
            <span>Veb dizayn</span>
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" class="w-4 h-4 accent-purple-500">
            <span>SMM dizayn</span>
          </label>
          <label class="flex items-center gap-2 mb-[60px]">
            <input type="checkbox" class="w-4 h-4 accent-purple-500">
            <span >Mobilograf</span>
          </label>
        </div>
      </div>
      <div class=" ml-[100px] text-white bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 shadow-[8px_8px_25px_rgba(255,255,255,0.1)] w-[360px] h-[460px] mt-[110px]">
        <h3 class="mb-4 text-center text-xl">Nimani ma’qul ko‘rasiz?</h3>
        <div class="grid grid-cols-2 gap-6">
          <div class="flex flex-col items-center">
            <div class="w-28 h-28 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
              <img :src="blackCoffee" alt="Achchiq kofe" class="object-cover w-full h-full" />
            </div>
            <span class="mt-2">Achchiq kofe</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-28 h-28 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
              <img :src="whiteCoffee" alt="Sutli kofe" class="object-cover w-full h-full" />
            </div>
            <span class="mt-2">Sutli kofe</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-28 h-28 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
              <img :src="water" alt="Suv" class="object-cover w-full h-full" />
            </div>
            <span class="mt-2">Suv</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-28 h-28 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
              <img :src="tea" alt="Choy" class="object-cover w-full h-full" />
            </div>
            <span class="mt-2">Choy</span>
          </div>
          <div class="mt-24">
            <img :src="logo" alt="Suv" class="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import blackCoffee from "../assets/blackcoffe.png";
import whiteCoffee from "../assets/whiteCoffe.png";
import water from "../assets/water.png";
import tea from "../assets/tea.png";
import logo from "../assets/logo.png";

</script>

