<script lang="ts">
import {defineComponent, h, PropType} from 'vue'
import Icons from "@/Fragments/Icons.js";

type Category = 'regular'|'solid'|"brands";

export default defineComponent({
  name: "JIcon",
  props: {
    icon: {type: String, required: true},
    category: {type: String as PropType<Category>, default: "regular"}
  },
  setup(props) {
    const icon = Icons[props.category][props.icon]

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
  //position: relative
  display: block

  svg
    max-width: 100%
    max-height: 100%
    width: 100%
    height: 100%

    fill: currentColor
</style>