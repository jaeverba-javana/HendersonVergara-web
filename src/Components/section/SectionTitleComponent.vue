<script lang="ts">
import {defineComponent} from 'vue'
import JIcon from "@/Components/JIcon.vue";

export default defineComponent({
  name: "SectionTitle",
  components: {JIcon},
  props: {
    title: {type: String}
  }
})
</script>

<template>
  <div class="root">
    <h2 class="f-display-medium">{{title}}</h2>

    <a href="/" class="seeMore">
      <span class="f-headline-medium">
        Ver más
      </span>

        <JIcon class="icon" icon="chevronRight"/>
    </a>

  </div>

</template>

<style scoped lang="sass">
.root
  width: 100%
  display: flex
  justify-content: space-between
  align-items: center

  .seeMore
    display: flex
    align-items: center

    .icon
      height: 5rem

</style>