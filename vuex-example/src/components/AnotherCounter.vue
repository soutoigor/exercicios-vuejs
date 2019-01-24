<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 3000})">Another Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 3000})">Another Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    
    export default {
        methods: {
                ...mapActions([
                    'asyncIncrement',
                    'asyncDecrement'
                ])
        }
    }
</script>