<script setup>
const props = defineProps({
  error: {
    type: Object,
  },
});

const handleClearError = () => clearError({ redirect: '/' });
</script>

<template>
  <div class="card mt-7 max-w-sm mx-auto text-center">
    <p class="mt-7 text-7xl font-bold">{{ error.status }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7">{{ error.message }}</p>
    <button @click="handleClearError" class="btn my-7">Go back home</button>
  </div>
</template>
