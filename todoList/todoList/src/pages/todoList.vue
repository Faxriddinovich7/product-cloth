<template>
  <div class="min-h-screen bg-white">
    <!-- Header: search so'zni emit qiladi -->
    <Header @update:search="searchQuery = $event" />

    <div class="mx-auto min-h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${Bgimg})`}">
      <section class="flex items-center justify-between px-6 pt-8">
        <div>
          <p class="text-white text-3xl font-bold">
            You’ve got <span class="text-purple-700">{{ filteredTodos.length }} task</span> today
          </p>
        </div>
        <div class="flex gap-4 items-center">
          <select
              name="task"
              id="task"
              class="p-2 w-[150px] rounded-xl text-gray-700 focus:outline-none border border-gray-300"
          >
            <option value="text">Your task today</option>
            <option value="category">Category</option>
            <option value="tasks">Tasks</option>
          </select>
          <button
              @click="goToAdd"
              class="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl transition"
          >
            <img src="../assets/img/plus.svg" alt="Plus" class="w-4 h-4" />
            Add New
          </button>
        </div>
      </section>

      <!-- Todos ro'yxati -->
      <section class="px-6 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
            v-for="todo in filteredTodos"
            :key="todo.id"
            class="bg-white p-4 rounded-xl mb-4 shadow"
        >
          <div class="flex gap-4 items-start">
            <img :src="todo.image" alt="Todo image" class="w-20 h-20 object-cover rounded-full border" />
            <div class="flex-1">
              <h2 class="text-lg font-bold text-gray-800">{{ todo.fullName }}</h2>
              <p class="text-gray-600 mt-1">{{ todo.about }}</p>
            </div>
          </div>

          <button
              @click="deleteTodo(todo.id)"
              class="mt-4 w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
          >
            Delete
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import Bgimg from '../assets/img/baground.png'
import Header from '../components/Header.vue'
import { useRouter } from 'vue-router'
import { ref, onMounted, computed } from 'vue'

const router = useRouter()
const todos = ref([])
const searchQuery = ref('')

onMounted(() => {
  const saved = JSON.parse(localStorage.getItem('todos')) || []
  todos.value = saved
})

const filteredTodos = computed(() => {
  if (!searchQuery.value.trim()) {
    return todos.value
  }
  return todos.value.filter(todo =>
      todo.fullName.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

function goToAdd() {
  router.push('/addNow')
}

function deleteTodo(id) {
  todos.value = todos.value.filter(todo => todo.id !== id)
  localStorage.setItem('todos', JSON.stringify(todos.value))
}
</script>
