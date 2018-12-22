<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-quote>
                   <h1 slot="title">Title</h1>
                   <p slot="name">Vai carai</p>
               </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    export default {
        components: {
            appQuote: Quote
        } 
    }
</script>

<style scoped>
   
</style>
