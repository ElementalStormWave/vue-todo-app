<script setup>
import { ref, computed, watch, onMounted } from 'vue';

import ListItem from './components/ListItem.vue';

const items = ref([]);
const newItem = ref('');

const totalItems = computed(() => {
  return items.value.length;
})

const isButtonDisabled = computed(() => newItem.value === '');

const addItem = () => {
  items.value.push(newItem.value)
  newItem.value = ''
}

const removeItem = (index) => {
  items.value.splice(index, 1)
}

onMounted(() => {
  const savedItems = localStorage.getItem('my-todo-list')

  if (savedItems) {
    items.value = JSON.parse(savedItems)
  }
})

watch(items, () => {
  localStorage.setItem('my-todo-list', JSON.stringify(items.value))
}, { deep : true })

</script>
  
<template>
  <h2>Список покупок</h2>
  <p>Всего покупок: {{ totalItems }}</p>
  <input v-model="newItem" type="text" placeholder="Введите продукт" />
  <button :disabled="isButtonDisabled" @click="addItem">Добавить</button>
  <ul>
    <ListItem
      v-for="(item, index) in items"
      :key="index"
      :name="item"
      :number="index + 1"
      @remove="removeItem(index)"
    />
  </ul>
</template>