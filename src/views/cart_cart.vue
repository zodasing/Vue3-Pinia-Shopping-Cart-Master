<template>
    <h1 class="mt-3">ตะกร้าสินค้า</h1>
    <div class="d-flex justify-content-center" v-if="!product_store.load_products">
        <h2>กำลังโหลดข้อมูลสินค้า...</h2>
    </div>

    <table class="table" v-else>
        <thead>
            <tr>
                <th>สินค้า</th>
                <th>ราคา</th>
                <th>จำนวน</th>
                <th>รวม</th>
                <th>ลบสินค้า</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(cart,index) in carts" :key="index">
                <td>
                    <img :src="cart.product.image" alt="" class="img-thumbnail" width="100">
                   {{cart.product.title}}
                </td>
                <td> {{currencyTHB(cart.product.price)}} บาท</td>
                <td>
                    <button class="btn btn-sm btn-secondary" @click="cart_store.decrement_quantity(index)" >-</button>
                    <span class="mx-2">{{cart.quantity}} </span>
                    <button class="btn btn-sm btn-secondary" @click="cart_store.increment_quantity(index)">+</button>
                </td>
                <td>{{currencyTHB(cart.total_product)}}  บาท</td>
                <td>
                    <button class="btn btn-danger" @click="cart_store.remove_cart(index)">ลบ</button>
                </td>
            </tr>
        </tbody>
    </table>
    <button class="btn btn-primary mb-5" @click="cart_store.clear_cart()">เคลียร์ตะกร้า</button>
    <button class="btn btn-success mb-5 mx-2">รวม {{ currencyTHB(cart_store.total)}}</button>
</template>
 
<script setup>

import {computed} from 'vue'

//importcurrency
import {currencyTHB} from '../shared/currency'

//useProductStore
import { userProductStore } from '../store/product'
const product_store = userProductStore()



//useCartStore
import { useStore } from '../store/cart';
const cart_store = useStore()
 

 const carts = computed(()=> cart_store.cart_previews)


</script>
 
<style lang="scss" scoped>
 
</style>