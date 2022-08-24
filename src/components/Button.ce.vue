<template>
  <div class="button">
    <slot name="prefix" />
    <button @click="incrementButton">
      {{ counter }}
    </button>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'

const props = defineProps({
  start: {
    type: Number,
    default: 0,
  },
})

let callback = null // callback when button is incremented
const counter = ref(props.start) // value of the counter
const app = getCurrentInstance() // the app instance

onMounted(() => {
  // display mount message
  console.log(`Mounted '${app.attrs.id}' custom element`)
})

const addCallback = (cb) => {
  // add callback to be executed when button is incremented
  callback = cb
  doCallback()
}

const doCallback = () => {
  // execute callback if it is defined
  if (callback) {
    callback(app.attrs.id, counter.value)
  }
}

const incrementButton = () => {
  // increment counter and initiate callback
  counter.value++
  doCallback()
}

const reset = () => {
  // reset counter to start value and initiate callback
  counter.value = props.start
  doCallback()
}

defineExpose({ addCallback, reset }) // expose these functions for external use
</script>

// styles built into the library

<style scoped>
.button {
  color: blue;
  margin-top: 10px;
}
</style>
