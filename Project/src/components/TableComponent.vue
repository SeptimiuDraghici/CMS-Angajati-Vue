<template>
  <div class = "table-div">
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
                <th>
                    CheckBox Delete
                </th>
            </tr>
        </table>
        <input class="my-button" type="button" value="Delete Employees" onclick="deleteRow('myTable')"/>
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
    
    .table-div {
        border: solid black;
        display: flex;
        margin: 0 auto;
        margin-top: 50px;
        flex-direction: column;
        width: 90%;
        padding: 10px;
    }

    .table-div input {
        margin-left: auto;
    }

</style>
