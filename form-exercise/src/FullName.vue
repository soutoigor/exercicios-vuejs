<template>
    <div>
        {{fullName()}}
    </div>
</template>

<script>
export default {
    props: ['firstName', 'lastName'],
    methods: {
        fullName(){
            return firstName.value + ' ' + lastName.value;
        }
    }
}
</script>
