<script setup>
import { ref, onBeforeMount } from 'vue'
import { getProducts } from '../service/apiRequest'
import { useCartStore } from '../stores/cartStore'
import { useProductStore } from '../stores/productListStore';

const cart = useCartStore()
const productStore = useProductStore()

onBeforeMount(async () => {
  productStore.allProducts = await getProducts()
})

</script>

<template>
    <section>
        <ul v-if="!productStore.productSearch[0]" class="scrollable p-4 md:pr-0 flex gap-5 md:gap-2 lg:gap-5 overflow-scroll md:overflow-hidden mg-0 md:flex-wrap">
            <li class="flex flex-col justify-between border-2 border-solid rounded-lg border-gray3" v-for="product in productStore.allProducts" :key="product.id">
                <div class="w-80 md:w-52 xl:w-64 h-40 bg-gray3 flex justify-center items-center">
                    <img class="w-44 md:w-36" :src="product.img" :alt="product.name">
                </div>
                <h3 class="font-inter font-bold text-base text-gray1 m-0 p-2">
                    {{ product.name }}
                </h3>
                <p class="font-inter font-normal text-sm text-gray2 m-0 p-2">
                    {{ product.category }}
                </p>
                <span class="font-inter font-semibold text-base text-primary m-0 p-2">
                    R$ {{ product.price }}
                </span>
                <div class="w-full p-2">
                    <button @click="cart.addProductToCart(product)" class="font-inter font-semibold text-base h-10 w-28 border-none rounded-lg bg-primary text-gray4 hover:bg-primary50">Adicionar</button>
                </div>
            </li>
        </ul>
        <div v-else>
            <div class="flex w-full justify-between p-2">
                <div class="flex">
                    <p class="font-inter font-semibold text-base text-gray1 m-0 p-1">Resultados para:</p>
                    <p class="font-inter font-semibold text-base text-gray2 m-0 p-1">{{ productStore.searched }}</p>
                </div>
                <button @click="productStore.cleanSearch" class="w-2/6 flex justify-center items-center
                bg-gray3 hover:bg-gray2 rounded-lg
                font-inter font-normal text-gray2 hover:text-gray3">
                  Limpar
                </button>
            </div>
            <ul class="p-4 flex gap-5 overflow-scroll mg-0 md:flex-wrap">
                <li v-for="product in productStore.productSearch" class="flex flex-col justify-between border-2 border-solid rounded-lg border-gray3"> 
                
                    <div class="w-80 h-40 bg-gray3 flex justify-center items-center">
                        <img class="w-44" :src="product.img" :alt="product.name">
                    </div>
                    <h3 class="font-inter font-bold text-base text-gray1 m-0 p-2">
                        {{ product.name }}
                    </h3>
                    <p class="font-inter font-normal text-sm text-gray2 m-0 p-2">
                        {{ product.category }}
                    </p>
                    <span class="font-inter font-semibold text-base text-primary m-0 p-2">
                        R$ {{ product.price }}
                    </span>
                    <div class="w-full p-2">
                        <button @click="cart.addProductToCart(product)" class="font-inter font-semibold text-base h-10 w-28 border-none rounded-lg bg-primary text-gray4 hover:bg-primary50">Adicionar</button>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>


<style>
  .scrollable::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  .scrollable::-webkit-scrollbar-thumb {
    background-color: #27AE60;
    border-radius: 8px;
  }
</style>