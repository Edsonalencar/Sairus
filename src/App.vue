<script setup lang="ts"></script>

<template>
  <main style="height: 100vh; width: 100vw">
    <router-view />
  </main>
</template>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer components {
    .card {
      @apply rounded-lg border-t border-gray-200 bg-white p-5 shadow-xl;
    }

    .btn-orange-800 {
      @apply flex items-center gap-2 rounded bg-orange-800 py-2 px-3 text-white;
    }

    .form-control {
      @apply flex flex-col gap-1 text-gray-800;
    }

    .form-control label {
      @apply text-base font-bold text-gray-800;
    }

    .field {
      @apply rounded border-2 p-2;
    }
    .field-cyan {
      @apply rounded border-2 border-cyan-700 p-2;
    }
    .field-gray {
      @apply rounded border-2 border-gray-200 p-2;
    }

    .tabs {
      @apply flex items-center justify-center gap-5;
    }
    .tab-item {
      @apply w-1/3 cursor-pointer border-b-4 border-gray-200 text-center text-xl font-bold text-gray-600;
    }
    .tab-item:hover {
      @apply border-orange-800 text-orange-300 transition ease-in;
    }
    .tab-item.tab-selected {
      @apply border-orange-800 text-orange-300;
    }
  }
</style>
