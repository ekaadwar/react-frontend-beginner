import React from "react";
import axios from "axios";
import qs from "querystring";
import ButtonCircle from "../components/ButtonCircle";
import ItemImage from "../components/PictureCircle";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  RiDeleteBin6Line as Delete,
  RiSearchLine as Search,
} from "react-icons/ri";
import {
  IoIosArrowBack as Back,
  IoIosArrowForward as Next,
} from "react-icons/io";
import { getItems } from "../../redux/actions/items";
import { getProducts } from "../../redux/actions/products";
import { listMenu } from "../../dummyData/product";

const { REACT_APP_BACKEND_URL: URL } = process.env;

class ProductClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchInput: "",
      searchEnd: "",
      id_category: 1,
      search: "",
      sort: "",
      sortType: "",
      currentPage: 1,
      nextPage: `${URL}/items?page=2`,
      prevPage: null,
      pageInfo: {},
      params: {},
    };
  }

  componentDidMount() {
    const { token } = this.props.auth;
    let params = {};
    if (this.props.location.search) {
      params = this.parseQuery(this.props.location.search);
    }
    this.props.getProducts(token, params).then(() => {
      this.setState({
        items: this.props.products.data,
        pageInfo: this.props.products.pageInfo,
        params,
      });
    });
  }

  componentDidUpdate(prevProps) {
    const { token } = this.props.auth;
    const { params } = this.state;
    console.log(prevProps.location.search);
    if (prevProps.location.search !== this.props.location.search) {
      this.props.getProducts(token, params).then(() => {
        this.setState({
          items: this.props.products.data,
          pageInfo: this.props.products.pageInfo,
          params,
        });
      });
    }
  }

  // componentDidUpdate() {
  //   console.log(this.state.params);
  // }

  parseQuery = (str) => {
    return qs.parse(str.slice("1"));
  };

  submit = (event) => {
    event.preventDefault();
    const { pageInfo, params } = this.state;
    const initialUrl = `/product`;

    const { currentPage: page } = pageInfo;
    let paramKeys = Object.keys(params);
    let paramValues = Object.values(params);

    const length = paramKeys.length;

    let url = initialUrl + `?page=${page}`;

    if (length > 0) {
      for (let i = 0; i < length; i++) {
        if (paramKeys[i] === "sort") {
          const sortArray = paramValues[i].split("-");
          paramKeys[i] = `sort[${sortArray[0]}]`;
          paramValues[i] = sortArray[1];
        }
        url += `&${paramKeys[i]}=${paramValues[i]}`;
      }
    }

    this.props.history.push(url);
  };

  deleteItem = async (id) => {
    const result = window.confirm("Want to delete?");

    if (result) {
      await axios.delete(`http://localhost:8080/items/${id}`);
    }

    this.getData();
  };

  prevButton = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  // loadMore = () => {
  //   const { nextPage } = this.props.items.pageInfo;
  //   this.props.getItems(nextPage);
  // };

  render() {
    // const { data } = this.props.products;
    const { items: data } = this.state;
    console.log(this.state);

    return (
      <section className="product pt-20">
        <div className="border-t border-gray-300">
          <div className="container mx-auto">
            <div className="content grid grid-cols-3 min-h-screen">
              <div className="hidden lg:flex lg:flex-col lg:justify-between py-10 border-r border-gray-300">
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

                <div className="px-10">
                  <h5 className="font-bold">Term and Condition</h5>
                  <ol className="list-decimal">
                    <li>You can apply 1 coupon per day</li>
                    <li>It only for dine in</li>
                    <li>Buy 1 get 1 only for new user</li>
                    <li>Should make member card to apply coupon</li>
                  </ol>
                </div>
              </div>

              <div className="h-full col-span-3 lg:col-span-2">
                <div className="flex flex-col w-full h-full p-10">
                  <div className="h-10">
                    <ul className="flex justify-evenly">
                      {listMenu.map((menu, idx) => (
                        <li
                          value={menu.idCategory}
                          className="inline-block cursor-pointer"
                          key={idx}
                          // onClick={(event) => console.log(event.target.value)}
                          onClick={this.getCategory}
                        >
                          {menu.category}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <form
                    onSubmit={this.submit}
                    className="flex flex-row border shadow-lg h-12 rounded-lg shadow-md mb-10"
                  >
                    <input
                      // onKeyDown={(event) => this.redirect(event)}
                      value={this.state.params.search}
                      onChange={(event) =>
                        this.setState((prevState) => ({
                          params: {
                            ...prevState.parama,
                            search: event.target.value,
                          },
                        }))
                      }
                      className="focus:outline-none w-full mb-5 px-2 h-10 rounded-lg"
                      id="search"
                      type="text"
                      placeholder="search"
                    />

                    <select
                      className="focus:outline-none mb-5 px-2 h-10 bg-white mr-5"
                      value={this.state.params.sort}
                      onChange={(event) => {
                        this.setState((prevState) => ({
                          params: {
                            ...prevState.params,
                            sort: event.target.value,
                          },
                        }));
                      }}
                    >
                      <option value="">Sort</option>
                      <option value="name-ASC">Product (ASC)</option>
                      <option value="name-DESC">Product (DESC)</option>
                      <option value="price-ASC">Price (ASC)</option>
                      <option value="price-DESC">Price (DESC)</option>
                    </select>

                    <button
                      type="submit"
                      className="focus:outline-none flex flex-row justify-center items-center h-10 w-10 bg-gray-300 rounded-r-lg"
                    >
                      <Search size={15} />
                    </button>
                  </form>

                  <div className="item grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-20 gap-x-4 justify-items-center pt-16">
                    {data.map((items) => {
                      return (
                        <Link
                          to={`/product/${items.id}`}
                          key={items.id.toString()}
                        >
                          <div className="h-44 w-36 bg-white border rounded-2xl text-center shadow-2xl relative">
                            <div className="absolute -top-12 my-auto w-full">
                              <ItemImage category={items.category_id} />
                            </div>

                            <div className="flex flex-col justify-between px-4 h-full pt-12 pb-4">
                              <h4 className="flex-1 flex flex-col justify-center text-lg font-bold capitalize">
                                {items.name}
                              </h4>

                              <h6 className="text-sm font-bold text-yellow-900">
                                IDR. {items.price.toLocaleString("en")}
                              </h6>
                            </div>

                            <div
                              onClick={() => this.deleteItem(items.id)}
                              className="absolute -bottom-3 -right-3"
                              value="oke"
                            >
                              <ButtonCircle
                                secondary
                                size={7}
                                content={() => (
                                  <div className="flex justify-center items-center">
                                    <Delete size={15} color="white" />
                                  </div>
                                )}
                              />
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="flex flex-row justify-center items-center space-x-5 w-full">
                    <p className="text-yellow-900 mt-14">Your Page</p>
                  </div>

                  <div className="flex flex-row justify-center items-center space-x-5 w-full mt-2">
                    <ButtonCircle
                      bg={
                        this.state.prevPage !== null
                          ? "bg-yellow-900"
                          : "bg-gray-300"
                      }
                      bgHover={this.state.nextPage !== null && "bg-yellow-600"}
                      content={() => <Back color="#78350f" />}
                      rounded="full"
                      size={8}
                      value={this.state.prevPage}
                      onClick={(event) => {
                        console.log(event.currentTarget.value);
                      }}
                    />

                    <p className="text-yellow-900 font-bold">
                      {this.state.currentPage}
                    </p>

                    <ButtonCircle
                      bg={
                        this.state.nextPage !== null
                          ? "bg-yellow-400"
                          : "bg-gray-300"
                      }
                      bgHover={this.state.nextPage !== null && "bg-yellow-600"}
                      content={() => <Next color="#78350f" />}
                      rounded="full"
                      size={8}
                      value={this.state.nextPage}
                      onClick={(event) => {
                        console.log(event.currentTarget.value);
                      }}
                    />
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  items: state.items,
  products: state.products,
});

const mapDispatchToProps = { getItems, getProducts };

export default connect(mapStateToProps, mapDispatchToProps)(ProductClass);
