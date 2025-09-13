<template>
  <div class="min-h-screen bg-white">
    <Header />
    <div class="mx-auto min-h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${Bgimg})`}">
      <div class="max-w-[1320px] mx-auto px-6 py-4 space-y-4">
        <div class="flex items-center justify-between">
          <h2 class="text-3xl font-bold text-white">
            Create a new <span class="text-red-400">task</span>
          </h2>
          <div class="flex items-center gap-x-2">
            <button
                @click="addTodo"
                class="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl transition"
            >
              <img src="../assets/img/plus.svg" alt="Plus" class="w-4 h-4" />
              Add TodoList
            </button>
            <button
                @click="goToTodo"
                class="gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl transition"
            >
              Back to the TodoList
            </button>
          </div>
        </div>

        <!-- FULL NAME INPUT -->
        <input
            v-model="fullName"
            type="text"
            placeholder="Enter your full name here..."
            class="w-full py-3 px-4 placeholder-gray-500 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
        />

        <!-- RICH TEXT EDITOR -->
        <div
            ref="quillEditor"
            class="h-40 bg-white border border-gray-300 rounded-md"
        ></div>

        <!-- IMAGE UPLOAD -->
        <div
            class="bg-white w-full h-56 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center cursor-pointer hover:border-purple-400 transition relative overflow-hidden"
        >
          <input type="file" @change="handleFile" class="absolute inset-0 opacity-0 cursor-pointer" />
          <div class="flex flex-col items-center pointer-events-none">
            <img src="../assets/img/export.svg" alt="Upload" class="w-12 h-12 mb-2 opacity-70" />
            <p class="text-gray-500 text-sm">Drag image</p>
            <p class="text-gray-500 text-sm">
              or browse to <span class="text-purple-500">select file</span>
            </p>
          </div>
        </div>

        <!-- IMAGE PREVIEW -->
        <div v-if="selectedImage" class="relative mt-4 inline-block">
          <img :src="selectedImage" alt="Preview" class="w-40 h-40 object-cover rounded-md border border-gray-300" />
          <button
              @click="removeImage"
              class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import Bgimg from "../assets/img/baground.png";

const router = useRouter()
const fullName = ref('')
const about = ref('')
const selectedImage = ref(null)
const quillEditor = ref(null)
let quill

onMounted(() => {
  quill = new Quill(quillEditor.value, {
    theme: 'snow',
    placeholder: 'Enter about task...'
  })
  quill.on('text-change', () => {
    about.value = quill.root.innerHTML
  })
})

const handleFile = e => {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    selectedImage.value = reader.result
  }
  reader.readAsDataURL(file)
}

const clearForm = () => {
  fullName.value = ''
  about.value = ''
  selectedImage.value = null
  quill.setText('')
}

const addTodo = () => {
  if (!fullName.value || !about.value || !selectedImage.value) return

  const todos = JSON.parse(localStorage.getItem('todos') || '[]')
  todos.push({
    id: Date.now(),
    fullName: fullName.value,
    about: about.value,
    image: selectedImage.value
  })
  localStorage.setItem('todos', JSON.stringify(todos))

  clearForm()
  router.push('/todo')
}

const goToTodo = () => router.push('/todo')
const removeImage = () => (selectedImage.value = null)
</script>
