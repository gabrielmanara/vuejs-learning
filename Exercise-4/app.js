new Vue({
  el: '#exercise',
  data: {
    theClass: true,
    userClass: 'background',
    isVisible: true,
    proprierties: {
      background: 'red'
    },
    bar: {
      width: '0px'
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        return vm.theClass = !vm.theClass;
      }, 2000);
    },
    startProgress: function() {
      var vm = this;
      var width = 0;
      setInterval(function() {
        width = width + 5;
       
        vm.bar.width = width + '%';
      }, 1000);
    }
  }
});
