<script setup>
const { data } = await useFetch('/api/ninja?name=mario', {
  method: 'post',
  body: { age: 30 },
});
</script>

<template>
  <h1>About</h1>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi dolores aperiam est nesciunt fuga explicabo illo
    omnis perspiciatis consectetur dolorum fugiat maxime ipsam ipsum asperiores, minus expedita tenetur rerum magnam.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iste nemo ipsum libero fugit aliquam blanditiis,
    deleniti vel voluptatem quasi, voluptates recusandae nulla ea. Excepturi autem laboriosam officiis expedita minus!
  </p>
  <p>{{ data }}</p>
</template>
