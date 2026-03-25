<script setup>
definePageMeta({
  layout: 'products',
});

const { id } = useRoute().params;
</script>

<template>
  <h1>Products details for {{ id }}</h1>
</template>
