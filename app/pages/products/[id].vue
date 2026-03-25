<script setup>
definePageMeta({
  layout: 'products',
});

const { id } = useRoute().params;
</script>

<template>
  <p>Products details for {{ id }}</p>
</template>
