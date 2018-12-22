<template>
    <div>
       <h1>Author's Page</h1>
       <p>This is the Author's Page</p>
        <input type="text">
    </div>
</template>

<script>
export default {
    props: ['quote']

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
    background: -webkit-linear-gradient(left, rgb(230, 0, 0) 0%, rgba(177, 4, 4, 0.86) 44%, rgba(248, 244, 0, 0.76) 74%, rgba(238, 255, 0, 0.76) 94%);
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
