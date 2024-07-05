<script setup lang="ts">

</script>

<template>

  <header>
    <nav class="header">
      <div class="left">
        <img src="/img/svg/logo/Logo%20Blanco%20.5.svg" alt="">

        <img src="/img/svg/logo/LogoTexto-Blanco-HShrink.svg" alt="">
      </div>
    </nav>

    <div class="pega"></div>

    <div class="header-content">
      <div class="image"></div>

      <div class="content">
        <img class="logo" src="/img/svg/logo/LogoTextoProducciones-Blanco.svg" alt="">

<!--        <div>-->
          <span class="bc">Bodas y compromisos</span>

          <span class="rtmm">Retratamos tus mejores momentos</span>
<!--        </div>-->

      </div>
    </div>
  </header>

  <div class="mainando">
    <div class="aside left"></div>

    <div class="content">
      <main>
        <section class="photos">
          <div>
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
          </div>

          <span>

          </span>
        </section>
      </main>
    </div>

    <div class="aside right"></div>
  </div>
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
      img
        height: 100%

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

      > div
        display: flex
        flex-direction: column
        align-items: center
        row-gap: 1rem

      img
        max-width: 800px

      span
        color: #FFF

        font-family: Montserrat
        font-style: normal
        line-height: normal

        &.bc
          font-size: 32px
          font-weight: 400

        &.rtmm
          font-size: 40px
          font-weight: 700


.mainando
  display: flex

  justify-content: space-between

  .content
    display: flex
    align-items: center
    flex-direction: column
    flex: 1

    main
      max-width: 1150px
      padding: 4rem 2rem

      section.photos
        overflow: hidden
        display: flex
        flex-direction: column
        position: relative

        > div
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

</style>