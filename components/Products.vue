<template>
  <div class="col-md-9 pt-3 products container-fluid">
    <div class="row bg-danger/">

     <card v-for="c in this.$store.state.products" :drinking="c" :key="c.id" ></card>

    </div>
  </div>
</template>
<script>
import Card from './Card'

export default {
  components: {
    "card": Card,
  },
  data() {
      return {

      }
  }
}
</script>
<style scoped>
.products {
  height: 100vh;
}
</style>
