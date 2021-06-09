import React from "react"

class Footer extends React.Component{
    render(){
        return(
            <>
                <footer class="bg-gray-200 py-10">
                    <div class="container mx-auto">
                        <div class="flex">
                        <div class="flex-1 space-y-7">
                            <div class="flex items-center">
                            <img src={this.props.image} alt="Coffee Shop" />
                            <h4 class="text-l font-bold ml-3">Coffee Shop</h4>
                            </div>
                            <p class="w-72 leading-8">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
                            <div class="flex space-x-3">
                            <div class="flex justify-center items-center h-8 w-8 bg-yellow-500 rounded-full"><i class="text-yellow-800 fab fa-facebook-f"></i></div>
                            <div class="flex justify-center items-center h-8 w-8 bg-yellow-500 rounded-full"><i class="text-yellow-800 fab fa-twitter"></i></div>
                            <div class="flex justify-center items-center h-8 w-8 bg-yellow-500 rounded-full"><i class="text-yellow-800 fab fa-instagram"></i></div>
                            </div>
                        </div>
                        <div class="flex-1 flex justify-end">
                            <div class="w-2/3">
                            <div class="foot-info grid grid-cols-2">
                                <div class="text-xl font-bold">Product</div>
                                <div class="text-xl font-bold">Engage</div>
                                <div>Download</div>
                                <div>Coffe Shop?</div>
                                <div>Pricing</div>
                                <div>FAQ</div>
                                <div>Location</div>
                                <div>About Us</div>
                                <div>Countries</div>
                                <div>Privacy Policy</div>
                                <div>Blog</div>
                                <div>Term of Service</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer