import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useTodoStore = defineStore('todo', ()=> {
    const items = ref([])

    const totalItems = computed(() => {
    return items.value.length;
    })

    const clearItems =() => { items.value = [] }

    watch(items, () => {
    localStorage.setItem('my-todo-list', JSON.stringify(items.value))
    }, { deep : true })


    return {
        items,
        totalItems,
        clearItems,
    }
})