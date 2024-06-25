<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/lobby">Lobby</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
