<template>
    <div v-if="singleProducts">
        <ul>
            <li v-for="product in singleProducts" :key="product.gpu_id">
                <h1>
                    {{product.gpuNoA}} |
                    {{product.gpuNrAr}} |
                    {{product.gpuGen}} |
                    {{product.gpuChip}}
                </h1>
            </li>
        </ul>
    </div>
    <div v-else>Nothing to look at</div>
</template>
<script>
export default {
    mounted(){
        this.$store.dispatch("fetchSingleProducts", this.$route.params.id)
    },
    computed : {
        singleProducts(){
            return this.$store.state.singleProducts
        }
    }
}
</script>