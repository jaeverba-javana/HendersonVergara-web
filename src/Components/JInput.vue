<script lang="ts">
import {defineComponent, h} from 'vue'
import JIcon from "@/Components/JIcon.vue";

export default defineComponent({
  name: "JInput",
  props: {
    icon: {type: String},
    type: {type: String, default: "text"},
  },
  setup(props, {emit}) {

    return () => h('div',
        {
          ...props, click: () => {
            console.log("se ha dado click")
          },
          class: {
            'j-input': true,
            "j-input-wi": props.icon
          },
        },
        [
          props.icon ?
              h(JIcon,
                  {
                    class: "icon",
                    icon: props.icon,
                  }
              ) : null,
          props.type !== "textarea"?
              h('input')
              :
              h("textarea")
        ]
    )
  }
})
</script>

<style lang="sass">
div.j-input
  border: 1px var(--jv-color-neutral-10) solid
  background-color: var(--jv-color-neutral-0)
  color: var(--jv-color-neutral-100)
  display: flex


  &:focus-within
    border: 1px var(--md-extended-color-pink-color) solid

  .icon
    height: 6rem
    padding: calc(6rem / 4)

  input,textarea
    background-color: transparent
    color: currentColor
    font-family: Montserrat
    font-weight: 400
    font-size: 1em
    flex: 1
    border: 0
    margin: 0
    padding: 1rem 2rem

    &:focus-visible
      outline: 0

  &-wi
    input,textarea
      padding-left: 0

    textarea
      resize: none

</style>