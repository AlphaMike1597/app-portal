<script setup>

defineProps({
    supplier: {
        type: Object,

    }

})

</script>


<template>
    <div>

        <div>
            <table class="w-full text-sm text-left rtl:text-right text-black-500 dark:text-black-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>

                        <th scope="col" class=" px-4 py-2">Nombre</th>
                        <th scope="col" class=" px-4 py-2">Industria</th>
                        <th scope="col" class=" px-4 py-2">Direccion</th>
                        <th scope="col" class=" px-4 py-2">Ciudad</th>
                        <th scope="col" class=" px-4 py-2">Estado</th>
                        <th scope="col" class=" px-4 py-2">Pais</th>
                        <th scope="col" class=" px-4 py-2">Código Postal</th>
                        <th scope="col" class=" px-4 py-2">RFC</th>
                        <th scope="col" class=" px-4 py-2">Régimen Fiscal</th>
                        <th scope="col" class=" px-4 py-2">Archivos</th>



                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td class="border border-gray-300 px-4 py-2">{{ supplier.name }}</td>
                        <td class="border border-gray-300 px-4 py-2">{{ supplier.industry }}</td>
                        <td class="border border-gray-300 px-4 py-2">{{ supplier.address }}</td>
                        <td class="border border-gray-300 px-4 py-2">{{ supplier.city }}</td>
                        <td class="border border-gray-300 px-4 py-2">{{ supplier.state }}</td>
                        <td class="border border-gray-300 px-4 py-2">{{ supplier.country }}</td>
                        <td class="border border-gray-300 px-4 py-2">{{ supplier.zip_code }}</td>
                        <td class="border border-gray-300 px-4 py-2">{{ supplier.rfc }}</td>
                        <td class="border border-gray-300 px-4 py-2">{{ supplier.tax_regime }}</td>
                        <td class="border border-gray-300 px-4 py-2"><a href="#"
                                class="font-medium text-blue-600 hover:underline">Ver</a></td>

                        <td class=" px-4 py-2">
                            <button @click="editSupplier(supplier)" class="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                Editar
                            </button>
                            <button @click="deleteSupplier(supplier)" class="bg-red-500 text-white px-2 py-1 rounded">
                                Eliminar
                            </button>
                        </td>


                    </tr>
                </tbody>
            </table>
            <div class="mt-4">
                <button @click="previousPage" :disabled="currentPage === 0" class="bg-gray-200 px-4 py-2 mr-2 rounded">
                    Anterior
                </button>
                <button @click="nextPage" :disabled="currentPage === totalPages - 1" class="bg-gray-200 px-4 py-2 rounded">
                    Siguiente
                </button>
            </div>
        </div>
    </div>
</template>
