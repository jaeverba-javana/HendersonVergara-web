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
  padding: 2rem 2rem
  margin:
    top: 2rem

  &__container
    width: 100%
    max-width: 1440px

</style>