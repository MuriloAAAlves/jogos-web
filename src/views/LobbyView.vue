<script setup lang="ts">
const users = [{ name: 'Marcos' }, { name: 'Ryan' }, { name: 'Murilo' }, { name: 'Samu' }]
</script>

<template>
  <div class="d-flex flex-row">
    <v-card
      class="position-fixed d-flex flex-column align-center"
      color="secondary"
      width="15vw"
      height="100%"
    >
      <div v-for="user in users" :key="user.name" class="my-4">
        {{ user.name }}
      </div>
    </v-card>
    <v-card color="primary" width="85vw" style="margin-left: 15vw">
      <div>asdasd</div>
    </v-card>
  </div>
</template>
