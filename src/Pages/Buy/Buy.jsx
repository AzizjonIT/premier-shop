import React, { useEffect, useState } from "react";
import "./Buy.css";
import Navbarjs from "../../Components/Navbar/Navbarjs";
import Footer from "../../Components/Footer/Footer";
import { AiFillPhone } from "react-icons/ai";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "react-use-cart";
import { IoMdPricetags } from "react-icons/io";

const Buy = () => {
  const [Products, setProduct] = useState([]);

  const params = useParams();

  const { addItem } = useCart();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => setProduct(response.data))
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [params.productId]);

  if (params.productId) {
    return (
      <React.Fragment key={Products.id}>
        <Navbarjs />

        <div className="buy_cont">
          <div className="total_products">
            <div className="total_images">
              <img className="total_images_img" src={Products.image} alt="" />
            </div>
            <div className="total_carts">
              <h4 className="total_carts_h4"> {Products.title} </h4>
              <div className="total_price">
                <h6 className="total_price_p">{Products.description} </h6>
              </div>
              <div className="total_price">
                <h6 className="total_price_p">{Products.category} </h6>
              </div>

              <div className="total_carts_buttons">
                <div className="total_number_">
                  <p className="total_num">
                    <IoMdPricetags className="react_icons_tel" />{" "}
                    {Products.price}{" "}
                  </p>
                  <p className="total_num">
                    <IoMdPricetags className="react_icons_tel" />
                    {Products.rating?.count}
                  </p>
                  <p className="total_num">
                    <IoMdPricetags className="react_icons_tel" />
                    {Products.rating?.rate}
                  </p>
                </div>

                <a href="https://t.me/azizjon_usmonaliyev">
                  <button className="total_but">In den Warenkorb</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
};

export default Buy;
