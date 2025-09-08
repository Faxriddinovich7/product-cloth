<template>
  <select v-model="changeLanguageValue" @change="changeLocale" class="text-black border border-gray-300 rounded p-1">
    <option v-for="language in languageValue" :key="language.value" :value="language.value">
      {{ language.label }}
    </option>
  </select>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const languageValue = [
  { value: 'en', label: 'English' },
  { value: 'uz', label: 'Uzbek' },
  { value: 'ru', label: 'Russian' }
];

const changeLanguage = localStorage.getItem('language') || 'uz';
const changeLanguageValue = ref(changeLanguage);
locale.value = changeLanguageValue.value;

function changeLocale() {
  locale.value = changeLanguageValue.value;
  localStorage.setItem('language', changeLanguageValue.value);
}
</script>
