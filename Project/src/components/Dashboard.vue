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
                        <img :src="angajat.pic" width="50" height="50" />
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
                        <router-link v-bind:to="{name: 'edit-employee', params: {employee_id: angajat.id}}" class="my-button">
                            Edit
                        </router-link>
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
        <div v-if="!results_loaded">
            <center>
                <div class="half-circle-spinner">
                    <div class="circle circle-1"></div>
                    <div class="circle circle-2"></div>
                </div>
                </center>
        </div>
    </div>
</template>

<script>
var moment = require('moment')
import db from './firebaseInit'
import storageRef from './storageRef'
export default {
    name: 'dashboard',
    data () {
        return {
            employees: [],
            results_loaded: false,
            data_nasterii: '',
            employeePictures: []
        }
    },
    created () {
        this.populateTable()
    },
    methods: {
        populateTable () {
            this.employees = []
            db.collection('angajati').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.data_nasterii = moment(doc.data().data_nasterii).format("D MMMM YYYY")
                    const data = {
                        'id': doc.id,
                        'nume': doc.data().nume,
                        'prenume': doc.data().prenume,
                        'gender': doc.data().gender,
                        'date': this.data_nasterii,
                    }
                    this.getPicture(doc.id,data)
                })
                this.results_loaded = true
            console.log(this.employeePictures);
            })
        },
        getPicture (email,data) {
            storageRef.child(email).getDownloadURL().then((url) => {
                data.pic = url;
                this.employees.push(data)
            }).catch(()=>{
                storageRef.child('default.png').getDownloadURL().then((url) => {
                    data.pic = url;
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

    .half-circle-spinner, .half-circle-spinner * {
      box-sizing: border-box;
    }

    .half-circle-spinner {
      width: 60px;
      height: 60px;
      border-radius: 100%;
      position: relative;
    }

    .half-circle-spinner .circle {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: calc(60px / 10) solid transparent;
    }

    .half-circle-spinner .circle.circle-1 {
      border-top-color: #ff1d5e;
      animation: half-circle-spinner-animation 1s infinite;
    }

    .half-circle-spinner .circle.circle-2 {
      border-bottom-color: #ff1d5e;
      animation: half-circle-spinner-animation 1s infinite alternate;
    }

    @keyframes half-circle-spinner-animation {
      0% {
        transform: rotate(0deg);

      }
      100%{
        transform: rotate(360deg);
      }
    }

</style>
