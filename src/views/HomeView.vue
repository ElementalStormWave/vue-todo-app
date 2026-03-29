<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import ListItem from '../components/ListItem.vue';
import { useTodoStore } from '@/stores/todoStore';

const store = useTodoStore()
const newItem = ref('');

const isButtonDisabled = computed(() => newItem.value === '');

const addItem = () => {
  store.items.push(newItem.value)
  newItem.value = ''
}

const removeItem = (index) => {
  store.items.splice(index, 1)
}

onMounted(() => {
  const savedItems = localStorage.getItem('my-todo-list')

  if (savedItems) {
    store.items = JSON.parse(savedItems)
  }
})
</script>
  
<template>
  <h2>Список покупок</h2>
  <p>Всего покупок: {{ store.totalItems }}</p>
  <input v-model="newItem" type="text" placeholder="Введите продукт" />
  <button :disabled="isButtonDisabled" @click="addItem">Добавить</button>
  <ul>
    <ListItem
      v-for="(item, index) in store.items"
      :key="index"
      :name="item"
      :number="index + 1"
      @remove="removeItem(index)"
    />
  </ul>
</template>