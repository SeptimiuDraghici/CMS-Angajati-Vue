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
    @import '../mystyles.css'
</style>
