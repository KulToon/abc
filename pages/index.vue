<template>
   <div class="container-fluid ">
      <div class="row" >
          <side-bar/>
          <products-app />
      </div>
   </div>
</template>


<script>
import Sidebar from '../components/Sidebar'
import Products from '../components/Products'
import axios from 'axios'
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
    const url = 'https://kkkkk666.herokuapp.com/api/h';
    return app.$axios.get(url).then(res => {
      //console.log(res.data);
      store.commit("productRegister", res.data.data)
    })
  },   
  // mounted(){
  //   const url = 'https://kkkkk666.herokuapp.com/api/h';
  //   return axios.get(url).then(res => {
  //     //console.log(res);
  //     this.$store.commit("productRegister", res.data.data)
  //   })
  // }
}
</script>

<style>

</style>
