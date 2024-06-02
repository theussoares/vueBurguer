

<template>
    <header class="md:p-3 p-3 flex flex-col 
                    md:flex-row md:justify-between 
                    items-center bg-gray3 md:p-4">
        <img class="w-2/5 md:w-1/5 lg:w-1/6" :src="logo" 
            alt="VueBurguer Logo">
        <form @submit.prevent="search()"
            class="flex justify-between w-full md:w-2/5 lg:w-2/6
                    bg-gray4 border-gray1 border-2 
                    rounded-lg p-1">
          <input v-model="pesquisa" type="text" 
            placeholder="Digite a Pesquisa"
            class="font-inter font-normal w-4/6 p-1 
                    rounded-lg focus:outline-none bg-gray4"/>
          <button type="submit"
            class="w-2/6 flex justify-center items-center
                    bg-primary hover:bg-primary50 rounded-lg
                    font-inter font-normal text-gray4"
                >Pesquisar</button>
        </form>
    </header>
  </template>

<script setup>
import { ref } from 'vue'
import logo from '../assets/logo.png'
import { useProductStore } from '../stores/productListStore'
import { useToast } from "vue-toastification"

const toast = useToast();
const pesquisa = ref('')
const productStore = useProductStore()

const search = () => {
  productStore.searchProduct(pesquisa)
  productStore.searched = pesquisa

  if(!productStore.toastValidateInput){
    toast.info("Digite uma pesquisa", {
    timeout: 1000})
  }
  
  if(!productStore.toastValidateSeachr){
    toast.error("Pesquisa não encontrada", {
    timeout: 1000})
  }
}
</script>