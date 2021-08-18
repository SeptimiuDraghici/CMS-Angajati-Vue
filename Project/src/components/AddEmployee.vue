<template>
    <div id="add-employee">
        <h1>Add Employee</h1>
        <div class="form-div">
            <form @submit.prevent="sendEmployee">
                <label>
                    Nume:*
                </label>
                <input type="text" name="nume" v-model="nume" required>
                <br><br>
                <label>
                    Prenume:*
                </label>
                <input type="text" name="prenume" v-model="prenume" required>
                <br><br>
                <label>
                    Email:*
                </label>
                <input type="text" name="email" v-model="id" required @keyup="ok = true">
                <br><br>
                <label>
                    Gender:*
                </label>
                <select name="gender" v-model="gender" required>
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
                <input type="date" name="data_nasterii" v-model="date" required>
                <br><br>
                Imagine:*
                <input type="file" accept="image/*" name="image" id="file" onchange="loadFile(event)">
                <br><br>
                <center>
                    <button class="my-button" type="submit">Send</button>
                    <router-link class="my-button" to="/">Cancel</router-link>
                </center>
            </form>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'add-employee',
    data () {
        return {
            ok: true,
            id: null,
            nume: null,
            prenume: null,
            email: null,
            gender: null,
            date: null
        }
    },
    methods: {
        async sendEmployee () {
            const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(re.test(String(this.id))) {
                await db.collection('angajati').get().then(doc => {
                    doc.forEach(doc => {
                        var email = doc.data().id
                        console.log(email + "/" + this.id)
                        if(email == this.id)
                        {
                            this.ok = false
                        }
                    })
                })
                console.log(this.ok)
                if(this.ok) {
                    db.collection('angajati').doc(this.id).set({
                        id: this.id,
                        nume: this.nume,
                        prenume: this.prenume,
                        email: this.id,
                        gender: this.gender,
                        data_nasterii: this.date
                    })
                    .then(docRef => {
                        this.$router.push('/')
                    })
                    .catch(error => console.log(err))
                }
                else {
                    alert("Email is already taken!")
                }
            }
            else{
                alert("\'Email\' invalid! (ex email: example@gmail.com)")
            }
        }
    }
}
</script>

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
        margin-right: 5px;
        padding: 2px;
        border: solid white;
        text-decoration: none;
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
