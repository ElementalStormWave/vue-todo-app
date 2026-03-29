<script setup>
import { useTodoStore } from './stores/todoStore';
const store = useTodoStore()
</script>

<template>
  <header>
    <nav>
      <router-link to="/">Список покупок ({{ store.totalItems }})</router-link>
      <router-link to="/about">О приложении</router-link>
    </nav>
  </header>

  <main>
    <router-view />
  </main>
</template>