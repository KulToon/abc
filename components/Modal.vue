<template>
    <b-modal ref="my-modal" v-model="modalShow">
       <template #modal-header>
        <div>
          <h5 class="text-center"></h5>
        </div>
      </template>

      <b-container fluid>
         <b-row class="mb-1">
        <div class="container">
          <div class="row">
            <!-- <success v-if="this.$store.state.modalStatus == 'success'"/>
            <fail v-else-if="this.$store.state.modalStatus == 'fail'"/>
            <cencel v-else /> -->
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
</template>
<script>
export default {
    props: ["modalShow"],
    data() {
        return {

        }
    },
    methods: {
        close() {
            this.$refs['my-modal'].hide()
        }
    }

}
</script>
<style scoped>

</style>