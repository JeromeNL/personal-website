<template>
  <div>
    <header>

    </header>
    <main class="flex flex-col min-h-screen">
      <div class="navbar bg-base-100">
        <div class="flex-1">
<!--          <a class="btn btn-ghost normal-case text-xl">daisyUI</a>-->
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <NuxtLink :to="switchLocalePath('nl')" class="ml-3">🇳🇱 Nederlands</NuxtLink>
            <NuxtLink :to="switchLocalePath('en')" class="ml-3">🇬🇧 English </NuxtLink>
            <NuxtLink :to="switchLocalePath('de')" class="ml-3">🇨🇭 Deutsch</NuxtLink>
          </ul>
        </div>
      </div>
      <slot />
    </main>
    <footer class="mt-auto">
      <footer class="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Made by Joram with NuxtJS</p>
        </aside>
      </footer>
    </footer>
  </div>
</template>

<script>
</script>
