new Vue({
    el: '#exercise',
    data: {
        value: 0,
        step: 0
    },
    computed: {
        result: function(){
          return this.value === 37 ?  'Done' : 'Not there yet';
      }
    },
    watch: {
    	result: function(){
     	var vm = this;
      	setTimeout(function(){
        	vm.value = 0;
        }, +vm.step)
      }
    }
});