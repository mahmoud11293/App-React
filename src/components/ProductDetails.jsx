import { useParams } from "react-router-dom";
import Data from "../Data";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../redux/actions/index";

const ProductDetails = () => {
  const [cartBtn, setCartBtn] = useState("Add To Cart");
  const params = useParams();
  const productDetails = Data.filter((item) => item.id == params.id);
  const Product = productDetails[0];

  const dispatch = useDispatch();

  const handleCart = (Product) => {
    if (cartBtn === "Add To Cart") {
      dispatch(addItem(Product));
      setCartBtn("Remove From Cart");
    } else {
      dispatch(deleteItem(Product));
      setCartBtn("Add To Cart");
    }
  };

  return (
    <>
      <div className="container my-4 py-3">
        <div className="row">
          <div className="col-md-6">
            <image
              src={Product.img}
              alt={Product.title}
              height="300px"
              width="300px"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{Product.title}</h1>
            <hr />
            <h2 className="my-4">${Product.price}</h2>
            <p className="lead">{Product.description}</p>
            <button
              onClick={() => handleCart(Product)}
              className="btn btn-outline-primary my-5"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
