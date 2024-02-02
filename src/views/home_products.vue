<template>
    <div class="d-flex justify-content-center" v-if="!product_store.load_products">
        <h2>
            กำลังโหลดข้อมูลสินค้า...
        </h2>
    </div>
  <div class="row mt-2" v-else >
    <div class="col mb-2" v-for="(product,index) in search_products " :key="index">
        <div class="card mb-2" style="width: 19rem;">
            <img :src="product.image" alt="" class="card-img-top mx-auto" style="width::12rem;">
            <div class="card-body">
                <h5 class="card-title"> {{ product.title }}</h5>
                <p class="card-text">หมวดหมู่ {{ product.category }}</p>
                <p class="card-text">ราคา  {{ currencyTHB(product.price )}} บาท</p>
                <router-link  :to="`/product_detail/${product.id}`" class="btn btn-primary mx-2">รายละเอียด</router-link >
                <button class="btn btn-success" @click="useCart_Store.add_cart(product.id,product.price)">เพิ่มลงตะกร้า</button>
            </div>
        </div>
    </div>



    </div>

    
</template>


<script setup>


import {computed} from 'vue'

//importcurrency
import {currencyTHB} from '../shared/currency'

//useProductStore
import { userProductStore } from '../store/product';
const product_store = userProductStore()

const list = computed(()=>product_store.list_product)

//search
const search_products  = computed(()=> product_store.search_products )

//useCartStore
import { useStore  } from '../store/cart';
const useCart_Store  =  useStore()


</script>

<style>

</style>