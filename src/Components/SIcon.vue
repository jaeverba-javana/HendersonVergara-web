<script lang="ts">
import {defineComponent} from 'vue'
import JIcon from "@/Components/JIcon.vue";


export default defineComponent({
  name: "SIcon",
  components: {JIcon},
  props: {
    icon: {type: String, required: true},
    secondIconColor: {type: String},
    href: {type: String}
  }
})
</script>

<template>
  <a v-if="href" :href="href">
    <span class="sIcon">
    <JIcon class="icon icon1" :icon="icon" category="brands" type=large />

    <JIcon :style="{ borderColor: secondIconColor || 'inherit', backgroundColor: secondIconColor || 'inherit'}" class="icon icon2" :icon="icon" category="brands" type=large />
  </span>
  </a>

  <span v-else class="sIcon">
    <JIcon class="icon icon1" :icon="icon" category="brands" type=large />

    <JIcon :style="{ borderColor: secondIconColor || 'inherit', backgroundColor: secondIconColor || 'inherit'}" class="icon icon2" :icon="icon" category="brands" type=large />
  </span>

</template>

<style scoped lang="sass">
.sIcon
  display: block
  color: white
  //padding: 1rem
  position: relative
  height: 5rem
  width: 5rem

  .icon
    position: absolute
    border: 2px solid
    width: 5rem
    height: 5rem
    background-color: var(--jv-color-neutral-0)
    transition:
      duration: 400ms
      timing-function: ease-in-out



    &2
      border-color: white
      background-color: white
      //color: #25D366
      bottom: 0
      transform: translateY(50%) rotate3d(1,0,0,-90deg)

  &:hover
    .icon
      &1
          transform: translateY(-50%) rotate3d(1,0,0,90deg)

      &2
          transform: translateY(0%) rotate3d(1,0,0,0deg)

</style>