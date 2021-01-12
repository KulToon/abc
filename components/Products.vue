<template>
  <div class="col-md-9 pt-3 products container-fluid">
    <div class="row bg-danger/">
     <card @openModal="openModal" v-for="c in this.$store.state.products" :drinking="c" :key="c.id" ></card>
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
                <success v-if="this.$store.state.modalStatus == 'success'"/>
                <fail v-else />
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
  </div>
</template>
<script>

  import Card from './Card'
  import ModalSuccess from './ModalSuccess'
  import ModalFail from './ModalFail'

export default {
  components: {
    "card": Card,
    "success" : ModalSuccess,
    "fail" : ModalFail,
  },
  data() {
      return {
            modalShow: false
      }
  },
  methods: {
    openModal(e){
       this.$refs['my-modal'].show()
    },
    close() {
      this.$refs['my-modal'].hide()
    }
  }
}
</script>
<style scoped>
.products {
  height: 100vh;
  background: #f5f5f5;
}
</style>
