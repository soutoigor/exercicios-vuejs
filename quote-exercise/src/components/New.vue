<template>
    <div>
       <h1>This is the New Page</h1>
       <p>New Page</p>
       <button @click="counter++">increase</button>
       <p>{{counter}}</p>
    </div>
</template>

<script>
export default {
    props: ['quote'],

    data(){
        return{
            counter: 0
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
    background: -webkit-linear-gradient(left, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.86) 44%, rgba(179, 179, 179, 0.76) 74%, rgba(174, 175, 174, 0.76) 94%);
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
