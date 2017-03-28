<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <span><slot name="subtitle">The subtitle</slot></span>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 15px auto;
    text-align: center;
  }

  title {
    font-family: italic;
  }

</style>