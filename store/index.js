export const state = () => ({
    counter: 0,
    products: null,
    totalProduct: 0,
    coins: [10,5,2,1],
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
      //change
      let change = []
      state.coins.forEach((coin, i) => {
        if(amount >= coin){
          change[i] = Math.floor(amount / coin);
          amount = amount - change[i] * coin
        }
        let key = coin.toString()
        //เหรียญ : จพนวน
        state.refund[key] = change[i]
      })
    },
    buyDrinking(state, item){
      let amount = state.counter - item.price
      if(amount >= 0){
          state.counter = amount
          mutations.calRefund(state, amount)
          state.modalItem = item
          state.modalStatus = "success"      

        }else{
          mutations.calRefund(state, 0)
          state.modalStatus = "fail"      
        }
      },
      refund(state){
        mutations.calRefund(state, state.counter)
        state.modalStatus = "refund"      
      },
      reset(state){
        console.log("reset");
        state.refund = {}
        state.counter = 0
        state.modalItem = {}
      },


  }