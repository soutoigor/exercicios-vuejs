<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Directives <small>Exercise</small></h1>
                <div v-listenTo:click="clickFunc"  class="square" id="first" >
                    click me
                </div>
                <input type="text" v-listenTo:input="inputFunc" name="" id="">

                <div v-listenTo:mouseover="hoverFunc" class="square" id="second" >
                    hover
                </div>
                <input type="text" v-listenTo:input name="" id="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       methods: {
           clickFunc(){
               console.log('Clicked');
           },
           hoverFunc(){ 
               console.log('Hovered');
           },
           inputFunc(){
               console.log('inputed');
           }
       }
    }
</script>

<style scoped>
    div.square {
        width: 100px;
        height: 100px;
        border: 2px solid #222;
        border-radius: 10px;
        color: #fff;
        padding: 30px;
        text-align: center;
        cursor: pointer;
    }
    #first {
        background-color: #800;
    }
    #second {
        background-color: #080;
    }
    #third {
        background-color: #008;
    }
</style>
