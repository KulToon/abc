<template>
  <div class="container">
    aaaa
  </div>
</template>

<script>
export default {
   data() {
    return {

    }
  },
  asyncData({ app, store }) {
    const url = 'http://localhost:3000/api/h';
    return app.$axios.get(url).then(res => {
      console.log(res.data);
      //store.commit("productRegister", res.data.data)
    })
  }
}
</script>

<style>

</style>
