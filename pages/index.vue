<template>
   <div class="container-fluid py-3">
      <div class="row" >
          <side-bar/>
          <products-app />

      </div>
   </div>
</template>


<script>
import Sidebar from '../components/Sidebar'
import Products from '../components/Products'

export default {
  components: {
    "side-bar": Sidebar,
    "products-app": Products

  },
   data() {
    return {

    }
  },
  asyncData({ app, store }) {
    const url = 'http://localhost:3000/api/h';
    return app.$axios.get(url).then(res => {
      //console.log(res.data);
      store.commit("productRegister", res.data.data)
    })
  }
}
</script>

<style>

</style>
