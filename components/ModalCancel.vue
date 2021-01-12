<template>
    <div class="d-flex align-items-center flex-column w-100">
        <h1 class="text-center mb-3">Refund</h1>
        <div class="d-flex flex-column justify-content-around">
            <div v-for="(c, i) in this.$store.state.refund" :key="i">
                <div class="d-flex justify-content-around align-items-center change bg-danger/">
                    <coin v-if="c > 0"> {{i}} </coin> <h5 v-if="c > 0">x {{ c }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .change{
        min-width: 220px;
    }
</style>