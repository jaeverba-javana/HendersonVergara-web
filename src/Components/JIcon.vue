<script lang="ts">
import {defineComponent, h} from 'vue'
import Icons from "@/Fragments/Icons.js";

export default defineComponent({
  name: "JIcon",
  props: {
    icon: {type: String},
  },
  setup(props) {
    const icon = Icons.regular[props.icon]

    const maxSide = icon.viewBox.w > icon.viewBox.h? icon.viewBox.w : icon.viewBox.h

    let span = h(
        "span",
        {"data-j-icon": ""},
        [
            h(
                "svg",
                {viewBox: `${-maxSide+icon.viewBox.w/2} ${-maxSide+icon.viewBox.h/2} ${maxSide*2} ${maxSide*2}`},
                [h("path", {d: icon.path.d})]
            )
        ]
    )

    return () => h(
        span
    )
  }
})
</script>

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