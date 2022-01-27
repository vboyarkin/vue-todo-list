<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
$loader-size: 100px

div.loader
  border: solid 10px #FFFFFF00
  border-radius: 50%
  border-top: solid 10px $color-active
  width: $loader-size
  height: $loader-size
  -webkit-animation: w-spin 1.5s cubic-bezier(0.59, 0.1, 0.38, 0.9) infinite
  animation: spin 1.5s cubic-bezier(0.59, 0.1, 0.38, 0.9) infinite

div.loader-container
  min-height: 70vh
  display: flex
  align-items: center
  justify-content: center

@keyframes spin
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)

@-webkit-keyframes w-spin
  0%
  -webkit-transform: rotate(0deg)
  100%
  -webkit-transform: rotate(360deg)
</style>