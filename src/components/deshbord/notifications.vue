<script setup lang="ts">
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { typeNotification } from 'src/types'

  const props = defineProps<{ notifications: typeNotification[] | [] }>()
</script>
<template>
  <Popover v-slot="{ open }" class="relative">
    <PopoverButton class="relative rounded-full p-2">
      <span
        class="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-orange-800 text-xs font-bold text-white"
      >
        {{ props.notifications.length }}
      </span>
      <img src="../../assets/icons/bel-icon.svg" class="w-32" />
    </PopoverButton>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel
        class="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0"
      >
        <div
          class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div
            class="relative flex flex-col items-center justify-center gap-8 bg-white p-5"
          >
            <a
              v-for="(item, index) in notifications"
              :key="index"
              class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
            >
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-900">
                  {{ item.title }}
                </p>
                <p class="text-sm text-gray-500">
                  {{ item.description }}
                </p>
              </div>
            </a>

            <strong>Nenhuma notificação foi encontrada</strong>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
