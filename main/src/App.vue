<template>
  <div id="app">
    <TitleComponent/>
    <FormComponent/>
    <TableComponent/>
  </div>
</template>

<script>
import TitleComponent from './components/TitleComponent.vue'
import FormComponent from './components/FormComponent.vue'
import TableComponent from './components/TableComponent.vue'

export default {
  name: 'App',
  components: {
    TitleComponent,
    FormComponent,
    TableComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
