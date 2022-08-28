<template>
    <div v-if="singleGraphic">
        <ul>
            <li>
                <h1>
                    {{singleGraphic[0].gpuNoA}} |
                    {{singleGraphic[0].gpuFront_Img}} |
                    {{singleGraphic[0].gpuNrAr}} |
                    {{singleGraphic[0].gpuGen}} |
                    {{singleGraphic[0].gpuChip}}
                </h1>
            </li>
        </ul>
    </div>
    <div v-else>Nothing to look at</div>
</template>
<script>
export default {
    mounted(){
        this.$store.dispatch("fetchSingleGraphic", this.$route.params.id)
    },
    computed : {
        singleGraphic(){
            return this.$store.state.singleGraphic
        }
    }
}
</script>