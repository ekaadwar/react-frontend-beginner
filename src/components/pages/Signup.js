import React from "react";

class Signup extends React.Component {
  render() {
    return (
      <section class="auth">
        <div class="container h-full mx-auto">
          <div class="flex justify-end">
            <div class="w-1/2 bg-white">
              <div class="p-16 space-y-7">
                <div class="flex justify-between mb-20">
                  <div class="flex items-center">
                    <a href="index.html">
                      <img
                        class="inline"
                        src="img/logo/coffee.png"
                        alt="Coffe Shop"
                      />
                    </a>
                    <a class="text-l font-bold ml-3" href="index.html">
                      Coffee Shop
                    </a>
                  </div>
                  <a href="login.html">
                    <button class="bg-yellow-500 hover:bg-yellow-300 px-5 py-2 rounded-full font-bold">
                      Login
                    </button>
                  </a>
                </div>
                <h3 class="text-yellow-800 text-2xl font-bold text-center">
                  Sign Up
                </h3>
                <form class="space-y-7">
                  <div>
                    <h4 class="bold">Email Address :</h4>
                    <input
                      class="px-5 py-3 bg-white border-2 border-gray-300 rounded-xl w-full"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <h4 class="bold">Password:</h4>
                    <input
                      class="px-5 py-3 bg-white border-2 border-gray-300 rounded-xl w-full"
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div>
                    <h4 class="bold">Phone Number:</h4>
                    <input
                      class="px-5 py-3 bg-white border-2 border-gray-300 rounded-xl w-full"
                      type="number"
                      name="phone"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <button
                      class="bg-yellow-500 hover:bg-yellow-300 px-5 py-2 rounded-xl font-bold w-full"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div>
                    <button class="bg-white hover:bg-gray-300 border-2 border-gray-300 px-5 py-2 rounded-xl font-bold w-full">
                      Sign Up with google
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Signup;
