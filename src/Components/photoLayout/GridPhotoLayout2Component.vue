<script setup lang="ts">
  import json from "@/galery.json"
  import {onMounted} from 'vue'

  let id = "gridLayout2"

  onMounted(() => {
    console.log("montado")
    let parent = document.getElementById(id)
    let lastChild = parent?.lastElementChild

    let parentBounds = parent?.getBoundingClientRect()
    let childBounds = lastChild?.getBoundingClientRect()

    console.log(parentBounds)
    console.log(childBounds)

    console.log(childBounds?.top - parentBounds?.top)

    parent.style.height = (childBounds.y - parentBounds.y) + "px"
  })
</script>

<template>
<div :id="id" class="root">
  <img v-for="item in 30" :src="`/galery/${json[item].path}`" :class="json[item].orientation" alt="Photo">
</div>
</template>

<style scoped lang="sass">
.root
  display: grid

  gap: 1rem
  grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr))

  grid-auto-rows: auto
  grid-auto-flow: dense
  overflow: hidden

  @media (max-width: 700px)
    grid-template-columns: repeat(2, 1fr)

  img
    inline-size: 100%
    height: 100%
    grid-column: span 1
    object-fit: cover

    &.h
      grid-row: span 10
    &.v
      grid-row: span 22
</style>