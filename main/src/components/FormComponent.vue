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
                <input class="my-button" type="button" name="submit" Value="Send" onClick="getInputs(this.form);">
                <input id="cancel-button" class="my-button" type="button" name="cancel" value="Cancel" onclick="closeForm()">
            </center>
        </form>
    </div>
</template>

<script>
export default {
  name: 'FormComponent',
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @import '../mystyles.css'
</style>
