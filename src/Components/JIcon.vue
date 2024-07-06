<script lang="ts">
import {defineComponent, h, onBeforeMount} from 'vue'
import {regular} from "@/Fragments/Icons.js"
import {DOMParser as mdp} from "@xmldom/xmldom"

export default defineComponent({
  name: "JIcon",
  props: {
    icon: {type: String},
  },
  setup(props) {
    let svg = new mdp().parseFromString(regular[props.icon], "text/xml")

    // console.log(svg.childNodes)

    let viewBox = svg.getElementsByTagName("svg")[0].getAttribute("viewBox")

    // let viewBox = svg.querySelector('svg')!.viewBox

    let span = h(
        "span",
        {"data-j-icon": ""},
        [
            h(
                "svg",
                {
                  // viewBox: `${viewBox.baseVal.x} ${viewBox.baseVal.y} ${viewBox.baseVal.width} ${viewBox.baseVal.height}`
                  viewBox,
                },
                [
                    // h("path", {d: svg.querySelector('path')!.getAttribute('d')})
                    h("path", {d: svg.getElementsByTagName("path")[0]!.getAttribute('d')})
                ]
            )
        ]
    )

    return () => h(
        span
    )
  }
})
</script>

<template>

</template>

<style lang="sass">
span[data-j-icon]
  position: relative
  display: flex
  place:
    content: center
    items: center

  svg
    max-width: 100%
    max-height: 100%
    width: 100%
    height: 100%

    fill: currentColor
</style>