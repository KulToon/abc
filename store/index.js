export const state = () => ({
    counter: 0,
    products: null,
    totalProduct: 0,
    coins: [10,5,2,1],
    modalShow: false,
    modalStatus: null,
    modalItem: {},
    refund: {}
  })
  
  export const mutations = {
    productRegister(state, payload) {
        state.products = payload
    },
    insertingCoin(state, coin) {
      state.counter += coin
    },
    calRefund(state, amount){
      let change = []

      state.coins.forEach((coin, i) => {
        if(amount >= coin){
          change[i] = Math.floor(amount / coin);
          amount = amount - change[i] * coin
        }
        let key = coin.toString()
        state.refund[key] = change[i]
      })
    },
    buyDrinking(state, item){

      let amount = state.counter - item.price
      state.counter = amount
      if(amount >= 0){

        mutations.calRefund(state, amount)

        state.modalItem = item
        state.modalStatus = "success"      
        state.modalShow = true;

        }else{
          mutations.calRefund(state, 0)
          state.modalStatus = "fail"      
          state.modalShow = true;
        }
      },
      colseModal(state){
        state.modalShow = false
        state.refund = {}
        state.counter = 0
        state.modalItem = {}
      },


  }