<script setup lang="ts">
  defineProps<{ login?: boolean }>()
</script>

<template>
  <div class="flex items-center justify-end gap-4 p-4">
    <span> Não tem uma conta ? </span>
    <router-link :to="login ? '/' : '/cadastro'" class="btn-orange-800">
      <img
        src="../assets/icons/user-icon-orange.svg"
        class="brightness-200 grayscale"
      />
      {{ login ? 'Entrar' : 'Cadastrar-se' }}
    </router-link>
  </div>
</template>
