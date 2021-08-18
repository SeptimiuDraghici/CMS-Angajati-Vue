<template>
    <div id="dashboard">
        <h1>Dashboard</h1>
        <TableComponent/>
    </div>
</template>

<script>
import TableComponent from './TableComponent'
export default {
    name: 'dashboard',
    components: {
        TableComponent
    },
    data () {
        return {

        }
    }
}
</script>
