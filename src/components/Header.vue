<script setup lang="ts">
  defineProps<{ redirect: string; ButtonText: string }>()
</script>

<template>
  <div class="flex items-center justify-end gap-4 p-4">
    <span> Não tem uma conta ? </span>
    <router-link :to="redirect" class="btn-orange-800">
      <img
        src="../assets/icons/user-icon-orange.svg"
        class="brightness-200 grayscale"
      />
      {{ ButtonText }}
    </router-link>
  </div>
</template>
