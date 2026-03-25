<script setup>
definePageMeta({
  layout: 'products',
});

const { id } = useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + id;

// fetch the product
const { data: product } = await useFetch(uri);
</script>

<template>
  <div>
    <p>Id: {{ product.id }}</p>
    <p>Title: {{ product.title }}</p>
    <p>Price: {{ product.price }}</p>
  </div>
</template>
