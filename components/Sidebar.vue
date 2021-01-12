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
        {{ c }}
      </coin>
    </div>
    <div class="drop-zone mt-5">
      <button-app @click.native="refunding" >REFUND</button-app>
    </div>

    <!-- ======== Modal ========= -->
      <b-modal ref="my-modal"  title="Using Component Methods">

          <template #modal-header>
            <div>
              <h5 class="text-center"></h5>
            </div>
          </template>

          <b-container fluid>
            <b-row class="mb-1">
            <div class="container">
              <div class="row">
                <!-- component -->
               
                  <cancel ></cancel>
                <!-- component -->
              </div>
            </div>
          </b-row> 
          </b-container>

          <template #modal-footer>
            <div class="w-100">
              <button-app @click.native="close">Close</button-app>
            </div>
          </template>
    </b-modal>

  </div>
</template>

<script>
  import Coin from './Coin'
  import ButtonApp from './ButtonApp'
  import ModalCancel from './ModalCancel'

export default {
    components: {
        "coin": Coin,
        "button-app": ButtonApp,
        "cancel": ModalCancel
    },
    data(){
        return {

        }
    },
    methods: {
        insert(item) {
          this.$store.commit("insertingCoin", item)
        },
        refunding(){
          console.log("aaaa");
          this.$store.commit("refund")   
          this.$refs['my-modal'].show()   
        },
        close() {
          this.$store.commit("reset")   
          this.$refs['my-modal'].hide()

        }
    }
}
</script>

<style scoped>
.navside {
  background: white;
  box-shadow: 2px 0px 0px 0 rgba(0, 0, 0, 0.3);
  height: 100vh;
}
.total h1 {
  font-size: 6rem !important;
}
</style>
