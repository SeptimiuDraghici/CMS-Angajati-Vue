<template>
    <div class="form-div">
        <form id="myForm" name="myForm" method="GET">
            <label>
                Nume:*
            </label>
            <input type="text" name="nume">
            <br><br>
            <label>
                Prenume:*
            </label>
            <input type="text" name="prenume">
            <br><br>
            <label>
                Email:*
            </label>
            <input type="text" name="email">
            <br><br>
            <label>
                Gender:*
            </label>
            <select name="gender">
                <option value=""></option>
                <option value="Male">
                    Male
                </option>
                <option value="Female">
                    Female
                </option>
                <option value="Rather not say">
                    Rather Not Say
                </option>
            </select>
            <br><br>
            <label>
                Data nasterii:*
            </label>
            <input type="date" name="data_nasterii">
            <br><br>
            Imagine:*
            <input type="file" accept="image/*" name="image" id="file" onchange="loadFile(event)">
            <br><br>
            <center>
                <input class="my-button" type="button" name="submit" Value="Send" @click="getInputs();">
                <input id="cancel-button" class="my-button" type="button" name="cancel" value="Cancel" onclick="closeForm()">
            </center>
        </form>
    </div>
</template>

<script>
import db from 'firebase'
export default {
  name: 'FormComponent',
  data () {
    return {
        angajati: []
    }
  },
  created () {
    db.collection('angajati').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            console.log(doc);
        });
    })
  },
  methods: {
        getInputs(form){
            this.nume = form.nume;
            console.log(this.nume);
        }
  }
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

    .form-div {
        display: flex;
        margin: 0 auto;
        color: wheat;
        flex-direction: column;
        width: 450px;
        margin-top: 30px;
    }
    .form-div input[type="text"], input[type="date"], input[type="file"] {
        font-family: inherit;
        width: 100%;
        border: 0;
        border-bottom: 2px solid gray;
        outline: 0;
        font-size: 21px;
        color: white;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;
    }

    .my-button {
        width: fit-content;
        margin-top: 10px;
        background-color: rgb(255, 0, 0);
        color: white;
        font-size: 21px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }

    .edit-button {
        width: fit-content;
        background-color: rgb(255, 0, 0);
        color: white;
        font-size: 18px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }

    #cancel-button {
        display: none;
        flex-direction: row;
    }

    .form-div select {
        font-family: inherit;
        width: 100%;
        border: 0;
        border-bottom: 2px solid gray;
        outline: 0;
        font-size: 1.3rem;
        color: white;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;
    }

    .form-div option {
        background-color: black;
    }
</style>
