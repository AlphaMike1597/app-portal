<script setup>
    const authRoutes = [
        { name: 'register', text: 'Crear una cuenta'},
        { name: 'login', text: 'Iniciar sesión'},
    ]

</script>


<template>
    <div class="mx-auto lg:w-4/5 mt-20">
        <h1>Desde Auth Layout</h1>
        <nav class="mt-10 flex flex-col items-center space-y-5 lg:flex-row lg:justify-between lg:scpace-y-0">
            <RouterLink
                v-for="authRoute in authRoutes"
                class="uppercase font-bold text-black"
                :to:="{name: authRoute.name}">{{ authRoute.text}}</RouterLink>
        </nav>
    </div>
</template>