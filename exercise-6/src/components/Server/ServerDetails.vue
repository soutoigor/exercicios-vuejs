<template>
    <div class="col-xs-12 col-sm-6">
        <h2>Server Details</h2>
        <p><strong>Server selected:</strong> {{server.id}}, <strong>Status: </strong>{{server.status}}</p>
        <button @click="updateServer">Update Server</button>
    </div>

</template>

<script>
    export default {
        props: ['Servers'],
        methods: {
            updateServer(){
                this.status = 'Normal';
                this.$emit('serverNormal', this.status);
            }
        }
    }
</script>

<style>

</style>
