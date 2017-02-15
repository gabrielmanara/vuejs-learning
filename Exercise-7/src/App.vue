<template>
    <div class="container">
        <app-header></app-header>
        <hr>  
        <div class="row">
            <app-server-status></app-server-status>
            <app-server></app-server>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>



<script>
  import ServerStatus from './ServerStatus.vue';
  import Server from './Server.vue';
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  
  export default {
    components: {
      'app-server-status': ServerStatus,
      'app-header': Header,
      'app-footer': Footer,
      'app-server': Server
    }
  }
</script>

<style>

</style>
