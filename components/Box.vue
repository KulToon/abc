<template>
    <div
        @dragover.prevent
        @drop.prevent="put"
    >
        <slot />
    </div>
</template>
<script>
export default {
    methods: {
        put(e) {
            const coin = e.dataTransfer.getData('coin_n');
            this.$store.commit("insertingCoin", parseInt(coin))
            console.log(coin);
        }
    }
}
</script>
<style scoped>

</style>