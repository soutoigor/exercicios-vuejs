<template>
    <div class="container-fluid">

        <div style="margin-top: 25px" class="row">
            <button @click="selectedComponent = 'appQuote'" class="btn btn-primary">Quote</button>
            <button @click="selectedComponent = 'appAuthor'" class="btn btn-warning">Author</button>
            <button @click="selectedComponent = 'appNew'" class="btn btn-danger">New</button>
        </div>
        <div  class="row">
            <div class="col-xs-12">
                <keep-alive>
                <component :is="selectedComponent"></component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data(){
            return {
                selectedComponent: 'app-quote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        } 
    }
</script>

<style scoped>
   
</style>
