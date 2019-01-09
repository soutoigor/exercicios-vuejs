<template>
    <div>
        {{userData.firstName}} {{userData.lastName}}
    </div>
</template>

<script>
export default {
    props: ['userData.firstName', 'userData.lastName']
}
</script>
