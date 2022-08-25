<template>
    <table>
        <thead>
            <tr>
                <th>GPU Id</th>
                <th>gpuNoA</th>
                <th>gpuNrAr</th>
                <th>gpuGen</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="grapic in grapicCards" :key="grapic.gpu_id">
                <td>{{grapic.gpu_id}}</td>
                <td>{{grapic.gpuNoA}}</td>
                <td>{{grapic.gpuNrAr}}</td>
                <td>{{grapic.gpuGen}}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>

export default {
    mounted(){
        this.$store.dispatch("fetchProducts")
    },
    computed : {
        grapicCards(){
            return this.$store.state.products
        }
    }
}
</script>
