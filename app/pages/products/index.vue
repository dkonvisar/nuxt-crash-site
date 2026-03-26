<script setup>
definePageMeta({
  layout: 'products',
});

// fetch products data from the API
const { data: products } = await useFetch('https://fakestoreapi.com/products');

useHead({
  title: 'Nuxt Crash Course | Merch',
  meta: [
    {
      name: 'description',
      content: 'Nuxt 3 Merch',
    },
  ],
});
</script>

<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>
