import React from "react"

class Product extends React.Component{
    render(){
        return(
          <section class="product pt-20">
            <div class="border-t border-gray-300">
              <div class="container mx-auto">
                <div class="content flex h-screen divide-x divide-gray-300 divide-solid">
                  {/* <!-- bagian kiri --> */}
                  <div class="side flex flex-col justify-between py-10">
                    {/* <!-- bagian promo --> */}
                    <div class="space-y-5">
                      <div class="text-center">
                        <h3 class="text-2xl font-bold text-yellow-900">Promo for you</h3>
                      </div>

                      <div class="text-center">
                        <p>Coupons will be updated every weeks.</p>
                        <p>check them out!</p>
                      </div>

                      {/* <!-- card --> */}
                      <div class="flex items-center pl-10">
                        <div class="card flex flex-col bg-yellow-300 w-72 rounded-3xl">
                          <div class="main flex flex-col justify-evenly items-center border-dashed border-b border-black text-center">
                            <div class="w-28 h-28 bg-blue-500 rounded-full"></div>
                            <div>
                              <h3 class="text-2xl font-bold">Beef Spaghetti</h3>
                              <h3 class="text-2xl font-bold">20% OFF</h3>
                            </div>
                            <p>Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</p>
                          </div>
                          <div class="side flex flex-col justify-evenly text-center">
                            <p>COUPON CODE</p>
                            <h3 class="text-3xl font-bold">FSDT56AS</h3>
                            <p>Valid until October 10th 2020</p>
                          </div>
                        </div>
                        <div class="card-acc-1 w-7 rounded-r-full bg-black"></div>
                        <div class="h-80 w-7 rounded-r-full bg-yellow-900"></div>
                      </div>

                      <button class="w-72 py-4 ml-10 bg-yellow-900 rounded-2xl text-white font-bold">Apply Coupon</button>
                    </div>
                    {/* <!-- bagian ketentuan --> */}
                    <div>
                      <h5 class="font-bold">Term and Condition</h5>
                      <ol class="list-decimal">
                        <li>You can apply 1 coupon per day</li>
                        <li>It only for dine in</li>
                        <li>Buy 1 get 1 only for new user</li>
                        <li>Should make member card to apply coupon</li>
                      </ol>
                    </div>
                  </div>
                  {/* <!-- bagian kanan --> */}
                  <div class="main h-full">
                    <div class="flex flex-col justify-between w-full h-full p-10">
                      <div>
                        <ul class="flex justify-evenly">
                          <li class="inline-block"><a class="block" href="#">Favorite Product</a></li>
                          <li class="inline-block"><a class="block" href="#">Coffee</a></li>
                          <li class="inline-block"><a class="block" href="#">Non Coffee</a></li>
                          <li class="inline-block"><a class="block" href="#">Foods</a></li>
                          <li class="inline-block"><a class="block" href="#">Add-on</a></li>
                        </ul>
                      </div>
                      <div class="item grid grid-cols-4">
                        <div class="flex items-end w-36 h-56">
                          <a href="#">
                            <div class="w-36 h-44 border rounded-2xl text-center bg-white shadow-2xl">
                              <div class="w-24 h-24 -mt-12 bg-yellow-200 rounded-full mx-auto"></div>
                              <h4 class="text-xl font-bold">Veggie<br />tomato<br />mix</h4>
                              <h6 class="font-bold text-yellow-900">IDR. 34.000</h6>
                            </div>
                          </a>
                        </div>
                        <div class="flex items-end w-36 h-56">
                          <a href="#">
                            <div class="w-36 h-44 border rounded-2xl text-center bg-white shadow-2xl">
                              <div class="w-24 h-24 -mt-12 bg-yellow-200 rounded-full mx-auto"></div>
                              <h4 class="text-xl font-bold">Veggie<br />tomato<br />mix</h4>
                              <h6 class="font-bold text-yellow-900">IDR. 34.000</h6>
                            </div>
                          </a>
                        </div>
                        <div class="flex items-end w-36 h-56">
                          <a href="#">
                            <div class="w-36 h-44 border rounded-2xl text-center bg-white shadow-2xl">
                              <div class="w-24 h-24 -mt-12 bg-yellow-200 rounded-full mx-auto"></div>
                              <h4 class="text-xl font-bold">Veggie<br />tomato<br />mix</h4>
                              <h6 class="font-bold text-yellow-900">IDR. 34.000</h6>
                            </div>
                          </a>
                        </div>
                        <div class="flex items-end w-36 h-56">
                          <a href="#">
                            <div class="w-36 h-44 border rounded-2xl text-center bg-white shadow-2xl">
                              <div class="w-24 h-24 -mt-12 bg-yellow-200 rounded-full mx-auto"></div>
                              <h4 class="text-xl font-bold">Veggie<br />tomato<br />mix</h4>
                              <h6 class="font-bold text-yellow-900">IDR. 34.000</h6>
                            </div>
                          </a>
                        </div>
                        <div class="flex items-end w-36 h-56">
                          <a href="#">
                            <div class="w-36 h-44 border rounded-2xl text-center bg-white shadow-2xl">
                              <div class="w-24 h-24 -mt-12 bg-yellow-200 rounded-full mx-auto"></div>
                              <h4 class="text-xl font-bold">Veggie<br />tomato<br />mix</h4>
                              <h6 class="font-bold text-yellow-900">IDR. 34.000</h6>
                            </div>
                          </a>
                        </div>
                        <div class="flex items-end w-36 h-56">
                          <a href="#">
                            <div class="w-36 h-44 border rounded-2xl text-center bg-white shadow-2xl">
                              <div class="w-24 h-24 -mt-12 bg-yellow-200 rounded-full mx-auto"></div>
                              <h4 class="text-xl font-bold">Veggie<br />tomato<br />mix</h4>
                              <h6 class="font-bold text-yellow-900">IDR. 34.000</h6>
                            </div>
                          </a>
                        </div>
                        <div class="flex items-end w-36 h-56">
                          <a href="#">
                            <div class="w-36 h-44 border rounded-2xl text-center bg-white shadow-2xl">
                              <div class="w-24 h-24 -mt-12 bg-yellow-200 rounded-full mx-auto"></div>
                              <h4 class="text-xl font-bold">Veggie<br />tomato<br />mix</h4>
                              <h6 class="font-bold text-yellow-900">IDR. 34.000</h6>
                            </div>
                          </a>
                        </div>
                        <div class="flex items-end w-36 h-56">
                          <a href="#">
                            <div class="w-36 h-44 border rounded-2xl text-center bg-white shadow-2xl">
                              <div class="w-24 h-24 -mt-12 bg-yellow-200 rounded-full mx-auto"></div>
                              <h4 class="text-xl font-bold">Veggie<br />tomato<br />mix</h4>
                              <h6 class="font-bold text-yellow-900">IDR. 34.000</h6>
                            </div>
                          </a>
                        </div>
                        <div class="flex items-end w-36 h-56">
                          <a href="#">
                            <div class="w-36 h-44 border rounded-2xl text-center bg-white shadow-2xl">
                              <div class="w-24 h-24 -mt-12 bg-yellow-200 rounded-full mx-auto"></div>
                              <h4 class="text-xl font-bold">Veggie<br />tomato<br />mix</h4>
                              <h6 class="font-bold text-yellow-900">IDR. 34.000</h6>
                            </div>
                          </a>
                        </div>
                        <div class="flex items-end w-36 h-56">
                          <a href="#">
                            <div class="w-36 h-44 border rounded-2xl text-center bg-white shadow-2xl">
                              <div class="w-24 h-24 -mt-12 bg-yellow-200 rounded-full mx-auto"></div>
                              <h4 class="text-xl font-bold">Veggie<br />tomato<br />mix</h4>
                              <h6 class="font-bold text-yellow-900">IDR. 34.000</h6>
                            </div>
                          </a>
                        </div>
                        <div class="flex items-end w-36 h-56">
                          <a href="#">
                            <div class="w-36 h-44 border rounded-2xl text-center bg-white shadow-2xl">
                              <div class="w-24 h-24 -mt-12 bg-yellow-200 rounded-full mx-auto"></div>
                              <h4 class="text-xl font-bold">Veggie<br />tomato<br />mix</h4>
                              <h6 class="font-bold text-yellow-900">IDR. 34.000</h6>
                            </div>
                          </a>
                        </div>
                        <div class="flex items-end w-36 h-56">
                          <a href="#">
                            <div class="w-36 h-44 border rounded-2xl text-center bg-white shadow-2xl">
                              <div class="w-24 h-24 -mt-12 bg-yellow-200 rounded-full mx-auto"></div>
                              <h4 class="text-xl font-bold">Veggie<br />tomato<br />mix</h4>
                              <h6 class="font-bold text-yellow-900">IDR. 34.000</h6>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}

export default Product