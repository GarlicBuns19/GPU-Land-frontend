<template>
    <div v-if="singleProduct">
        <ul>
            <li>
                <h1>
                    {{singleProduct[0].gpuNoA}} |
                    {{singleProduct[0].gpuNrAr}} |
                    {{singleProduct[0].gpuGen}} |
                    {{singleProduct[0].gpuChip}}
                </h1>
            </li>
        </ul>
    </div>
    <div v-else>Nothing to look at</div>
</template>
<script>
export default {
    mounted(){
        this.$store.dispatch("fetchSingleProduct", this.$route.params.id)
    },
    computed : {
        singleProduct(){
            return this.$store.state.singleProduct
        }
    }
}
</script>