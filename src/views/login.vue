<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import Header from '../components/Header.vue'

  //Router
  const router = useRouter()

  const formLogin = ref({
    email: '',
    password: '',
  })
  const notification = ref(false)

  const Handleloguin = async () => {
    console.log(formLogin)
  }
</script>

<template>
  <main
    class="h-screen w-screen overflow-hidden bg-white lg:grid lg:grid-cols-12"
  >
    <!-- Grid 1 -->
    <section
      class="col-span-12 h-2/5 w-full bg-cyan-700 md:col-span-3 lg:h-full"
    >
      <router-link to="/" class="flex justify-center">
        <img
          src="../assets/logo-sairus.svg"
          class="h-28 w-40 lg:h-36 lg:w-52"
        />
      </router-link>

      <img src="../assets/conecta-sairus.svg" class="mx-auto hidden lg:block" />
    </section>

    <!-- Grid 2-->
    <section
      class="col-span-12 flex w-full flex-col bg-white lg:col-span-9 lg:h-full"
    >
      <Header class="hidden lg:flex" />

      <div
        class="-mt-32 flex items-center justify-center lg:mx-auto lg:my-auto lg:inline-block"
      >
        <div class="card w-11/12 max-w-sm lg:w-96">
          <div class="mb-8 flex justify-center">
            <h2 class="text-2xl font-bold">Fazer login</h2>
          </div>

          <form @submit.prevent="Handleloguin">
            <div class="form-control">
              <label for="id_email">Email</label>
              <input
                type="email"
                id="id_email"
                required
                class="field-cyan"
                v-model="formLogin.email"
              />
            </div>
            <div class="form-control mt-3">
              <label for="id_password">Senha</label>
              <input
                type="password"
                id="id_password"
                required
                class="field-cyan"
                v-model="formLogin.password"
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

            <div>
              <ul class="flex items-center">
                <li class="w-[30%] border-b border-gray-200"></li>
                <li class="px-2">ou continue com</li>
                <li class="w-[30%] border-b border-gray-200"></li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
