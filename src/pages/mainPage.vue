<script setup>
import HeaderSearcher from '../components/headerSearcher.vue';
import ProductList from '../components/pruductList.vue'
import cartComponentVue from '../components/cartComponent.vue';
import footerInfo from '../components/footerInfo.vue';
</script>

<template>
  <div>
    <HeaderSearcher />
    <div class="md:flex md:w-full">
      <ProductList class="md:w-3/5 lg:w-4/5"/>
      <cartComponentVue class="md:w-2/5 lg:w-2/6"/>
    </div>
    <footerInfo />
  </div>
</template>

