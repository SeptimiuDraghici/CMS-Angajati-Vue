<template>
    <div id="dashboard">
        <h1>Employees</h1>
        <div class="table-div">
            <table id="myTable" style="border: solid black; color:white;">
                <tr>
                    <th>
                        Picture
                    </th>
                    <th>
                        Nume
                    </th>
                    <th>
                        Prenume
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Gender
                    </th>
                    <th>
                        Data nasterii
                    </th>
                </tr>
                <tr v-for="angajat in employees" v-bind:key="angajat.id">
                    <td>
                        Picture
                    </td>
                    <td>
                        {{ angajat.nume }}
                    </td>
                    <td>
                        {{ angajat.prenume }}
                    </td>
                    <td>
                        {{ angajat.id }}
                    </td>
                    <td>
                        {{ angajat.gender }}
                    </td>
                    <td>
                        {{ angajat.date }}
                    </td>
                    <td>
                        <button class="my-button" @click="deleteEmployee(angajat.id)">DEL</button>
                    </td>
                </tr>
            </table>
            <div class="table-buttons">
                <router-link to="/add" class="my-button">
                    Add
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'dashboard',
    data () {
        return {
            employees: []
        }
    },
    created () {
        this.populateTable()
    },
    methods: {
        populateTable () {
            this.employees = []
            db.collection('angajati').orderBy('nume').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const data = {
                        'id': doc.id,
                        'nume': doc.data().nume,
                        'prenume': doc.data().prenume,
                        'gender': doc.data().gender,
                        'date': doc.data().data_nasterii
                    }
                    this.employees.push(data)
                })
            })
        },
        async deleteEmployee (id) {
            console.log(id)
            if(confirm('Are you sure?'))
            {
                await db.collection('angajati').where('email','==',id).get().then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        doc.ref.delete()
                    })
                })
                this.populateTable()
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
    
    .table-div {
        border: solid black;
        display: flex;
        margin: 0 auto;
        margin-top: 50px;
        flex-direction: column;
        width: 90%;
        padding: 10px;
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

    .table-buttons{
        display: flex;
        flex-direction: row;
        margin-left: auto;
    }

</style>
