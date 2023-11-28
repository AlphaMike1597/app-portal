import { ref, onMounted } from 'vue';
import { defineStore } from 'pinia';
import SupplierAPI from '../api/SupplierAPI';

export const useSupplierStore = defineStore('suppliers',() =>{

  const supplier = ref([])

  onMounted(async () =>{
    try {
      const { data } = await SupplierAPI.all()
      supplier.value = data
    } catch (error) {
      console.log(error);
    }
  })

  return{
    supplier
  }
})

