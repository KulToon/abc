export const state = () => ({
    counter: 0,
    products: null,
    totalProduct: 0,
    coins: [10,5,2,1],
    modalStatus: null,
    modalItem: {},
    refund: {},
    coinInsertList: {
      10: 0,
      5: 0,
      2: 0,
      1: 0
    }
  })
  
  export const mutations = {
    productRegister(state, payload) {
        //fetch product
        state.products = payload
    },
    insertingCoin(state, coin) {
      //insert coin
      //state.coinList.coin
      state.coinInsertList[coin] += 1 
      console.log(state.coinInsertList);
      state.counter += coin
    },
    calRefund(state, amount){
      //change calculator
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
        state.coinInsertList= {
          10: 0,
          5: 0,
          2: 0,
          1: 0
        }
      },


  }