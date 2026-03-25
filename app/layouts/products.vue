<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/products">Merch</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <!-- Output the page content -->
  <main>
    <slot />
  </main>

  <footer>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/products">Products</NuxtLink></li>
    </ul>
  </footer>
</template>
