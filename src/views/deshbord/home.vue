<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import navBar from '../../components/deshbord/navbar.vue'

  const FormDadosPessoais = ref({
    nome: '',
    nome_social: '',
    data_nascimento: '',
    idade: '',
    sexo: '',
    telefone: '',
    telefone_emergencia: '',
    cpf: '',
  })

  const form = ref<any>([])

  const dados_pessoais = [
    {
      label: 'Nome completo',
      key: 'nome',
      type: 'text',
    },
    {
      label: 'Nome social',
      key: 'nome_social',
      type: 'text',
    },
    {
      label: 'Data de nascimento ',
      key: 'data_nascimento',
      type: 'text',
    },
    {
      label: 'Idade ',
      key: 'idade',
      type: 'text',
    },
    {
      label: 'Sexo biológico ',
      key: 'sexo',
      type: 'text',
    },
    {
      label: 'Telefone ',
      key: 'telefone',
      type: 'text',
    },
    {
      label: 'Telefone  Emergência',
      key: 'telefone_emergencia',
      type: 'text',
    },
    {
      label: 'CPF',
      key: 'cpf',
      type: 'text',
    },
  ]

  const dados_saude = [
    {
      label: 'CNS',
      key: 'cns',
      type: 'text',
    },
    {
      label: 'Tipo sanguineo',
      key: 'tipo_sanguineo',
      type: 'text',
    },
    {
      label: 'Alergia a medicamentos',
      key: 'alergia_medicamentos',
      type: 'text',
    },
    {
      label: 'Medicamentos em uso',
      key: 'medicamentos_uso',
      type: 'text',
    },
    {
      label: 'Gestante',
      key: 'gestante',
      type: 'text',
    },
    {
      label: 'Peso',
      key: 'peso',
      type: 'text',
    },
    {
      label: 'Comorbidades',
      key: 'comorbidades',
      type: 'text',
    },
  ]

  const endereco = [
    {
      label: 'CEP',
      key: 'cep',
      type: 'text',
    },
    {
      label: 'Endereço',
      key: 'endereco',
      type: 'text',
    },
    {
      label: 'Bairro',
      key: 'bairro',
      type: 'text',
    },
    {
      label: 'Cidade',
      key: 'cidade',
      type: 'text',
    },
    {
      label: 'Estado',
      key: 'estado',
      type: 'text',
    },
  ]

  onMounted(() => {
    form.value = dados_pessoais
  })

  function showDadosPessoais() {
    form.value = dados_pessoais
    tabClearSelection()
    tabSelection(0)
  }
  function showDadosSaude() {
    form.value = dados_saude
    tabClearSelection()
    tabSelection(1)
  }
  function showEndereco() {
    form.value = endereco
    tabClearSelection()
    tabSelection(2)
  }

  function tabClearSelection() {
    const tabs = document.querySelectorAll('.tab-item')

    tabs.forEach((tab) => {
      tab.classList.remove('tab-selected')
    })
  }
  function tabSelection(id: number) {
    const tabs = document.querySelectorAll('.tab-item')
    tabs[id].classList.add('tab-selected')
  }
</script>

<template>
  <div>
    <navBar />

    <section class="flex items-center justify-center pt-20">
      <div class="w-3/4">
        <ul class="tabs">
          <li class="tab-item" @click="showDadosPessoais">Dados Pessoais</li>
          <li class="tab-item" @click="showDadosSaude">Dados de Saúde</li>
          <li class="tab-item" @click="showEndereco">Endereço</li>
        </ul>

        <div class="mt-10 grid grid-cols-3">
          <div class="flex justify-center">
            <div
              class="relative flex h-52 w-52 items-center justify-center rounded-full bg-orange-400 text-center text-6xl font-bold text-white"
            >
              <strong>PS</strong>

              <button>
                <img
                  src="../../assets/icons/edit-icon.svg"
                  class="absolute bottom-0 -right-3"
                />
              </button>
            </div>
          </div>

          <div class="col-span-2 grid grid-cols-2 gap-5">
            <div
              v-for="item in form"
              :key="item.key"
              class="form-control col-span-1"
            >
              <label :for="`id_${item.key}`">{{ item.label }}</label>
              <input
                type="text"
                :id="`id_${item.key}`"
                required
                class="field-gray"
              />
            </div>
          </div>

          <div class="col-span-1 col-end-4 mt-12 pl-12">
            <button
              type="button"
              class="flex w-full items-center justify-center gap-3 rounded-lg bg-orange-800 py-2 px-4 text-center text-base font-semibold text-white shadow-md"
            >
              Salvar alterações
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
