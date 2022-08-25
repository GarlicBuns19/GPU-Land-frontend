<template>
    <h1>Products</h1>
    <div v-if="products">
        <ul>
            <li v-for="product in products" :key="product.gpu_id">
                <router-link :to="{name : 'singleProducts', params : {id : product.gpu_id} }">
                    <h1>
                    {{product.gpuNoA}} |
                    {{product.gpuNrAr}} |
                    {{product.gpuGen}} |
                    {{product.gpuChip}}
                </h1>
                <h2>Year {{product.released}}</h2>
                <h2>
                    {{product.memoryGb}} |
                    {{product.memoryType}} |
                    {{product.memoryBit}}
                </h2>
                <p>
                    {{product.gpuClock}} mhz
                </p>
                <p>
                    {{product.memoryClock}} mhz
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
        this.$store.dispatch("fetchProducts")
    },
    computed : {
        products(){
            return this.$store.state.products
        }
    }
}
</script>
