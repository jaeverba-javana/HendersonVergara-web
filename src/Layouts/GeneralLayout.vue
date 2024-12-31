<script setup lang="ts">

import JInput from "@/Components/JInput.vue";
import {ref} from "vue";
import JIcon from "@/Components/JIcon.vue";
import SIcon from "@/Components/SIcon.vue";
import SectionComponent from "@/Components/section/SectionComponent.vue";
import SectionTitle from "@/Components/section/SectionTitleComponent.vue";
import GridPhotoLayoutComponent from "@/Components/photoLayout/GridPhotoLayout2Component.vue";

const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");
</script>

<template>

  <header>
    <nav class="header">
      <div class="left">
        <img class="iso" :src="'/img/svg/logo/Logo%20Blanco%20.5.svg'" alt="isologo">

        <img class="typo" :src="'/img/svg/logo/LogoTexto-Blanco-HShrink.svg'" alt="logotype">
      </div>
    </nav>

    <div class="pega"></div>

    <div class="header-content">
      <div class="image"></div>

      <div class="content">
        <img class="logo" :src="'/img/svg/logo/LogoTextoProducciones-Blanco.svg'" alt="logotype">

        <span class="bc f-display-small">Bodas y compromisos</span>

        <span class="rtmm f-display-medium ">Retratamos tus mejores momentos</span>

        <div class="arrow">
          <JIcon class="icon" icon="circleArrowDown" />
        </div>
      </div>
    </div>
  </header>

  <div class="mainando">
    <div class="aside left"></div>

<!--    <div class="content">-->
      <main>
        <SectionComponent class="photos">
          <template v-slot:title>
            <SectionTitle title="Galería" />
          </template>

          <GridPhotoLayoutComponent />

<!--          <div class="content">
            <div>
              <img src="/img/png/wedphotos/f17ee85fc7f4f0f2b447acb1b2cc3284.jpg" alt="">
              <img src="/img/png/wedphotos/6daea36b11f2c570ca0ea17283db4fea.png" alt="">
              <img src="/img/png/wedphotos/1952ce7f807426918d45c685ab776b4b.png" alt="">
              <img src="/img/png/wedphotos/366665c45bff251438998c829f8d00f0.png" alt="">
            </div>

            <div>
              <img src="/img/png/wedphotos/9c4130a0c283bfb5180cda9677d0570e.png" alt="">
              <img src="/img/png/wedphotos/39f127a9b0f127e0078bbbdc124dd85b.png" alt="">
              <img src="/img/png/wedphotos/58245a9500220328d865cff8cc035183.png" alt="">
              <img src="/img/png/wedphotos/c984e57808503c4c9320738335dd2f3e.png" alt="">
            </div>

            <div>
              <img src="/img/png/wedphotos/5d75612dfe1e63e989fbaa0660699cff.jpg" alt="">
              <img src="/img/png/wedphotos/9efe175f1eac1d1048f7f6d2f216eded.png" alt="">
              <img src="/img/png/wedphotos/50afd919346edd44921109ec6132694d.png" alt="">
              <img src="/img/png/wedphotos/912eb74372fba15076389a9c553a00e7.png" alt="">
            </div>
          </div>-->

          <div style="height: 0; z-index: 100">
            <div
                style="position: relative; bottom: 20rem; height: 10rem; min-height: 20rem; background: linear-gradient(to top, #000 0%, #000d 20%, #0005 70%, #0000 100%);"></div>
          </div>
        </SectionComponent>

        <SectionComponent class="biography" >
          <template v-slot:title>
            <SectionTitle title="Sobre Nosotros" />
          </template>

          <div class="container">
            <div class="imgContainer">
              <img src="/img/jpg/profile-photo.jpg" alt="Photographer photo">
            </div>
            
            <div class="text">
                <img src="/img/jpg/profile-photo.jpg" alt="Photographer photo">

              <p>Hola, soy Henderson Vergara, el alma creativa detrás de Henderson Vergara producciones. Con sede en la hermosa Santa Marta, Colombia. me especializo en capturar los momentos más memorables de tu vida a través de la lente de mi cámara. Como fotógrafo profesional, mi pasión es transformar tus eventos especiales en recuerdos eternos, especialmente en las espectaculares bodas en la playa que nuestra región tiene para ofrecer.</p>

              <p>En Henderson Vergara Producciones, nos enorgullecemos de ofrecer servicios de fotografía de alta calidad que reflejan el amor, la alegría y la belleza de cada ocasión. Ya sea que estés celebrando una boda íntima en la arena dorada de Santa Marta o un evento grandioso en un resort de lujo, estamos aquí para documentar cada sonrisa, cada lágrima de felicidad y cada detalle significativo.</p>

              <p>Aunque la fotografía es nuestra especialidad, también ofrecemos servicios de video para complementar tu experiencia visual. Nuestro objetivo es proporcionar un servicio integral que capture no solo imágenes estáticas, sino también momentos en movimiento que narren tu historia de manera completa y auténtica.</p>

              <p>Permítenos ser parte de tu día especial y ayudarte a crear recuerdos que durarán toda la vida. En Henderson Vergara Producciones, tu satisfacción es nuestra prioridad y nos comprometemos a brindarte un servicio profesional y personalizado que supere tus expectativas.</p>

              <p><a href="#contact">Contacta con nosotros</a> hoy mismo y descubre cómo podemos hacer que tus momentos más preciados cobren vida a través de la fotografía en Santa Marta Colombia.</p>
            </div>
          </div>
        </SectionComponent>

        <span style="height: 7rem; display: block"></span>
      </main>
