<template>
    <section class="w-full flex justify-center p-4 md:pl-0">
        <div class="w-full min-h-56 max-h-535">
            <div class="bg-primary rounded-t-lg p-4">
                <h2 class="font-inter font-semibold text-gray4">Carrinho de compras</h2>
            </div>
            <div v-if="cart.products.length === 0" class="flex justify-center pt-5 bg-gray3 min-h-40 rounded-b-lg">
                <div class="flex flex-col gap-1 items-center">
                    <p class="font-inter font-semibold text-lg text-gray1">Sua sacola está vazia</p>
                    <p class="font-inter font-base text-gray2">Adicione itens</p>
                </div>
            </div>
            <div v-else class="flex flex-col justify-center w-full gap-2">
                <ul class="scrollable h-56 overflow-y-scroll bg-gray4">
                    <li v-for="product in cart.products" :key="product.id"
                        class="flex justify-between w-full p-4 items-start 
                        h-24">
                        <div class="flex gap-2">
                            <img class="w-20 bg-gray3 rounded-lg" :src="product.img" alt="imagem do produto">
                            <div class="flex flex-col gap-1 w-4/5">
                                <p class="font-inter font-bold text-sm text-gray1 m-0 md:text-ellipsis"> {{ product.name  }} </p>
                                <p class="font-inter font-normal text-xs text-gray2 m-0"> {{ product.category }} </p>
                                <div class="flex items-center gap-2">
                                    <button class="bg-primary hover:bg-primary50 w-5 rounded-lg text-gray1" @click="cart.descreaseProduct(product)">-</button>
                                    <span> {{ product.quantity }} </span>
                                    <button class="bg-primary hover:bg-primary50 w-5 rounded-lg text-gray1" @click="cart.increaseProduct(product)">+</button>
                                </div>
                            </div>
                        </div>
                        <button @click="cart.deleteProduct(product)" class="font-inter font-normal text-sm md:text-xs text-gray2 m-0"> Remover </button>
                    </li>
                </ul>
                <div class="flex flex-col p-4 items-center gap-4 pb-2 border-t-2 border-gray3">
                    <div class="flex w-full justify-between">
                        <p class="font-inter font-bold text-sm text-gray1">Total</p>
                        <p class="font-inter font-normal text-sm text-gray2" v-if="cart.value.toString().length > 2 ">R$ {{ cart.value.toFixed(2).toString().replace('.', ',') }} </p>
                        <p class="font-inter font-normal text-sm text-gray2" v-else>R$ {{ cart.value.toFixed(2).toString().replace('.', ',') }}</p>
                    </div>
                    <button class="bg-gray3 rounded-lg h-16 w-full text-gray2 font-inter hover:bg-gray2 hover:text-gray3 font-semibold text-sm flex items-center justify-center" @click="cart.removeAllProducts">Remover todos</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useCartStore } from '../stores/cartStore'

const cart = useCartStore()
</script>

<style>
  .scrollable::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  .scrollable::-webkit-scrollbar-thumb {
    background-color: #27AE60;
    border-radius: 8px;
  }
</style>