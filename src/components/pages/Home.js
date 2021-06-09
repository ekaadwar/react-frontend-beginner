import React from "react";

class Home extends React.Component {
  render() {
    return (
      <>
        {/* <!-- section jumbotron --> */}
        <section class="jumbotron">
          <div class="container mx-auto">
            <form class="pt-5 text-right">
              <button class="bg-white leading-10 px-5 rounded-l-full">
                <i class="fa fa-search"></i>
              </button>
              <input
                class="leading-10 pl-5 rounded-r-full"
                type="text"
                name="search"
                placeholder="Search"
              />
            </form>
            <div class="w-1/2 text-white">
              <h1>Start Your Day with</h1>
              <h1>Coffee and Good Meals</h1>
              <p class="text-xl mt-10">
                We provide high quality beans, good taste, and healthy meals
                made by love just for you. Start your day with us for a bigger
                smile!
              </p>
              <button class="bg-yellow-500 hover:bg-yellow-300 text-xl mt-10 px-10 py-2 text-yellow-900 font-bold">
                Get Started
              </button>
            </div>
          </div>
        </section>
        {/* <!-- akhir section jumbotron --> */}

        {/* <!-- section advantages --> */}
        <section id="advantages">
          <div class="container mx-auto grid h-full w-full">
            <div class="report bg-white grid grid-cols-3 rounded-xl mx-auto">
              <div class="grid grid-cols-2 self-center">
                <div class="box-advent rounded-full">
                  <i class="fas fa-user"></i>
                </div>
                <div>
                  <h1>90+</h1>
                  <p>Staff</p>
                </div>
              </div>
              <div class="grid grid-cols-2 self-center">
                <div class="box-advent rounded-full">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h1>30+</h1>
                  <p>Store</p>
                </div>
              </div>
              <div class="grid grid-cols-2 self-center">
                <div class="box-advent rounded-full">
                  <i class="fas fa-heart"></i>
                </div>
                <div>
                  <h1>800+</h1>
                  <p>Customers</p>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2">
              <div class="h-full">
                <img
                  class="w-full self-center"
                  src="img/general/advantages.jpg"
                  alt="Team Work"
                />
              </div>
              <div class="px-10">
                <div class="self-center">
                  <h1 class="text-4xl font-bold mb-5">
                    We Provide Good Coffe
                    <br />
                    and Healthy Meals
                  </h1>
                  <p class="mb-5">
                    You can explore the menu that we provide with fun and have
                    their own taste and make your day better.
                  </p>
                  <ul>
                    <li>
                      <svg
                        class="inline"
                        class="inline"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.1216 0.549316C4.60758 0.549316 0.121582 5.03532 0.121582 10.5493C0.121582 16.0633 4.60758 20.5493 10.1216 20.5493C15.6356 20.5493 20.1216 16.0633 20.1216 10.5493C20.1216 5.03532 15.6356 0.549316 10.1216 0.549316ZM8.12258 14.9623L5.11703 11.9632C4.72628 11.5733 4.72549 10.9405 5.11527 10.5496C5.50529 10.1585 6.13859 10.1578 6.52951 10.548L8.12058 12.1363L12.7076 7.54932C13.098 7.15885 13.7311 7.15885 14.1216 7.54932C14.512 7.93978 14.512 8.57285 14.1216 8.96332L8.12258 14.9623Z"
                          fill="#2FAB73"
                        />
                      </svg>
                      High quality beans
                    </li>
                    <li>
                      <svg
                        class="inline"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.1216 0.549316C4.60758 0.549316 0.121582 5.03532 0.121582 10.5493C0.121582 16.0633 4.60758 20.5493 10.1216 20.5493C15.6356 20.5493 20.1216 16.0633 20.1216 10.5493C20.1216 5.03532 15.6356 0.549316 10.1216 0.549316ZM8.12258 14.9623L5.11703 11.9632C4.72628 11.5733 4.72549 10.9405 5.11527 10.5496C5.50529 10.1585 6.13859 10.1578 6.52951 10.548L8.12058 12.1363L12.7076 7.54932C13.098 7.15885 13.7311 7.15885 14.1216 7.54932C14.512 7.93978 14.512 8.57285 14.1216 8.96332L8.12258 14.9623Z"
                          fill="#2FAB73"
                        />
                      </svg>
                      Healthy meals, you can request the ingredients
                    </li>
                    <li>
                      <svg
                        class="inline"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.1216 0.549316C4.60758 0.549316 0.121582 5.03532 0.121582 10.5493C0.121582 16.0633 4.60758 20.5493 10.1216 20.5493C15.6356 20.5493 20.1216 16.0633 20.1216 10.5493C20.1216 5.03532 15.6356 0.549316 10.1216 0.549316ZM8.12258 14.9623L5.11703 11.9632C4.72628 11.5733 4.72549 10.9405 5.11527 10.5496C5.50529 10.1585 6.13859 10.1578 6.52951 10.548L8.12058 12.1363L12.7076 7.54932C13.098 7.15885 13.7311 7.15885 14.1216 7.54932C14.512 7.93978 14.512 8.57285 14.1216 8.96332L8.12258 14.9623Z"
                          fill="#2FAB73"
                        />
                      </svg>
                      Chat with our staff to get better experience for ordering
                    </li>
                    <li>
                      <svg
                        class="inline"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.1216 0.549316C4.60758 0.549316 0.121582 5.03532 0.121582 10.5493C0.121582 16.0633 4.60758 20.5493 10.1216 20.5493C15.6356 20.5493 20.1216 16.0633 20.1216 10.5493C20.1216 5.03532 15.6356 0.549316 10.1216 0.549316ZM8.12258 14.9623L5.11703 11.9632C4.72628 11.5733 4.72549 10.9405 5.11527 10.5496C5.50529 10.1585 6.13859 10.1578 6.52951 10.548L8.12058 12.1363L12.7076 7.54932C13.098 7.15885 13.7311 7.15885 14.1216 7.54932C14.512 7.93978 14.512 8.57285 14.1216 8.96332L8.12258 14.9623Z"
                          fill="#2FAB73"
                        />
                      </svg>
                      Free member card a minimum purchase of IDR 200.000
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- akhir section advantages --> */}

        {/* <!-- section favorite --> */}
        <section id="fevorite" class="bg-gray-100 pb-10">
          <div class="container mx-auto">
            <div class="text-center">
              <h3 class="font-bold text-3xl pt-20 mb-1.5">
                Here is People's Favorite
              </h3>
              <p class="mb-20">
                Let's choose and have a bit taste of people's favoite. It might
                be your tool
              </p>
            </div>
            <div class="flex flex-row">
              <div class="flex-1 flex justify-center">
                <div class="flex flex-col favo-sect border border-gray-300 rounded-l hover:border-yellow-500 bg-white w-3/4">
                  <div class="picture flex items-center">
                    <div class="favo-img bg-blue-200 rounded-full"></div>
                  </div>
                  <div class="list">
                    <div class="leading-10">
                      <h1 class="text-xl font-bold text-center mb-2">
                        Hazelnut Latte
                      </h1>
                      <ul>
                        <li>
                          <svg
                            class="inline"
                            class="inline"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.1216 0.549316C4.60758 0.549316 0.121582 5.03532 0.121582 10.5493C0.121582 16.0633 4.60758 20.5493 10.1216 20.5493C15.6356 20.5493 20.1216 16.0633 20.1216 10.5493C20.1216 5.03532 15.6356 0.549316 10.1216 0.549316ZM8.12258 14.9623L5.11703 11.9632C4.72628 11.5733 4.72549 10.9405 5.11527 10.5496C5.50529 10.1585 6.13859 10.1578 6.52951 10.548L8.12058 12.1363L12.7076 7.54932C13.098 7.15885 13.7311 7.15885 14.1216 7.54932C14.512 7.93978 14.512 8.57285 14.1216 8.96332L8.12258 14.9623Z"
                              fill="#2FAB73"
                            />
                          </svg>
                          Hazelnut Syrup
                        </li>
                        <li>
                          <svg
                            class="inline"
                            class="inline"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.1216 0.549316C4.60758 0.549316 0.121582 5.03532 0.121582 10.5493C0.121582 16.0633 4.60758 20.5493 10.1216 20.5493C15.6356 20.5493 20.1216 16.0633 20.1216 10.5493C20.1216 5.03532 15.6356 0.549316 10.1216 0.549316ZM8.12258 14.9623L5.11703 11.9632C4.72628 11.5733 4.72549 10.9405 5.11527 10.5496C5.50529 10.1585 6.13859 10.1578 6.52951 10.548L8.12058 12.1363L12.7076 7.54932C13.098 7.15885 13.7311 7.15885 14.1216 7.54932C14.512 7.93978 14.512 8.57285 14.1216 8.96332L8.12258 14.9623Z"
                              fill="#2FAB73"
                            />
                          </svg>
                          Vanila Whipped Cream
                        </li>
                        <li>
                          <svg
                            class="inline"
                            class="inline"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.1216 0.549316C4.60758 0.549316 0.121582 5.03532 0.121582 10.5493C0.121582 16.0633 4.60758 20.5493 10.1216 20.5493C15.6356 20.5493 20.1216 16.0633 20.1216 10.5493C20.1216 5.03532 15.6356 0.549316 10.1216 0.549316ZM8.12258 14.9623L5.11703 11.9632C4.72628 11.5733 4.72549 10.9405 5.11527 10.5496C5.50529 10.1585 6.13859 10.1578 6.52951 10.548L8.12058 12.1363L12.7076 7.54932C13.098 7.15885 13.7311 7.15885 14.1216 7.54932C14.512 7.93978 14.512 8.57285 14.1216 8.96332L8.12258 14.9623Z"
                              fill="#2FAB73"
                            />
                          </svg>
                          Ice/Hot
                        </li>
                        <li>
                          <svg
                            class="inline"
                            class="inline"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.1216 0.549316C4.60758 0.549316 0.121582 5.03532 0.121582 10.5493C0.121582 16.0633 4.60758 20.5493 10.1216 20.5493C15.6356 20.5493 20.1216 16.0633 20.1216 10.5493C20.1216 5.03532 15.6356 0.549316 10.1216 0.549316ZM8.12258 14.9623L5.11703 11.9632C4.72628 11.5733 4.72549 10.9405 5.11527 10.5496C5.50529 10.1585 6.13859 10.1578 6.52951 10.548L8.12058 12.1363L12.7076 7.54932C13.098 7.15885 13.7311 7.15885 14.1216 7.54932C14.512 7.93978 14.512 8.57285 14.1216 8.96332L8.12258 14.9623Z"
                              fill="#2FAB73"
                            />
                          </svg>
                          Sliced Banana on Top
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="cost">
                    <div class="text-center">
                      <h3 class="text-2xl font-bold mb-3">IDR. 25.000</h3>
                      <button class="text-l font-bold border-2 border-yellow-500 px-10 py-2 rounded-full focus:outline-none hover:border-transparent hover:bg-yellow-300">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex-1 flex justify-center">
                <div class="flex flex-col favo-sect border border-gray-300 rounded-l hover:border-yellow-500 bg-white w-3/4">
                  <div class="picture flex items-center">
                    <div class="favo-img bg-blue-200 rounded-full"></div>
                  </div>
                  <div class="list">
                    <div class="leading-10">
                      <h1 class="text-xl font-bold text-center mb-2">
                        Pinky Promise
                      </h1>
                      <ul>
                        <li>
                          <svg
                            class="inline"
                            class="inline"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.1216 0.549316C4.60758 0.549316 0.121582 5.03532 0.121582 10.5493C0.121582 16.0633 4.60758 20.5493 10.1216 20.5493C15.6356 20.5493 20.1216 16.0633 20.1216 10.5493C20.1216 5.03532 15.6356 0.549316 10.1216 0.549316ZM8.12258 14.9623L5.11703 11.9632C4.72628 11.5733 4.72549 10.9405 5.11527 10.5496C5.50529 10.1585 6.13859 10.1578 6.52951 10.548L8.12058 12.1363L12.7076 7.54932C13.098 7.15885 13.7311 7.15885 14.1216 7.54932C14.512 7.93978 14.512 8.57285 14.1216 8.96332L8.12258 14.9623Z"
                              fill="#2FAB73"
                            />
                          </svg>
                          1 Shot of Coffe
                        </li>
                        <li>
                          <svg
                            class="inline"
                            class="inline"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.1216 0.549316C4.60758 0.549316 0.121582 5.03532 0.121582 10.5493C0.121582 16.0633 4.60758 20.5493 10.1216 20.5493C15.6356 20.5493 20.1216 16.0633 20.1216 10.5493C20.1216 5.03532 15.6356 0.549316 10.1216 0.549316ZM8.12258 14.9623L5.11703 11.9632C4.72628 11.5733 4.72549 10.9405 5.11527 10.5496C5.50529 10.1585 6.13859 10.1578 6.52951 10.548L8.12058 12.1363L12.7076 7.54932C13.098 7.15885 13.7311 7.15885 14.1216 7.54932C14.512 7.93978 14.512 8.57285 14.1216 8.96332L8.12258 14.9623Z"
                              fill="#2FAB73"
                            />
                          </svg>
                          Vanila Whipped Cream
                        </li>
                        <li>
                          <svg
                            class="inline"
                            class="inline"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.1216 0.549316C4.60758 0.549316 0.121582 5.03532 0.121582 10.5493C0.121582 16.0633 4.60758 20.5493 10.1216 20.5493C15.6356 20.5493 20.1216 16.0633 20.1216 10.5493C20.1216 5.03532 15.6356 0.549316 10.1216 0.549316ZM8.12258 14.9623L5.11703 11.9632C4.72628 11.5733 4.72549 10.9405 5.11527 10.5496C5.50529 10.1585 6.13859 10.1578 6.52951 10.548L8.12058 12.1363L12.7076 7.54932C13.098 7.15885 13.7311 7.15885 14.1216 7.54932C14.512 7.93978 14.512 8.57285 14.1216 8.96332L8.12258 14.9623Z"
                              fill="#2FAB73"
                            />
                          </svg>
                          Chocolate Biscuit
                        </li>
                        <li>
                          <svg
                            class="inline"
                            class="inline"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.1216 0.549316C4.60758 0.549316 0.121582 5.03532 0.121582 10.5493C0.121582 16.0633 4.60758 20.5493 10.1216 20.5493C15.6356 20.5493 20.1216 16.0633 20.1216 10.5493C20.1216 5.03532 15.6356 0.549316 10.1216 0.549316ZM8.12258 14.9623L5.11703 11.9632C4.72628 11.5733 4.72549 10.9405 5.11527 10.5496C5.50529 10.1585 6.13859 10.1578 6.52951 10.548L8.12058 12.1363L12.7076 7.54932C13.098 7.15885 13.7311 7.15885 14.1216 7.54932C14.512 7.93978 14.512 8.57285 14.1216 8.96332L8.12258 14.9623Z"
                              fill="#2FAB73"
                            />
                          </svg>
                          Stawberry Syrup
                        </li>
                        <li>
                          <svg
                            class="inline"
                            class="inline"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.1216 0.549316C4.60758 0.549316 0.121582 5.03532 0.121582 10.5493C0.121582 16.0633 4.60758 20.5493 10.1216 20.5493C15.6356 20.5493 20.1216 16.0633 20.1216 10.5493C20.1216 5.03532 15.6356 0.549316 10.1216 0.549316ZM8.12258 14.9623L5.11703 11.9632C4.72628 11.5733 4.72549 10.9405 5.11527 10.5496C5.50529 10.1585 6.13859 10.1578 6.52951 10.548L8.12058 12.1363L12.7076 7.54932C13.098 7.15885 13.7311 7.15885 14.1216 7.54932C14.512 7.93978 14.512 8.57285 14.1216 8.96332L8.12258 14.9623Z"
                              fill="#2FAB73"
                            />
                          </svg>
                          Sliced Stawberry on Top
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="cost">
                    <div class="text-center">
                      <h3 class="text-2xl font-bold mb-3">IDR. 30.000</h3>
                      <button class="text-l font-bold border-2 border-yellow-500 px-10 py-2 rounded-full focus:outline-none hover:border-transparent hover:bg-yellow-300">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex-1 flex justify-center">
                <div class="flex flex-col favo-sect border border-gray-300 rounded-l hover:border-yellow-500 bg-white w-3/4">
                  <div class="picture flex items-center">
                    <div class="favo-img bg-blue-200 rounded-full"></div>
                  </div>
                  <div class="list">
                    <div class="leading-10">
                      <h1 class="text-xl font-bold text-center mb-2">
                        Chicken Wings
                      </h1>
                      <ul>
                        <li>
                          <svg
                            class="inline"
                            class="inline"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.1216 0.549316C4.60758 0.549316 0.121582 5.03532 0.121582 10.5493C0.121582 16.0633 4.60758 20.5493 10.1216 20.5493C15.6356 20.5493 20.1216 16.0633 20.1216 10.5493C20.1216 5.03532 15.6356 0.549316 10.1216 0.549316ZM8.12258 14.9623L5.11703 11.9632C4.72628 11.5733 4.72549 10.9405 5.11527 10.5496C5.50529 10.1585 6.13859 10.1578 6.52951 10.548L8.12058 12.1363L12.7076 7.54932C13.098 7.15885 13.7311 7.15885 14.1216 7.54932C14.512 7.93978 14.512 8.57285 14.1216 8.96332L8.12258 14.9623Z"
                              fill="#2FAB73"
                            />
                          </svg>
                          Wings
                        </li>
                        <li>
                          <svg
                            class="inline"
                            class="inline"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.1216 0.549316C4.60758 0.549316 0.121582 5.03532 0.121582 10.5493C0.121582 16.0633 4.60758 20.5493 10.1216 20.5493C15.6356 20.5493 20.1216 16.0633 20.1216 10.5493C20.1216 5.03532 15.6356 0.549316 10.1216 0.549316ZM8.12258 14.9623L5.11703 11.9632C4.72628 11.5733 4.72549 10.9405 5.11527 10.5496C5.50529 10.1585 6.13859 10.1578 6.52951 10.548L8.12058 12.1363L12.7076 7.54932C13.098 7.15885 13.7311 7.15885 14.1216 7.54932C14.512 7.93978 14.512 8.57285 14.1216 8.96332L8.12258 14.9623Z"
                              fill="#2FAB73"
                            />
                          </svg>
                          Drum Sticks
                        </li>
                        <li>
                          <svg
                            class="inline"
                            class="inline"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.1216 0.549316C4.60758 0.549316 0.121582 5.03532 0.121582 10.5493C0.121582 16.0633 4.60758 20.5493 10.1216 20.5493C15.6356 20.5493 20.1216 16.0633 20.1216 10.5493C20.1216 5.03532 15.6356 0.549316 10.1216 0.549316ZM8.12258 14.9623L5.11703 11.9632C4.72628 11.5733 4.72549 10.9405 5.11527 10.5496C5.50529 10.1585 6.13859 10.1578 6.52951 10.548L8.12058 12.1363L12.7076 7.54932C13.098 7.15885 13.7311 7.15885 14.1216 7.54932C14.512 7.93978 14.512 8.57285 14.1216 8.96332L8.12258 14.9623Z"
                              fill="#2FAB73"
                            />
                          </svg>
                          Mayonaise and Lemon
                        </li>
                        <li>
                          <svg
                            class="inline"
                            class="inline"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.1216 0.549316C4.60758 0.549316 0.121582 5.03532 0.121582 10.5493C0.121582 16.0633 4.60758 20.5493 10.1216 20.5493C15.6356 20.5493 20.1216 16.0633 20.1216 10.5493C20.1216 5.03532 15.6356 0.549316 10.1216 0.549316ZM8.12258 14.9623L5.11703 11.9632C4.72628 11.5733 4.72549 10.9405 5.11527 10.5496C5.50529 10.1585 6.13859 10.1578 6.52951 10.548L8.12058 12.1363L12.7076 7.54932C13.098 7.15885 13.7311 7.15885 14.1216 7.54932C14.512 7.93978 14.512 8.57285 14.1216 8.96332L8.12258 14.9623Z"
                              fill="#2FAB73"
                            />
                          </svg>
                          Hot Fried
                        </li>
                        <li>
                          <svg
                            class="inline"
                            class="inline"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.1216 0.549316C4.60758 0.549316 0.121582 5.03532 0.121582 10.5493C0.121582 16.0633 4.60758 20.5493 10.1216 20.5493C15.6356 20.5493 20.1216 16.0633 20.1216 10.5493C20.1216 5.03532 15.6356 0.549316 10.1216 0.549316ZM8.12258 14.9623L5.11703 11.9632C4.72628 11.5733 4.72549 10.9405 5.11527 10.5496C5.50529 10.1585 6.13859 10.1578 6.52951 10.548L8.12058 12.1363L12.7076 7.54932C13.098 7.15885 13.7311 7.15885 14.1216 7.54932C14.512 7.93978 14.512 8.57285 14.1216 8.96332L8.12258 14.9623Z"
                              fill="#2FAB73"
                            />
                          </svg>
                          Secret Recipe
                        </li>
                        <li>
                          <svg
                            class="inline"
                            class="inline"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.1216 0.549316C4.60758 0.549316 0.121582 5.03532 0.121582 10.5493C0.121582 16.0633 4.60758 20.5493 10.1216 20.5493C15.6356 20.5493 20.1216 16.0633 20.1216 10.5493C20.1216 5.03532 15.6356 0.549316 10.1216 0.549316ZM8.12258 14.9623L5.11703 11.9632C4.72628 11.5733 4.72549 10.9405 5.11527 10.5496C5.50529 10.1585 6.13859 10.1578 6.52951 10.548L8.12058 12.1363L12.7076 7.54932C13.098 7.15885 13.7311 7.15885 14.1216 7.54932C14.512 7.93978 14.512 8.57285 14.1216 8.96332L8.12258 14.9623Z"
                              fill="#2FAB73"
                            />
                          </svg>
                          Buy 1 Get 1 only Dine in
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="cost">
                    <div class="text-center">
                      <h3 class="text-2xl font-bold mb-3">IDR. 40.000</h3>
                      <button class="text-l font-bold border-2 border-yellow-500 px-10 py-2 rounded-full focus:outline-none hover:border-transparent hover:bg-yellow-300">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- akhir section favorite --> */}

