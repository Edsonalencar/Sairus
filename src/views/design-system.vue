<script setup lang="ts"></script>

<template>
  <div class="flex h-full flex-col items-center justify-center">
    <div class="grid max-w-sm gap-3 w-full bg-white p-5 rounded">

      <div class="field-control">
        <label for="field_1">Exemple cyan</label>
        <input type="text" id="field_1" class="field" />
      </div>
      <div class="field-control">
        <label for="field_1">Exemple cyan</label>
        <input type="text" id="field_1" class="field" />
      </div>

      <div class="field-control">
        <label for="field_1">Exemple gray</label>
        <input type="text" id="field_1" class="field-gray" />
      </div>

      <div class="field-control">
        <label for="field_1">Exemple gray</label>
        <select name="exemple" id="id_exemple" class="field-gray">
          <option value="">Selecione</option>
          <option value="">option 1</option>
          <option value="">option 2</option>
          <option value="">option 3</option>
        </select>
      </div>

      <button class="btn-orange mt-5 w-full">Entrar</button>

    </div>
  </div>
</template>
