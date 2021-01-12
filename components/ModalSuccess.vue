<template>
    <div class="col-sm-8 mx-auto">
        <div class="bg-white mb-4 d-flex flex-column justify-content-around align-items-center card shadow-sm py-4 px-4">
            <img
                :src="this.$store.state.modalItem.image"
                alt="1"
                width="100"
                class="img-fluid logo rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 class="mb-0"> {{ this.$store.state.modalItem.name }} </h5>                  
        </div>
        <h4 class="text-center mb-3 border-bottom border-warning">Change</h4>
        <div class="d-flex flex-column justify-content-around">
            <div v-for="(c, i) in this.$store.state.refund" :key="i">
                <div class="d-flex justify-content-around align-items-center /bg-danger">
                    <coin v-if="c > 0"> {{i}} </coin> <h5 v-if="c > 0"> x {{ c }}</h5>
                </div>
            </div>
        
        </div>
    </div>
</template>
<script>
import Coin from './Coin'
export default {
    components: {
        "coin" : Coin
    },        
    data(){
      return {
          obj: {1333:10, 22:11}
       }
    },
    methods: {
        close(){
            this.$store.commit("colseModal");
        }
    },
    beforeDestroy() {
        this.$store.commit("reset");
    }
}
</script>
<style scoped>
.card {
    min-height: 255px;
}
</style>