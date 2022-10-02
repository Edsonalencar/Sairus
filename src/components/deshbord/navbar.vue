<script setup lang="ts">
  import { ref } from 'vue'
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
  import notificationsVue from './notifications.vue'
  import { typeNotification } from 'src/types'
  import ModalQrcode from '../modalQrcode.vue'

  const searchCode = ref('')

  const user = ref({
    nome: 'Pedro Silva',
    code: 'H555fku18',
  })
  const isOpen = ref(false)
  const notifications = ref<typeNotification[] | []>([])

  function openModal() {
    isOpen.value = true
  }
  function closeModal() {
    isOpen.value = false
  }
</script>

<template>
  <nav class="flex items-center justify-between bg-cyan-700 px-8">
    <router-link to="/">
      <img src="../../assets/logo-sairus.svg" class="h-20 w-20" />
    </router-link>

    <div class="flex items-center gap-8">
      <button
        type="button"
        @click="openModal"
        class="flex w-full items-center justify-center gap-3 rounded-xl bg-orange-800 py-2 px-4 text-center text-base font-semibold text-white shadow-md"
      >
        Baixar Qrcode
        <img src="../../assets/icons/qrcode-icon.svg" class="-mb-2" />
      </button>

      <button
        type="button"
        class="flex w-full items-center justify-center gap-3 rounded-xl bg-orange-800 py-2 px-4 text-base font-semibold text-white shadow-md"
      >
        {{ user.code }}
        <img src="../../assets/icons/file-icon.svg" />
      </button>

      <div class="form-control relative">
        <input
          type="text"
          name="search"
          class="field-cyan rounded-xl pr-11 shadow-md"
          maxlength="20"
          placeholder="Digite o código"
          v-model="searchCode"
        />
        <button class="absolute right-7 top-1">
          <img src="../../assets/icons/Search.svg" />
        </button>
      </div>

      <notificationsVue :notifications="notifications" />

      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            class="text-md inline-flex w-52 items-center justify-center gap-3 rounded-md p-2 font-medium text-white"
          >
            <img src="../../assets/user-perfil-default.svg" />

            {{ user.nome }}

            <img src="../../assets/icons/angle-down-icon.svg" />
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <router-link
                  to="/"
                  :class="[
                    active ? 'bg-gray-300' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  Sair
                </router-link>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>

    <ModalQrcode :isOpen="isOpen" :close="closeModal" />
  </nav>
</template>
