<script setup>
definePageMeta({
  layout: 'products',
});

const route = useRoute();
const { id } = route.params;
const uri = 'https://fakestoreapi.com/products/' + id;

// fetch the product
const { data: product } = await useFetch(uri);

if (!product.value) {
  // if the product is not found, throw a 404 error
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
    fatal: true,
  });
}
</script>

<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>
