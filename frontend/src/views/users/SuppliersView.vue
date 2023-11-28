<script setup>
    import SupplierItem from '../../components/SupplierItem.vue'
    import { useSupplierStore } from '../../stores/suppliers'
    const store = useSupplierStore()

</script>

<template>

    <div class="grid grid-cols-1 gap-5 mt-5"></div>
        <SupplierItem

            v-for="supplier in store.supplier"
            :key="supplier._id"
            :supplier="supplier"
        />
</template>
