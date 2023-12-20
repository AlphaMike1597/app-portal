<script setup>
    const authRoutes = [
        { name: 'register', text: 'Crear una cuenta'},
        { name: 'login', text: 'Iniciar sesión'}
    ]

</script>


<template>
    <RouterView/>
    <div class="mx-auto lg:w-4/5 mt-20">
        <h1>Desde Auth Layout</h1>
    </div>
</template>