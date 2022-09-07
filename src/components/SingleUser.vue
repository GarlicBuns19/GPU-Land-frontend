<template>
    <div v-if="user">
        <h1>{{user[0].user_id}}</h1>
        <h1>{{user[0].userFName}}</h1>
        <img :src="user[0].userImg" alt="">
    </div>
</template>
<script>

export default {
    mounted(){
        this.$store.dispatch('fetchSingleUser',JSON.parse(localStorage.getItem('user')).user_id)
    },
    computed : {
        user(){
            return this.$store.state.singleUser
        }
    }
}
</script>
