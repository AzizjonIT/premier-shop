import "./Products.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillPhone } from "react-icons/ai";

import { IoMdPricetags } from "react-icons/io";

const Products = () => {
  const [Products, setProducts] = useState([]);
  const [initialCars, setInitialCars] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [noCarsFound, setNoCarsFound] = useState(false);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setProducts(res.data);
        setInitialCars(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterCarsByName = (input) => {
    const filteredCars = initialCars.filter((products) =>
      products.title.toLowerCase().includes(input.toLowerCase())
    );

    if (filteredCars.length === 0) {
      setNoCarsFound(true);
      setShowMore(false);
    } else {
      setNoCarsFound(false);
      setShowMore(true);
    }

    setProducts(filteredCars);
  };

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    filterCarsByName(inputValue);
  };

  return (
    <div className="Home_container">
      <main>
        <div className="brands_inputs">
          <input
            className="brands_input"
            type="text"
            placeholder="Search"
            onChange={handleSearchInputChange}
            value={searchInput}
          />
        </div>

        <div className="brandsproducts_cart">
          {Products.slice(0.8).map((Products) => {
            return (
              <React.Fragment key={Products.id}>
                <div className="brandsproducts_shop">
                  <img
                    className="brandsproducts_images"
                    src={Products.image}
                    alt=""
                  />
                  <div className="cart_ell">
                    <h6 className="products_h3">
                      {" "}
                      {Products.title.slice(0, 20)}{" "}
                    </h6>
                    <p className="brandsproducts_p">
                      {" "}
                      {Products.description.slice(0, 65)}{" "}
                    </p>
                    <p className="brandsproducts_price">
                      {" "}
                      {Products.category}{" "}
                    </p>

                    <div className="cart_title_text">
                      <div>
                        <p className="brandsproducts_numer">
                          {" "}
                          <IoMdPricetags className="react_icons_tel" />{" "}
                          {Products.price}{" "}
                        </p>
                        <p className="brandsproducts_numer">
                          {" "}
                          <IoMdPricetags className="react_icons_tel" />{" "}
                          {Products.rating.count}{" "}
                        </p>
                        <p className="brandsproducts_numer">
                          {" "}
                          <IoMdPricetags className="react_icons_tel" />{" "}
                          {Products.rating.rate}{" "}
                        </p>
                      </div>

                      <div>
                        <Link
                          className="products_link"
                          to={`/:userId/products/${Products.id}`}
                        >
                          <button className="products_button">
                            Add-product
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Products;
