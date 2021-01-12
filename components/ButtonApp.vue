<template>
    <button class="btn  button">
        <slot />
    </button>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.button {
    width: 100%;
    background: #ffb500 !important;
    color: white !important;
    font-weight: bold;
    padding: 5px !important;
}
</style>