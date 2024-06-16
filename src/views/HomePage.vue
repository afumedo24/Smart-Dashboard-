<template>
  <div class="mt-20 md:mt-[88px]">
    <div class="md:flex py-10 px-10 ml-16">
      <!-- The Title and Subtitle with Button -->
      <div class="flex-row w-1/3 mt-14">
        <!-- Title -->
        <h1 class="text-7xl font-bold mb-2 drop-shadow-lg">
          Manage <br />
          your Smart <br />
          Home
        </h1>
        <!-- Subtitle -->
        <p class="py-2 mb-10">This Application allows you to remotely manage modern apartments</p>
        <!-- Button (for Login) -->
        <button
          class="w-full py-5 px-6 bg-thd_donaublue text-white text-xl font-medium rounded-[24px] drop-shadow-md"
        >
          Manage Now
        </button>

        <!-- Here comes the Temperature and Humidty component-->
        <temp-and-hum> </temp-and-hum>
      </div>

      <div class="w-2/3 mt-10 ml-[100px]">
        <!-- Image -->
        <img
          src="../assets/raspi.avif"
          alt="Home"
          class="w-[580px] h-[580px] mx-auto rounded-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import TempAndHum from '../components/TempAndHum.vue'
</script>
