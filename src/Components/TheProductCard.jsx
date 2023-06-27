import React from "react";
import './TheProductCard.css';
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getOneProduct } from "../JS Redux/actions/productAction";
import { Link } from "react-router-dom";
import { toggleTrue } from "../JS Redux/actions/edit";

const TheProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const delProduct = (id) => dispatch(deleteProduct(id)); // delete one product
  const getProduct = (id) => dispatch(getOneProduct(id)); // get one product to edit it
  const editTrue = () => dispatch(toggleTrue()); // toggle button between add product and edit product
  const userAuth = useSelector((state) => state.authReducer.user);

  return (
    <>
      <Link
        to={`/desc/${product._id}`}
        onClick={() => getProduct(product._id)}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Card.Img
  variant="top"
  src={product.selectedFile}
  style={{
    height: "380px",
    objectFit: "cover",
    padding: "15px",
    maxWidth: "100%",
  }}
/>
        {/* <Card.Img
          variant="top"
          src={product.selectedFile}
          
          style={{
            height: "380px",
            width: "100%",
            objectFit: "cover",
            padding: "15px",
          }}
        /> */}
        <Card.Body>
          <Card.Title style={{ fontSize: "0.9rem", margin: "15px" }}>
            {product.title}
          </Card.Title>
          <Card.Text style={{ fontSize: "0.9rem", margin: "15px" }}>
            {product.price} DT
          </Card.Text>
        </Card.Body>
      </Link>
      <div>
        {/* //** i have moved this condition coz when i delete a product it linked me to the /desc/id of the product it has been deleted :/  */}
        {userAuth.role === "admin" ? (
          <>
            <Link to={`/edit/${product._id}`}>
              <Button
                style={{ margin: "10px" }}
                variant="success"
                onClick={() => {
                  getProduct(product._id);
                  editTrue();
                }}
              >
                Edit
              </Button>
            </Link>
            <Button
              style={{ margin: "10px" }}
              variant="danger"
              onClick={() => delProduct(product._id)}
            >
              Delete
            </Button>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default TheProductCard;