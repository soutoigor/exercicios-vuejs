<template>
    <div>
        <slot name="title"></slot>
        <slot name="name"></slot>
        <input  type="text">
        <p>{{ texto }}</p>
    </div>
</template>

<script>
export default {
    props: ['quote'],

    data(){
        return{
            texto: 'vaicoroi'
        }
    }
}
</script>

<style scoped>
* {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;   
}
div {
    border: 1px solid #bbb;
    margin: 30px auto;
    padding: 30px;
    box-shadow: 1px 1px 2px #000;
    text-align: center;
    background: -webkit-linear-gradient(left, rgba(139,30,212,1) 0%, rgba(139,30,212,0.86) 44%, rgba(56,86,238,0.76) 74%, rgba(0,123,255,0.76) 94%);
    }
h1 {
    color: #fff;
    font-size: 3em;
    font-weight: 500
}
p {
    font-size: 1.6em;
    color: #fff
}
   
</style>
