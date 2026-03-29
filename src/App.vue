<script setup>
import { useTodoStore } from './stores/todoStore';
const store = useTodoStore()
</script>

<template>
  <div class="container">
    <header>
      <nav>
        <ul>
          <li><strong>Мой Vue Проект</strong></li>
        </ul>
        <ul>
          <li><router-link to="/">Список ({{ store.totalItems }})</router-link></li>
          <li><router-link to="/about">О приложении</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>