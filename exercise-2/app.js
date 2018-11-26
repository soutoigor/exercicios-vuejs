new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alertMe: function(){
            alert('Button Clicked!');
        },
        storeValue: function(e){
            this.value = e.target.value;
        }
    }
});