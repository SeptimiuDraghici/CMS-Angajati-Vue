<template>
    <div class="div-titlu">
        <h1 id="titlu-add" class="titlu-add">
            Add Employee
        </h1>
        <h1 id="titlu-edit" class="titlu-edit">
            Edit Employee
        </h1>
    </div>
</template>

<script>
export default {
  name: 'TitleComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    * {
        margin: 0;
    }
    html, body {
        height: 100%;
    }

    body {
        background: rgb(2,0,36);
        background: linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(10,91,147,1) 25%, rgba(0,212,255,1) 100%);
        font-family: 'Roboto', sans-serif;
        display: flex;
        flex-direction: column;
    }

    .div-titlu {
        width: 250px;
        display: flex;
        margin: 0 auto;
        margin-top: 30px;
        height: 50px;
    }

    .titlu-add {
        position: absolute;
    }
    .titlu-add {
        position: absolute;
        display: none;
    }
</style>
