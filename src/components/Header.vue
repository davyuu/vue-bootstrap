<template>
  <header>
    <img alt="Vue logo" src="@/assets/logo.png">
    <h1>Welcome</h1>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="sass" scoped>
@import "@/styles"

header
  display: flex
  flex-direction: column
  align-items: center
  padding: d(8)

img
  height: d(8)

h1
  margin: d(5)
  +title-large
</style>
