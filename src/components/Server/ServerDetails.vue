<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please selected a server</p>
        <p v-else>The server #{{server.id}} is {{server.status}}</p>
        <hr>
        <button @click="resetServer">Reset server</button>
    </div>

</template>

<script>
  import { serverBus } from '../../main';
  export default {
    data: function() {
      return {
        server: null
      }
    },
    methods: {
      resetServer: function() {
        this.server.status = 'Normal';
      }
    },
    created() {
      serverBus.$on('serverSelected', (server) => {
        this.server = server;
      });
    }
  }
</script>

<style>

</style>
