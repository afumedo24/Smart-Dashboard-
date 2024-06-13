<template>
  <!--  position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5)-->
  <div v-if="isOpen" class="fixed z-[9998] top-0 left-0 w-full h-full bg-black bg-opacity-50">
    <div
      class="w-[330px] md:w-[500px] h-[260px] md:h-[300px] mx-auto my-[150px] p-5 md:p-8 bg-white rounded-md shadow-md flex flex-col items-center"
      ref="target"
    >
      <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold">Pick a Date</h3>
      <div class="my-8 mt-5">
        <DatePicker
          v-model="picked"
          class="w-[200px] h-[40px] p-4 mx-auto my-3 md:my-6 border rounded-md text-xl text-center border-black focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
        />
      </div>
      <button
        @click="submitHandler(), router.push('/mensa/menu')"
        @click.stop="emit('modal-close')"
        class="w-[200px] py-3 px-5 mb-3 bg-secondary text-white text-md md:text-lg lg:text-xl font-medium rounded-2xl"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import DatePicker from 'vue3-datepicker'
import { useMensaStore } from '../../stores/MensaStore'
import router from '../../router'
const mensaStore = useMensaStore()

const picked = ref(new Date())
const target = ref(null)

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['modal-close'])

onClickOutside(target, () => emit('modal-close'))

const submitHandler = () => {
  mensaStore.setDate(picked.value)
}
</script>
