import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Brandsproducts.css"
import { Link } from "react-router-dom";

const Brandsproducts = () => {
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
    <>
      <main>
        <div className="brands_inputs">
          {" "}
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
                  <h5 className="products_h3">
                    {Products.title.slice(0, 20)}{" "}
                  </h5>
                  <p className="brandsproducts_p">
                    {Products.description.slice(0, 65)}{" "}
                  </p>
                  <h5 className="products_h2">{Products.price} </h5>
                  <Link
                    className="products_link"
                    to={`/products/${Products.id}`}
                  >
                    <button className="products_button">Add to Cart</button>
                  </Link>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Brandsproducts;
