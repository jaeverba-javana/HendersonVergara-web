<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SectionComponent"
})
</script>

<template>
  <section class="mainSection">
    <div class="mainSection__container">
      <slot name="title" />
      <slot />
    </div>
  </section>
</template>

<style scoped lang="sass">
.mainSection
  overflow: hidden
  display: flex
  flex-direction: column
  align-items: center
  position: relative
  padding: 2rem 1rem
  margin:
    top: 2rem

  &__container
    max-width: 1440px
</style>