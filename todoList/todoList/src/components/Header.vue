<template>
  <div class="w-full px-6 py-4 bg-black">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <img src="../assets/img/cloud.svg" alt="Cloud" class="w-6 h-6" />
          <div>
            <span class="text-purple-700 font-semibold">Todo</span>
            <span class="font-medium text-white">List</span>
          </div>
        </div>

        <!-- Search input -->
        <div class="relative">
          <img
              src="../assets/img/search.svg"
              alt="Search Icon"
              class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
          />
          <input
              v-model="searchQuery"
              type="text"
              placeholder="Search for any training you want"
              class="text-white pl-10 pr-4 py-2 placeholder-gray-400 text-sm w-[250px] md:w-[300px] bg-transparent focus:outline-none border-none"
          />
        </div>
      </div>

      <div class="flex items-center gap-6 relative">
        <img src="../assets/img/notifications.svg" alt="Notifications" class="w-5 h-5 cursor-pointer" />

        <div class="relative">
          <img
              src="../assets/img/profile.svg"
              alt="Profile"
              class="w-6 h-6 cursor-pointer rounded-full"
              @click="toggleLogout"
          />
          <div
              v-if="showLogout"
              class="absolute right-0 mt-2 w-24 bg-red-500 text-white text-center rounded shadow cursor-pointer hover:bg-red-600"
              @click="logout"
          >
            Log out
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showLogout = ref(false)
const searchQuery = ref('')

// 🔄 searchQuery ni parent (TodoList.vue) ga yuborish
const emit = defineEmits(['update:search'])
watch(searchQuery, (val) => {
  emit('update:search', val)
})

function toggleLogout() {
  showLogout.value = !showLogout.value
}

function logout() {
  router.push('/login')
  showLogout.value = false
}
</script>
