<template>
  <div class="min-h-screen flex items-center justify-center bg-[#f2f4f6]">
    <div class="bg-white rounded-2xl shadow-xl w-[350px] md:w-[400px] p-6 relative">

      <h2 class="text-2xl font-semibold text-center mb-4">Sign in</h2>

      <div class="flex justify-between gap-4 mb-4 text-gray-500 grid grid-cols-1 gap-6">
        <button class="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-2 hover:bg-gray-100 transition">
          <img src="../assets/img/google.svg" alt="Google" class="w-5 h-5">
          Continue with Google
        </button>
        <button class="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-2 hover:bg-gray-100 transition">
          <img src="../assets/img/facebook.svg" alt="Facebook" class="w-5 h-5">
          Continue with Facebook
        </button>
        <button class="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-2 hover:bg-gray-100 transition">
          <img src="../assets/img/apple.svg" alt="Apple" class="w-5 h-5">
          Continue with Apple
        </button>
      </div>
      <p class="text-center pb-4 text-gray-500">OR</p>
      <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
        <input
            v-model="email"
            type="email"
            placeholder="Enter your email address"
            class="border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-purple-500"
        />

        <input
            v-model="password"
            type="password"
            placeholder="Enter your password"
            class="border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-purple-500"
        />

        <button type="submit" class="bg-purple-600 text-white rounded-xl py-2 hover:bg-purple-700 transition">
          Sign in
        </button>
      </form>
      <p v-if="error" class="text-red-500 text-center mt-2">{{ error }}</p>
      <div class="my-2 text-gray-400">Forgot your password?</div>
      <div class="border-t border-gray-300 my-2"></div>

      <p class="text-center text-gray-500 mt-6 text-sm">
        Don't have an account?
        <a href="#" class="text-blue-600 font-medium"> Sign up</a>
      </p>
      <p class="text-gray-500 text-center mt-4">TodoList Support</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');
const error = ref('');

const correctEmail = 'ubaydullayevm500@gmail.com';
const correctPassword = 'ubaydullayevm7';

function handleLogin() {
  if(email.value === correctEmail && password.value === correctPassword){
    router.push('/todo');
  } else {
    error.value = 'Email yoki parol noto‘g‘ri!';
  }
}
</script>
