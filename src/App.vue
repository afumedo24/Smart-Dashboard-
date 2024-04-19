<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="">
      <nav>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/mensa">Mensa</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>

 

  <RouterView />
</template>

