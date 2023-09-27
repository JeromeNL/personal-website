<template>
  <div>
    <header>
      <title>JoramKwetters.nl</title>
    </header>
    <main class="flex flex-col min-h-screen">
      <div class="navbar bg-base-100">
        <div class="flex-1">
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
          <a href="https://github.com/JeromeNL/personal-website" class="ml-3 underline">Made by Joram With NuxtJS</a>
        </aside>
      </footer>
    </footer>
  </div>
</template>

