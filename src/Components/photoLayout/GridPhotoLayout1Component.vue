<script setup lang="ts">
  import json from "@/galery.json"
  import {onMounted} from 'vue'

  let id = "gridLayout1"

  onMounted(() => {
    console.log("montado")
    let lastChild = document.getElementById(id)?.lastElementChild

    console.log(lastChild)

  })
</script>

<template>
<div class="root">
  <img :id="id" v-for="item in 30" :src="`/galery/${json[item].path}`" :class="json[item].orientation" alt="Photo">
</div>

</template>

<style scoped lang="sass">
.root
  display: grid

  gap: 1rem
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr))

  grid-auto-rows: auto
  grid-auto-flow: dense

  img
    inline-size: 100%
    grid-column: span 1

    &.h
      grid-row: span 5
    &.v
      grid-row: span 11

  img.h:nth-child(5n+2)
    grid-column: span 2
    grid-row: span 10
</style>