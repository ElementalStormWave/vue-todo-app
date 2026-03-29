<script setup>

defineProps({
  name: String,
  number: Number
})

const emit = defineEmits(['remove'])
</script>

<template>
  <li>
    {{ number }}. {{ name }} <button @click="emit('remove')">x</button>
  </li>
</template>