<script setup>
import Header from './components/app/header/header.vue';
import Footer from './components/app/footer/Footer.vue';
</script>

<template>
  <Header />

  <main>
    <slot></slot>
    <router-view></router-view>
  </main>

  <Footer />
</template>