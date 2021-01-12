<template>
  <div
    class="col-md-3 navside d-flex flex-column justify-content-between/ py-5 px-3 bg-danger/"
  >
    <div class="branding text-center">
      <h1>Vending Machine</h1>
    </div>
    <div class="total d-flex justify-content-center mt-5 align-items-center">
      <h1 >{{ this.$store.state.counter }}</h1>
    </div>
    <div class="d-flex justify-content-between mt-5 aligncenter">
      <coin 
        v-for="c in this.$store.state.coins" 
        :key="c"
        v-on:click.native="insert(c)"   
      >
        {{ c }}</coin>
    </div>
    <div class="drop-zone mt-5">
      <button-app>INSERT</button-app>
    </div>
  </div>
</template>

<script>
    import Coin from './Coin'
    import ButtonApp from './ButtonApp'

export default {
    components: {
        "coin": Coin,
        "button-app": ButtonApp
    },
    data(){
        return {

        }
    },
    methods: {
        insert(item) {
            this.$store.commit("insertingCoin", item)
        }
    }
}
</script>

<style scoped>
.navside {
  background: white;
  box-shadow: 1px 0px 0px 0 rgba(0, 0, 0, 0.3);
  height: 90vh;
}
.total h1 {
  font-size: 6rem !important;
}
</style>