        {/* <!-- section spot --> */}
        <section id="spot" class="bg-gray-100 pb-10">
          <div class="container mx-auto text-center">
            <h3 class="font-bold text-3xl pt-20 mb-1.5 w-1/3 mx-auto mb-5">
              Visit Our Store in the Spot on the Map Below
            </h3>
            <p class="w-2/5 mx-auto mb-40">
              See our store in every city on the spot and spen your good day
              there. See you soon!
            </p>
            <img
              class="mx-auto"
              src="../../../img/general/jumbotron.png"
              alt="Spot Area Coffee Shop"
            />
          </div>
        </section>
        {/* <!-- akhir section spot --> */}

        {/* <!-- section partner --> */}
        <section id="partner" class="bg-gray-100 pb-10">
          <div class="container mx-auto text-center">
            <h3 class="font-bold text-3xl pt-20 w-1/3 mx-auto mb-16">
              Our Partner
            </h3>
            <div class="flex justify-around">
              <img src="img/logo/Rectangle274.png" alt="netflix" />
              <img src="img/logo/Rectangle275.png" alt="reddit" />
              <img src="img/logo/Rectangle276.png" alt="amazon" />
              <img src="img/logo/Rectangle277.png" alt="discord" />
              <img src="img/logo/Rectangle278.png" alt="Sportify" />
            </div>
          </div>
        </section>
        {/* <!-- akhir section partner --> */}

