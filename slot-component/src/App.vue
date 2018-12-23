<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="selectedComponent = 'appBlue',
                title= 'Im Blue',
                text = 'Da baa dee da baa da'"
                 class="btn btn-primary">Load Blue Template</button>
                <button @click="selectedComponent = 'appGreen',
                title= 'VAI PARMEEERA',
                text = '100mundial'"
                 class="btn btn-success">Load Green Template</button>
                <button @click="selectedComponent = 'appRed',
                title= 'MEU CORACAO É VERMELHOO',
                text = 'vermelho vermelhasso vermelho vermelho'"
                 class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="selectedComponent">
                    <h1>{{title}}</h1>
                    <p>{{text}}</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data(){
            return {
                    title: 'Im Blue',
                    text: 'Da baa dee da baa da',
                    selectedComponent: 'appBlue'
                                
            }
        }
    }
</script>

<style>
    * {
        color: white;
    }
</style>
