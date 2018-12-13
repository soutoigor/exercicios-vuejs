<template>
    <div class="container">
        <server-status-header></server-status-header>
        <hr>
        <div class="row">
        <servers-content></servers-content>
        <server-details></server-details>
        </div>
        <hr>
        <server-status-footer></server-status-footer>
    </div>
</template>

<script>
    import Header from './components/shared/Header.vue';
    import Servers from './components/servers/ServerStatus.vue';
    import ServerDetails from './components/servers/ServerDetails.vue';
    import Footer from './components/shared/Footer.vue';

    export default{
        components: {
            'server-status-header': Header,
            'servers-content': Servers,
            'server-details': ServerDetails,
            'server-status-footer': Footer
        }
    }
</script>

<style>

</style>
