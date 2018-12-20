<template>
   <ServerList></ServerList>
</template>

<script>
import ServerList from 'ServerList.vue';
    export default {
        data(){
            return {
            servers: [
                {id: 1, status: 'Normal'},
                {id: 2, status: 'Critical'},
                {id: 3, status: 'Slow'},
                {id: 4, status: 'Unknown'}
            ]
            };
        }
            
    }
</script>

<style>

</style>
