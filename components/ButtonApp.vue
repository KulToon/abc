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
    background: #f57224 !important;
    color: white !important;
    font-weight: bold;
    padding: 5px !important;
}
</style>