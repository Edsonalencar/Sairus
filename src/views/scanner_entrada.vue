<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import Header from '../components/Header.vue'
  import leftBar from '../components/leftBar.vue'

  //Router
  const router = useRouter()

  const scanner = ref({
    name: '',
    name_social: '',
    idade: '',
    tipo_sanguineo: '',
    telefone: '',
    telefone_emergencia: '',
    alergia_medicamentos: '',
    comorbidades: [],
  })

  const confimacaoPassword = ref('')
  const notification = ref(false)

  const Handleloguin = async () => {
    console.log(scanner)
  }
</script>

<template>
  <main
    class="h-screen w-screen overflow-hidden bg-white lg:grid lg:grid-cols-12"
  >
    <!-- Grid 1 -->
    <leftBar :snanner="true" />

    <!-- Grid 2-->
    <section
      class="col-span-12 flex w-full flex-col bg-white lg:col-span-9 lg:h-full lg:overflow-y-auto"
    >
      <Header class="hidden lg:flex" redirect="/" ButtonText="Entrar" />

      <div
        class="-mt-32 flex items-center justify-center lg:mx-auto lg:my-auto lg:inline-block lg:w-full lg:max-w-lg"
      >
        <div class="card w-full pb-8">
          <div
            class="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-300 text-white"
          >
            <strong class="text-3xl">PS</strong>
          </div>

          <form
            @submit.prevent="Handleloguin"
            class="mt-4 grid grid-cols-2 gap-4"
          >
            <div class="form-control col-span-2">
              <label for="id-name">Nome</label>
              <input
                type="name"
                id="id-name"
                required
                class="field-cyan"
                v-model="scanner.name"
              />
            </div>
            <div class="form-control col-span-2">
              <label for="id-name_social">Nome social</label>
              <input
                type="text"
                id="id-name_social"
                required
                class="field-cyan"
                v-model="scanner.name_social"
              />
            </div>
            <div class="form-control col-span-2 md:col-span-1">
              <label for="id-idade">Idade</label>
              <input
                type="number"
                id="id-idade"
                required
                class="field-cyan"
                v-model="scanner.idade"
              />
            </div>
            <div class="form-control col-span-2 md:col-span-1">
              <label for="id-tipo_sanguineo">Tipo sanguineo</label>
              <input
                type="text"
                id="id-tipo_sanguineo"
                required
                class="field-cyan"
                v-model="scanner.tipo_sanguineo"
              />
            </div>
            <div class="form-control col-span-2 md:col-span-1">
              <label for="id-telefone">Telefone</label>
              <input
                type="text"
                id="id-telefone"
                required
                class="field-cyan"
                v-model="scanner.telefone"
              />
            </div>
            <div class="form-control col-span-2 md:col-span-1">
              <label for="id-telefone_emergencia">Telefone emergencia</label>
              <input
                type="text"
                id="id-telefone_emergencia"
                required
                class="field-cyan"
                v-model="scanner.telefone_emergencia"
              />
            </div>
            <div class="form-control col-span-2">
              <label for="id-alergia_medicamentos"
                >Alergia a medicamentos</label
              >
              <input
                type="text"
                id="id-alergia_medicamentos"
                required
                class="field-cyan"
                v-model="scanner.alergia_medicamentos"
              />
            </div>
            <div class="form-control col-span-2">
              <label for="id-comorbidades">comorbidades</label>
              <input
                type="text"
                id="id-comorbidades"
                required
                class="field-cyan"
                v-model="scanner.comorbidades"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="css" scoped></style>