<!--    </div>-->

    <div class="aside right"></div>

    <nav aria-label="Social media link icons" class="socialMediaIcons">
      <span class="filler"></span>

      <div class="container">
        <SIcon icon="whatsapp" second-icon-color="#25D366" href="https://wa.link/6vtqj0"/>
        <SIcon icon="facebook" second-icon-color="#4267B2" href="https://web.facebook.com/henderson.vergara.5"/>
        <SIcon icon="instagram" second-icon-color="#C13584" href="https://www.instagram.com/hendersonpro?igsh=c2w1b3lucWRudjJx"/>
      </div>
      <span class="filler2"></span>
    </nav>
  </div>


  <footer>
    <div class="container" id="contact">
      <h2 class="f-display-large">Contacto</h2>
      <form @submit.prevent>
        <JInput icon="user" class="name" placeholder="Nombre" v-model="name"/>
        <JInput icon="envelope" class="email" placeholder="Correo Electrónico" v-model="email"/>
        <JInput icon="phone" class="phone" placeholder="Teléfono" v-model="phone"/>
        <JInput icon="message" class="message" placeholder="Teléfono" v-model="message" type="textarea"/>
      </form>
    </div>
  </footer>
</template>

<style scoped lang="sass">

header
  display: flex
  height: 100vh

  flex-direction: column

  .pega, .header
    height: 8rem

  .header
    // layout
    display: flex
    position: fixed
    width: 100%
    z-index: 2
    background-color: rgba(0, 0, 0, 0.8)
    backdrop-filter: blur(1rem)

    // appearance
    border-bottom: gray 1px solid

    .left
      //width: 100%

      img
        height: 100%

      @media (max-width: 480px)
        .typo
          display: none

  .header-content
    position: relative
    flex: 1

    > div
      width: 100%
      height: 100%
      position: absolute

    .image
      background-image: url('/img/png/trash/img.png')
      background-size: cover
      background-position: center
      filter: saturate(0) brightness(50%)

    .content
      z-index: 1

      display: flex

      place-items: center
      place-content: center
      padding: 4rem

      flex-direction: column
      row-gap: 8rem

      position: relative

      > div
        display: flex
        flex-direction: column
        align-items: center
        row-gap: 1rem

      img
        max-width: 800px

      .rtmm
        color: #FFF

        font-family: Montserrat
        font-style: normal
        line-height: normal

        &.rtmm
          font-weight: 700

      .arrow
        position: absolute
        bottom: 0

        .icon
          height: 10rem
          color: var(--md-sys-color-primary)
          border-radius: 6rem




.mainando
  display: flex
  position: relative

  justify-content: space-between



  main
    box-sizing: content-box
    width: 100%
    //display: flex
    //align-items: center
    //flex-direction: column

    section
      &.photos
        div.content
          display: flex
          column-gap: 2rem
          max-height: 1200px

          > div
            flex: 1
            display: flex
            flex-direction: column

            row-gap: 2rem

            img
              width: 100%

        //~ img
        //  margin-top: 2rem

          > span
            width: 100%
            position: absolute
            bottom: 0
            height: 80rem

            background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.45) 28.5%, rgba(0, 0, 0, 0.79) 56%, rgba(0, 0, 0, 0.92) 70%, rgba(0, 0, 0, 0.97) 82%, rgba(0, 0, 0, 1) 100%)

      &.biography
        .container
          display: flex
          gap: 2rem
          align-items: center

          > .imgContainer
            flex: 2
            max-width: 50rem

            @media (max-width: 940px)
              display: none

            img
              width: 100%

          .text
            > img
              display: none
              margin: 0 2rem 1rem 0
              width: 50%
              max-width: 50rem


              @media (min-width: 650px) and (max-width: 940px)
                display: block
                float: left
                //width: 50%
                //max-width: 50rem
                //margin: 0 2rem 1rem 0

              @media (max-width: 650px)
                display: block
                float: left
                //margin: 0 2rem 1rem 0

            flex: 3
            p
              text-align: justify

            p + p
              margin-top: 1rem

  .socialMediaIcons
    position: absolute
    height: 100%
    top: 0
    right: 0
    display: flex
    flex-direction: column

    .filler
      flex: 1

    //.filler2
    //  height: 100vh

    .container
      background-color: rgba(0, 0 , 0, 0.8)
      //background-color: white
      //backdrop-filter: blur(1rem)
      padding: 2rem 2rem
      position: sticky
      bottom: 4rem
      display: flex
      column-gap: 1rem

</style>

<style lang="scss">
footer {
  //display: flex;
  display: none;
  justify-content: center;

  background-color: var(--jv-color-neutral-5);

  .container {
    max-width: 1150px;
    padding: 4rem 2rem 2rem;
    width: 100%;

    form {
      display: grid;
      grid-template-columns: 2fr 3fr;
      grid-template-areas: "name message" "email message" "phone message" "buttons buttons";
      gap: 2rem;

      @media (max-width: 750px) {
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "name message" "email message" "phone message" "buttons buttons";
      }
      @media (max-width: 620px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, auto) 20rem auto;
        grid-template-areas: "name" "email" "phone" "message" "buttons";
      }

      .name {
        grid-area: name;
      }

      .email {
        grid-area: email;
      }

      .phone {
        grid-area: phone;
      }

      .message {
        grid-area: message;
      }
    }
  }
}
</style>