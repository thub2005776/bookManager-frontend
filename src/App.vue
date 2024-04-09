<script setup>
import { RouterView } from 'vue-router'
import { Header } from './components'

</script>

<template>
  <Header></Header>
  <div class="mt-20 mx-5">
    <RouterView />
  </div>
</template>