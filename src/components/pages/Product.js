import React from "react";
import axios from "axios";
import qs from "querystring";

import ItemImage from "../components/PictureCircle";

class Product extends React.Component {
  state = {
    items: [],
    searchInput: "",
    searchEnd: "",
  };

  onSearch = (event) => {
    if (event.keyCode === 13) {
      this.props.history.push(`/product?search=${this.state.searchInput}`);
    }
  };

  parseQuery = (str) => {
    return qs.parse(str.slice("1"));
  };

  componentDidMount() {
    const { search } = this.parseQuery(this.props.location.search);
    this.setState({ searchInput: search });
    this.getData();
  }

  getData = async (search = "") => {
    const { data } = await axios.get(
      `http://localhost:8080/items?search=${search}`
    );
    this.setState({ items: data.results });
  };

  doSearch = () => {
    const { search } = this.parseQuery(this.props.location.search);
    if (this.state.searchEnd !== search) {
      this.setState({ searchEnd: search }, () => {
        this.getData(this.state.searchEnd);
      });
    }
  };

  componentDidUpdate() {
    this.doSearch();
  }

  render() {
    return (
      <section className="product pt-20">
        <div className="border-t border-gray-300">
          <div className="container mx-auto">
            <div className="content flex flex-row min-h-screen divide-x divide-gray-300 divide-solid">
              <div className="side flex flex-col justify-between py-10">
                <div className="space-y-5">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-yellow-900">
                      Promo for you
                    </h3>
                  </div>

                  <div className="text-center">
                    <p>Coupons will be updated every weeks.</p>
                    <p>check them out!</p>
                  </div>

                  <div className="flex items-center pl-10">
                    <div className="card flex flex-col bg-yellow-300 w-72 rounded-3xl">
                      <div className="main flex flex-col justify-evenly items-center border-dashed border-b border-black text-center">
                        <ItemImage category={4} diametre={32} />

                        <div>
                          <h3 className="text-2xl font-bold">Beef Spaghetti</h3>
                          <h3 className="text-2xl font-bold">20% OFF</h3>
                        </div>

                        <p>
                          Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
                        </p>
                      </div>
                      <div className="side flex flex-col justify-evenly text-center">
                        <p>COUPON CODE</p>

                        <h3 className="text-3xl font-bold">FSDT56AS</h3>

                        <p>Valid until October 10th 2020</p>
                      </div>
                    </div>

                    <div className="card-acc-1 w-7 rounded-r-full bg-black"></div>

                    <div className="h-80 w-7 rounded-r-full bg-yellow-900"></div>
                  </div>

                  <button className="w-72 py-4 ml-10 bg-yellow-900 rounded-2xl text-white font-bold">
                    Apply Coupon
                  </button>
                </div>

                <div>
                  <h5 className="font-bold">Term and Condition</h5>
                  <ol className="list-decimal">
                    <li>You can apply 1 coupon per day</li>
                    <li>It only for dine in</li>
                    <li>Buy 1 get 1 only for new user</li>
                    <li>Should make member card to apply coupon</li>
                  </ol>
                </div>
              </div>

              <div className="main h-full">
                <div className="flex flex-col w-full h-full p-10">
                  <div className="h-10">
                    <ul className="flex justify-evenly">
                      <li className="inline-block">Favorite Product</li>
                      <li className="inline-block">Coffee</li>
                      <li className="inline-block">Non Coffee</li>
                      <li className="inline-block">Foods</li>
                      <li className="inline-block">Add-on</li>
                    </ul>
                  </div>

                  <div className="flex flex-row">
                    <input
                      value={this.state.searchInput}
                      className="border border-gray-500 rounded-l-lg w-full h-8 mb-5 px-2 h-10"
                      type="text"
                      onChange={(event) =>
                        this.setState({ searchInput: event.target.value })
                      }
                      onKeyDown={this.onSearch}
                    />
                    <button className="h-10 w-10 border rounded-r-lg border-gray-500 hover:bg-gray-300">
                      +
                    </button>
                  </div>

                  <div className="item grid grid-cols-4 gap-y-20 gap-x-4 pt-16">
                    {this.state.items.map((items, idx) => {
                      return (
                        <div
                          key={idx}
                          className="h-44 w-36 bg-white border rounded-2xl text-center shadow-2xl relative"
                        >
                          <div className="absolute -top-12 my-auto w-full">
                            <ItemImage category={items.category_id} />
                          </div>

                          <div className="flex flex-col justify-between px-4 h-full pt-12 pb-4">
                            <h4 className="flex-1 flex flex-col justify-center text-lg font-bold capitalize">
                              {items.name}
                            </h4>

                            <h6 className="text-sm font-bold text-yellow-900">
                              IDR. {items.price}
                            </h6>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Product;
