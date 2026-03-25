<script setup>
const route = useRoute();
const { id } = route.params;
</script>

<template>
  <p>Products details for {{ id }}</p>
</template>
