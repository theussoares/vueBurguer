import { defineStore } from "pinia";

export const useProductStore = defineStore('productStore', {
    state: () => ({
        productSearch: {},
        productCategory: [],
        allProducts: [],
        searched: '',
        toastValidateInput: true,
        toastValidateSeachr: true
    }),
    actions: {
        searchProduct(input) {
            if(input.value.length !==0){
                const existingProductIndex = this.allProducts.filter(produto => produto.name.toLowerCase().includes(input.value.toLowerCase()))
                this.productSearch = existingProductIndex
                this.toastValidateInput = true
                this.toastValidateSeachr = true
                if(existingProductIndex.length === 0){
                    this.toastValidateSeachr = false
                }
            }else{
                this.toastValidateInput = false
                this.toastValidateSeachr = tru
            }
        },
        cleanSearch() {
            this.productSearch = {}
            this.searched = ''
        }
    }
})