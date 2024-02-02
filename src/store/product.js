import {defineStore} from 'pinia';

import axios from 'axios'

import {ref,computed} from 'vue'

export const userProductStore = defineStore('userProductStore',()=>{
    const product =ref([])
    
    const input = ref('')     

    const list_product = computed(() => product.value)

    const load_products = computed(() => product.value.length > 0 )

    const fetch_products = async()=>{
        await axios.get(`${import.meta.env.VITE_API}`)
        .then((response)=>{
           // console.log(response.data)
            product.value = response.data
        }).catch((err) =>{
            console.log(err)
        })
    }

    const search_products   = computed(() =>{
        if(input.value<3)return product.value

        return product.value.filter((prd)=>{
           if(prd.title.toLowerCase().includes(input.value.toLowerCase())==false){
            return false
           }else
              return prd.title.toLowerCase().includes(input.value.toLowerCase())
        })
    })


    return {fetch_products,list_product,load_products,product,input,search_products }
})