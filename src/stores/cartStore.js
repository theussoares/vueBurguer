import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: [],
        product: {},
        value: 0,
        quantity: 1.0
    }),

    actions: {
        increaseProduct(product) {
            product.quantity += 1
            product.value += product.price 
            this.value += product.price
        },
        descreaseProduct(product) {
            product.quantity -= 1
            product.value -= product.price 
            this.value -= product.price
            if(product.quantity === 0){
                const existingProductIndex = this.products.findIndex(productToFind => productToFind.id === product.id)
                this.products.splice(existingProductIndex, 1)
            }
        },
        deleteProduct(product) {
            const existingProductIndex = this.products.findIndex(productToFind => productToFind.id === product.id)
            this.products.splice(existingProductIndex, 1)
            this.value -= product.value
        },
        addProductToCart(productToAdd) {
            const existingProductIndex = this.products.findIndex(product => product.id === productToAdd.id)
        
            if (existingProductIndex > -1) {
                this.products[existingProductIndex].quantity++
                this.products[existingProductIndex].value += productToAdd.price
                this.value += productToAdd.price
            } else {
                this.product = {
                    img: productToAdd.img,
                    name: productToAdd.name,
                    category: productToAdd.category,
                    price: productToAdd.price,
                    id: productToAdd.id,
                    quantity: this.quantity,
                    value: productToAdd.price * this.quantity
                }
                this.products.push(this.product)
                this.value += productToAdd.price * this.quantity
            }
            console.log(this.products, this.value)
        },
        removeAllProducts() {
            this.products = []
            this.value = 0
        }
    }
})



 