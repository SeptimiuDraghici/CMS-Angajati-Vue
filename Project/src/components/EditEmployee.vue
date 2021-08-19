<template>
    <div id="edit-employee">
        <h1>Edit Employee</h1>
        <div class="form-div">
            <form @submit.prevent="saveEmployee">
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
                <input type="text" name="email" v-model="id" readonly>
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
    name: 'edit-employee',
    data () {
        return {
            id: null,
            nume: null,
            prenume: null,
            email: null,
            gender: null,
            date: null
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('angajati').where('id', '==', to.params.employee_id).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next (vm => {
                    vm.id = doc.data().id
                    vm.nume = doc.data().nume
                    vm.prenume = doc.data().prenume
                    vm.email = doc.data().email
                    vm.gender = doc.data().gender
                    vm.date = doc.data().data_nasterii
                })
            })
        })
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            db.collection('angajati').where('id', '==', this.$route.params.employee_id).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.id = doc.data().id
                    this.nume = doc.data().nume
                    this.prenume = doc.data().prenume
                    this.email = doc.data().email
                    this.gender = doc.data().gender
                    this.date = doc.data().data_nasterii
                })
            })
        },
        saveEmployee () {
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
