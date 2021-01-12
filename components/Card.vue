<template>
        <div class="col-xl-3 col-sm-6 ">
            <div 
            class="bg-white mb-4 d-flex flex-columnjustify-content-center align-items-center card shadow-sm py-4 px-4">
                <img
                :src="drinking.image"
                alt="1"
                width="100"
                class="img-fluid card-image logo rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0"> {{ drinking.name }} </h5>
                <h6 class="mt-1 text-uppercase text-muted">{{ drinking.price }} Baht</h6>
                <button-app @click.native="buyAction" id="btnShow" ref="btnShow">Buy</button-app>
                
            </div>
        </div>
</template>
<script>
import ButtonApp from './ButtonApp'
export default {
    props: ['drinking'],
    components: {
        "button-app": ButtonApp,
    },
    data() {
        return {

        }
    },
    methods: {
        buyAction() {
            const item = this.drinking
            this.$store.commit("buyDrinking", item);
        },

    }
}
</script>
<style scoped>
.card {
    transition: all 0.4s;
    min-height: 255px;
}
.card:hover {
    transform: scale(1.1);
    box-shadow:0 1px 11px 0 rgba(0,0,0,.3);
}
.card-image {
    min-width: 100px;
    min-height: 100px;
}
</style>