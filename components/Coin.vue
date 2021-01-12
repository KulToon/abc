<template>
    <div class="coin" >
        <slot />
    </div>
</template>
<script>
export default {
    methods: {
      
    }
}
</script>
<style scoped>
.coin {
    width: 50px;
    height: 50px;
    border: 1px solid #212529;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    border-radius: 50%;
    transition: all 0.3s;
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 3px;
    }
.coin:hover, .coin:focus {
    background: #ffb500;
    color: #fff;
    border: 0;
}
</style>