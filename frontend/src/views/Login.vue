<script>

</script>
<template>
  <div class="md:flex h-screen">
    <div class="hidden md:block md:w-2/3 h-screen bg-cover bg-center bg-app"></div>
    <div class="md:w-1/3 px-10 py-5 min-h-full overflow-auto">
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-20 w-auto" src="/img/logo.svg" alt="Your Company">
    <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Portal de Proveedores</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Correo electrónico</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-red-600 hover:text-red-500">¿Olvidaste la contraseña?</a>
          </div>
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Iniciar sesión</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      ¿No tienes cuenta?
      <a href="#" class="font-semibold leading-6 text-red-600 hover:text-red-500">Solicítala</a>
    </p>
  </div>
</div>
    </div>

  </div>
</template>