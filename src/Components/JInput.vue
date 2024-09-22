<script lang="ts">
import {defineComponent, h} from 'vue'
import JIcon from "@/Components/JIcon.vue";
import {type} from "node:os";

export default defineComponent({
  name: "JInput",
  props: {
    icon: {type: String},
    type: {type: String, default: "text"},
    placeholder: {type: String},
    modelValue: {type: String}
  },
  emits: ["update:modelValue"],
  setup(props, {emit}) {
    return () => h('div',
        {
          ...props, click: () => {
            console.log("se ha dado click")
          },
          class: {
            'j-input': true,
            "j-input-wi": props.icon,
            "isText": !!(props.modelValue)
          },
        },
        [
          props.icon ?
              h(JIcon,
                  {
                    class: "j-input__icon",
                    icon: props.icon,
                  }
              ) : null,
          h("div",
              {class: "j-input__contain"},
              [
                props.placeholder ?
                    h("span",
                        {class: "j-input__placeholder-bar"},
                        props.placeholder
                    )
                    : null,

                props.placeholder ?
                    h("span",
                        {class: 'j-input__placeholder-wrapper'},
                        h("span",
                            {class: 'j-input__placeholder-container'},
                            h("span", {class: "j-input__placeholder"}, props.placeholder)
                        )
                    ) : null,

                h((props.type !== "textarea") ? 'input' : "textarea",
                    {
                      value: props.modelValue,
                      onInput(e) {
                        emit("update:modelValue", e.target.value)
                      }
                    }
                )
              ]
          )
        ]
    )
  }
})
</script>

<style lang="sass">
.j-input
  border: 1px var(--jv-color-neutral-10) solid
  background-color: var(--jv-color-neutral-0)
  color: var(--jv-color-neutral-100)
  display: flex
  --font-size-base: 1.5rem
  --font-size: 2rem
  --border-w: 1px

  &.isText
    border-color: var(--jv-color-neutral-90)

  &:focus-within
    border-color: var(--md-sys-color-primary) !important

  &.isText, &:focus-within

    .j-input__placeholder
      font-size: var(--font-size-base)

      &-container
        top: -50%

      &-bar
        opacity: 1

  &__icon
    height: 6rem
    width: 6rem

  &__contain
    width: 100%
    position: relative

    input, textarea
      height: 100%
      width: 100%
      background-color: transparent
      color: currentColor
      font-family: Montserrat
      font-weight: 400
      font-size: var(--font-size)
      flex: 1
      border: 0
      margin: 0
      padding: 1rem 2rem

      &:focus-visible
        outline: 0

  &__placeholder
    font-size: var(--font-size)
    transition-duration: 400ms

    &-wrapper
      pointer-events: none
      height: 100%
      width: 100%
      position: absolute
      top: 0
      left: 0

    &-container
      position: absolute
      top: 0
      left: 0
      height: 100%
      display: flex
      align-items: center
      transition-duration: 400ms

    &-bar
      transition-duration: 400ms
      background-color: var(--jv-color-neutral-0)
      color: var(--jv-color-neutral-0)
      position: absolute
      top: calc(0px - var(--border-w))
      height: var(--border-w)
      font-size: var(--font-size-base)
      opacity: 0
      pointer-events: none
      left: -2px
      padding: 0 2px
      overflow: hidden

  &[type="textarea"]
    .j-input__placeholder
      &-wrapper
        max-height: calc(var(--font-size) * 3)
        display: flex
        align-items: center

  &-wi
    div
      input, textarea
        padding-left: 0

      textarea
        resize: none

</style>