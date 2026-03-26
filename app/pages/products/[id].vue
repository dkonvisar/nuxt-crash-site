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
    <Head>
      <Title>Nuxt Crash Course | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>
