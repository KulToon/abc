<template>
    <button 
        :id="id"
        class="coin"
        :draggable="onDrag"
        @dragstart="draging"
    >
        <slot />
    </button>
</template>
<script>
export default {
    props: ["id", "onDrag"],
    methods: {
       draging(e) {
            const target = e.target;
            e.dataTransfer.setData('coin_n', target.id)         
        }    
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
    background: #fff;
    color: #000;
    border-radius: 50%;
    transition: all 0.3s;
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 3px;
    }
.coin:hover {
    background: #ffb500;
    color: #fff;
    border: 0;

}
.coin:focus{
    background: #f57224;
    color: #fff;
    outline: none;
}
</style>