        {/* <!-- section testimony --> */}
        <section id="testimony" class="testimony bg-gray-100 pb-52">
          <div class="container mx-auto space-y-7 text-center">
            <h3 class="font-bold text-3xl pt-20 w-96 mx-auto">
              Loved by Thousand of Happy Customer
            </h3>
            <p class="sub-judul mx-auto">
              These are the stories of our customer who have visited us with
              great pleasure.
            </p>
            <div class="h-72 overflow-x-auto">
              <div class="test-bar flex justify-between">
                <div class="test-card border-2 border-gray-200 hover:border-yellow-800 p-8 rounded-2xl bg-white">
                  <div class="head flex justify-between items-center">
                    <div class="flex items-center">
                      <img
                        class="h-9 w-9"
                        src="img/profile/robert.png"
                        alt="Viezh Robert"
                      />
                      <div class="pl-5">
                        <h4 class="text-l font-bold">Viezh Robert</h4>
                        <h5>Warsaw, Polad</h5>
                      </div>
                    </div>
                    <p class="justify-self-end">4.5</p>
                  </div>
                  <div class="flex items-center h-full">
                    <p>
                      “Wow... I am very happy to spend my whole day here. the
                      Wi-fi is good, and the coffee and meals tho. I like it
                      here!! Very recommended!
                    </p>
                  </div>
                </div>
                <div class="test-card border-2 border-gray-200 hover:border-yellow-800 p-8 rounded-2xl bg-white">
                  <div class="head flex justify-between items-center">
                    <div class="flex items-center">
                      <img
                        class="h-9 w-9"
                        src="img/profile/robert.png"
                        alt="Viezh Robert"
                      />
                      <div class="pl-5">
                        <h4 class="text-l font-bold">Viezh Robert</h4>
                        <h5>Warsaw, Polad</h5>
                      </div>
                    </div>
                    <p class="justify-self-end">4.5</p>
                  </div>
                  <div class="flex items-center h-full">
                    <p>
                      “Wow... I am very happy to spend my whole day here. the
                      Wi-fi is good, and the coffee and meals tho. I like it
                      here!! Very recommended!
                    </p>
                  </div>
                </div>
                <div class="test-card border-2 border-gray-200 hover:border-yellow-800 p-8 rounded-2xl bg-white">
                  <div class="head flex justify-between items-center">
                    <div class="flex items-center">
                      <img
                        class="h-9 w-9"
                        src="img/profile/robert.png"
                        alt="Viezh Robert"
                      />
                      <div class="pl-5">
                        <h4 class="text-l font-bold">Viezh Robert</h4>
                        <h5>Warsaw, Polad</h5>
                      </div>
                    </div>
                    <p class="justify-self-end">4.5</p>
                  </div>
                  <div class="flex items-center h-full">
                    <p>
                      “Wow... I am very happy to spend my whole day here. the
                      Wi-fi is good, and the coffee and meals tho. I like it
                      here!! Very recommended!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex">
                <div class="h-4 w-12 rounded-full bg-yellow-800 mr-3"></div>
                <div class="h-4 w-4 rounded-full bg-gray-300 mr-3"></div>
                <div class="h-4 w-4 rounded-full bg-gray-300 mr-3"></div>
                <div class="h-4 w-4 rounded-full bg-gray-300 mr-3"></div>
              </div>
              <div class="flex">
                <div class="arr-left flex justify-center items-center h-16 w-16 rounded-full border-4 border-yellow-800">
                  <i class="fas fa-arrow-left text-2xl text-yellow-800 ml-3"></i>
                </div>
                <div class="arr-left flex justify-center items-center h-16 w-16 rounded-full bg-yellow-800 ml-5">
                  <i class="fas fa-arrow-right text-2xl text-white ml-3"></i>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </section>
        {/* <!-- akhir section testimony --> */}
      </>
    );
  }
}

export default Home;
