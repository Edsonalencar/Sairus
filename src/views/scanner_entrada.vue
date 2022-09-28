<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import Header from '../components/Header.vue'
  import leftBar from '../components/leftBar.vue'

  //Router
  const router = useRouter()

  const formSignUp = ref({
    name: '',
    email: '',
    password: '',
  })

  const confimacaoPassword = ref('')
  const notification = ref(false)

  const Handleloguin = async () => {
    console.log(formSignUp)
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
      class="col-span-12 flex w-full flex-col bg-white lg:col-span-9 lg:h-full"
    >
      <Header class="hidden lg:flex" redirect="/" ButtonText="Entrar" />

      <div
        class="-mt-32 flex items-center justify-center lg:mx-auto lg:my-auto lg:inline-block"
      >
        <div class="card w-11/12 max-w-sm lg:w-96">
          <div class="mb-8 flex justify-center">
            <h2 class="text-2xl font-bold">Cadastre-se</h2>
          </div>

          <form @submit.prevent="Handleloguin">
            <div class="form-control">
              <label for="id_name">Nome</label>
              <input
                type="name"
                id="id_name"
                required
                class="field-cyan"
                v-model="formSignUp.name"
              />
            </div>
            <div class="form-control">
              <label for="id_email">Email</label>
              <input
                type="email"
                id="id_email"
                required
                class="field-cyan"
                v-model="formSignUp.email"
              />
            </div>
            <div class="form-control mt-3">
              <label for="id_password">Senha</label>
              <input
                type="password"
                id="id_password"
                required
                class="field-cyan"
                v-model="formSignUp.password"
              />
            </div>
            <div class="form-control mt-3">
              <label for="id_password">Senha</label>
              <input
                type="password"
                id="id_password"
                required
                class="field-cyan"
                v-model="formSignUp.password"
              />
            </div>

            <div class="mt-3 flex justify-end">
              <a class="cursor-pointer font-bold">Esqueceu sua senha?</a>
            </div>

            <button
              type="submit"
              class="my-7 w-full rounded bg-orange-800 py-2 text-base font-semibold text-white"
            >
              Continuar
            </button>

            <div class="flex items-center justify-center">
              <div class="w-1/5 border-b border-gray-200 md:w-1/4"></div>
              <div class="px-2">ou continue com</div>
              <div class="w-1/5 border-b border-gray-200 md:w-1/4"></div>
            </div>

            <div class="mt-6 flex justify-center">
              <button
                class="flex w-full items-center justify-center gap-3 rounded-md border border-gray-200 p-2 md:w-2/3"
              >
                <img src="../assets/icons/google-icon.svg" />
                Login com o Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="css" scoped></style>
