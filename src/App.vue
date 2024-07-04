<script setup lang="ts">
import {onMounted} from "vue";

onMounted(() => {
  document.getElementById("loading-spinner")!.classList.add("hide");
})
</script>

<template>
  <router-view />
</template>

<style lang="sass">
//#app
//  flex: 1
</style>
