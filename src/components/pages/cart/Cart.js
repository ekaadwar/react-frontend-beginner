import React from "react"

class Cart extends React.Component{
  render(){
   return(
    <section class="cart pt-20 h-screen">
      <div class="container flex justify-center mx-auto h-full">
        <div class="inline-block space-y-10">
          <h2 class="text-3xl font-bold text-white text-shadow w-auto">Chekout your<br />item now!</h2>
          <div class="cart-body flex space-x-20">
            <div>
              <div class="order flex flex-col justify-between h-full w-72 px-5 py-16 bg-white rounded-2xl text-sm">
                <h3 class="text-xl font-bold text-center text-yellow-900">Order Summary</h3>
                <div class="grid grid-cols-3">
                  <div class="item h-12 w-12 bg-blue-200 rounded-xl overflow-hidden justify-center items-center"><img class="h-full w-full" src="img/produk/hazelnutLatte.png" alt="Hazelnut" /></div>
                  <p class="item">Hazelnut x1 Regular</p>
                  <p class="item justify-self-end">IDR 24.0</p>
                  <div class="item h-12 w-12 bg-blue-200 rounded-xl overflow-hidden"><img class="h-full w-full" src="img/produk/chikenWing.png" alt="Chiken Fire Wings" /></div>
                  <p class="item">Chiken Fire Wings</p>
                  <p class="item justify-self-end">IDR 30.0</p>
                </div>
                <div class="grid grid-cols-2">
                  <p>SUBTOTAL</p>
                  <p class="justify-self-end">IDR 120.000</p>
                  <p>TAX & FEES</p>
                  <p class="justify-self-end">IDR 20.000</p>
                  <p>SHIPPING</p>
                  <p class="justify-self-end">IDR 10.000</p>
                </div>
                <div class="flex justify-between">
                  <h3 class="text-xl font-bold text-yellow-900">TOTAL</h3>
                  <h3 class="text-xl font-bold text-yellow-900">IDR 150.000</h3>
                </div>
              </div>
            </div>
            <div>
              <form class="flex flex-col justify-between h-full w-72">
                <div>
                  <div class="flex justify-between items-center text-white font-bold">
                    <h4 class="text-shadow">Address details</h4>
                    <p class="text-shadow text-xs hover:text-yellow-500"><a href="">edit</a></p>
                  </div>
                  <div class="px-5 py-5 bg-white rounded-2xl">
                    <p><span class="font-bold">Delivery</span> to Iskandar Street Km 5 refinery road oppsite re public road, effurun, Jakarta</p>
                    <hr />
                    <p>+62 81348287878</p>
                  </div>
                </div>
                <div>
                  <h4 class="text-shadow flex justify-between items-center text-white font-bold">Payment method</h4>
                  <div class="px-5 py-5 bg-white rounded-2xl space-y-5">
                    <div class="flex items-center space-x-3">
                      <input type="radio" id="card" name="payment" value="card" />
                      <label class="flex items-center space-x-3" for="card">
                        <div class="flex justify-center items-center h-10 w-10 bg-yellow-600 rounded-md text-white"><i class="far fa-credit-card"></i></div>
                        <p>Card</p>
                      </label>
                    </div>
                    <div class="flex items-center space-x-3">
                      <input type="radio" id="bank" name="payment" value="bank" />
                      <label class="flex items-center space-x-3" for="bank">
                        <div class="flex justify-center items-center h-10 w-10 bg-yellow-900 rounded-md text-white"><i class="fas fa-university"></i></div>
                        <p>Bank Account</p>
                      </label>
                    </div>
                    <div class="flex items-center space-x-3">
                      <input type="radio" id="cash" name="payment" value="cash" />
                      <label class="flex items-center space-x-3" for="cash">
                        <div class="flex justify-center items-center h-10 w-10 bg-yellow-400 rounded-md text-white"><i class="fas fa-truck"></i></div>
                        <p>Cash and delivery</p>
                      </label>
                    </div>
                  </div>
                </div>
                <input class="w-72 bg-yellow-900 text-white hover:bg-yellow-800 py-3 rounded-xl" type="submit" value="Confirm and Pay" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
   )   
  }
}

export default Cart