<template>
    <h1>graphics</h1>
    <div v-if="graphics">
        <ul>
            <li v-for="graphic in graphics" :key="graphic.gpu_id">
                <router-link :to="{name : 'singleProduct', params : {id : graphic.gpu_id} }">
                    <h1>
                    {{graphic.gpuNoA}} |
                    <img :src="graphic.gpuFront_Img" alt=""> |
                    {{graphic.gpuNrAr}} |
                    {{graphic.gpuGen}} |
                    {{graphic.gpuChip}}
                </h1>
                <h2>Year {{graphic.released}}</h2>
                <h2>
                    {{graphic.memoryGb}} |
                    {{graphic.memoryType}} |
                    {{graphic.memoryBit}}
                </h2>
                <p>
                    {{graphic.gpuClock}} mhz
                </p>
                <p>
                    {{graphic.memoryClock}} mhz
                </p>
                </router-link>
            </li>
        </ul>
    </div>
    <div v-else>No stock</div>
</template>
<script>
export default {
    mounted(){
        this.$store.dispatch("fetchGraphics")
    },
    computed : {
        graphics(){
            return this.$store.state.graphics
        }
    }
}
</script>
