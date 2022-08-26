<script setup lang="ts"></script>

<template>
  <main class="h-screen bg-gray">
    <router-view />
  </main>
</template>

<style lang="scss">
  @tailwind components;

  @layer components {
    .btn-orange {
      @apply rounded bg-orange-800 py-2 px-8 font-bold text-white hover:bg-orange-600;
    }
    .field-control {
      @apply flex flex-col;
    }
    .field-control label {
      @apply mb-1 text-lg font-medium text-gray-800;
    }
    .field {
      @apply rounded border-2 border-cyan py-2 px-3 text-base font-normal text-gray-400;
    }
    .field-gray {
      @apply rounded border-2 border-gray-200 py-2 px-3 text-base font-normal text-gray-400;
    }
  }
</style>
