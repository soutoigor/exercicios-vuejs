new Vue({
    el: '#exercise',
    data: {
          attachColor: false,
      hasClass: 'font-size: 20px',
      color: '',
      insertClass: '',
      isTrue: '',
      insertStyle: '',
      progress: 0
    },
    methods: {
      startEffect: function() {
          var vm = this;
        setInterval(function(){
      console.log(vm.attachColor)
          vm.attachColor = !vm.attachColor;
      },1500);
          
      },
      startProgress: function(){
          var vm = this;
        vm.progress = 0;
        var progressBarInterval = setInterval(function(){
            vm.progress++;
          if (vm.progress === 100)
              clearInterval(progressBarInterval);
        }, 75);
      }
    },
    computed: {
        effectColors: function(){
          return {
            shrink: this.attachColor,
          highlight: !this.attachColor
        }
      },
      isTrueClass: function(){
          return this.isTrue === 'true' ? true :
              false;
      },
      progressStyle: function(){
      return 'width: '+ this.progress+'%; background-color: purple; height: 100%'
      }
    }
  });
  