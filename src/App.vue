<script setup lang="ts">
import {onMounted} from "vue";
import {RouterView} from "vue-router";

onMounted(() => {
  document.getElementById("loading-spinner")!.classList.add("hide");
})
</script>

<template>
  <RouterView />
</template>

<style lang="sass">
</style>
