<script setup lang="ts">
  import { ref } from 'vue'

  defineProps<{ snanner: boolean }>()

  const searchCode = ref('')
</script>

<template>
  <section class="col-span-12 h-2/5 bg-cyan-700 md:col-span-3 lg:h-full">
    <router-link to="/" class="flex justify-center">
      <img src="../assets/logo-sairus.svg" class="h-28 w-40 lg:h-36 lg:w-52" />
    </router-link>

    <div
      v-if="!snanner"
      id="background_image_conecta_sairus"
      class="hidden h-full w-full bg-slate-400 lg:flex"
      style="max-width: 100%; max-height: 68%"
    ></div>
    <div
      v-if="snanner"
      id="background_image_scanner"
      class="hidden h-full w-full bg-slate-400 lg:flex"
      style="max-width: 100%; max-height: 68%"
    ></div>

    <div v-if="!snanner" class="form-control relative mt-8 hidden px-4 lg:flex">
      <input
        type="text"
        name="search"
        class="field-cyan rounded-xl pr-11 shadow-md"
        maxlength="20"
        placeholder="Digite o código"
        v-model="searchCode"
      />
      <button class="absolute right-7 top-1">
        <img src="../assets/icons/Search.svg" />
      </button>
    </div>
    <div v-if="snanner" class="px-4">
      <router-link
        to="/cadastro"
        type="button"
        class="my-7 w-full rounded bg-orange-800 py-2 text-center text-base font-semibold text-white"
      >
        Cadastre-se
      </router-link>
    </div>
  </section>
</template>

<style scoped lang="scss">
  #background_image_conecta_sairus {
    background: url('../assets/conecta-sairus.svg') no-repeat center top;
  }
  #background_image_scanner {
    background: url('../assets/scannet-ilustration.svg') no-repeat center top;
  }
</style>
