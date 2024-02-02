<template>
  <navbar_product />
  <div class="container">
   <router-view />
  </div>
</template>

<script setup>

import { onMounted} from 'vue'
import navbar_product from './components/navbar_product.vue'


//Use Product Store
import { userProductStore } from './store/product';
const product_store = userProductStore()


onMounted(()=> product_store.fetch_products())

//Use Product Store
import { useStore } from './store/cart';
const _store = useStore()

onMounted(()=> _store.loadFromLocalStorrage())

</script>

<style>

</style>