<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">Increase</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        counter: 0
      };
    },
    deactivaded() {
      console.log('Deactivaded');
    },
    destroyed() {
      console.log('Destroyed');
    },
    activated() {
      console.log('Activate');
    }
  }
</script>

<style scoped>

</style>