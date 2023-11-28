<script setup>
    defineProps({
        supplier: {
            type: Object
        }
    })
</script>


<template>

    <div>
        <p>{{ supplier.name }}</p>
        <p>{{ supplier.industry }}</p>
    </div>

</template>
