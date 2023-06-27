import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductDescription.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import ModalBasketHome from "./ModalBasketHome";
import { getOneProduct } from "../JS Redux/actions/productAction";
import { useParams } from "react-router-dom";

const ProductDescription = () => {
  const { id } = useParams(); 
  //**! when i refresh the ProductDescription, it can't get again the id of the product, so it shows nothing
  //**! so i took the id with useParams and gave it to like a pram in the useEffect.
  // console.log("firstID : " , id)
  const product = useSelector((state) => state.productReducer.product);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, []);

  return (
    <>
    <Container>
      <Row>
        <Col xs={12} md={6}>
        <img className="product-image" src={product.selectedFile} alt={product.title} />
        </Col>
        <Col xs={12} md={6}className="title-price-description">
          <Row>
          <h5>{product.title}</h5>
          <p>{product.price} DT</p>
          <p>{product.description}</p>
          </Row>
          
          <Row className="quantity_addtocart">        
            <div className="quantity-buttons">
              <label>Quantity:</label>
              <Button onClick={() => setQuantity(quantity + 1)} style={{ marginRight: "10px" }} >{" "}+{" "}</Button>
              <p className="product-description">{quantity}</p>
              <Button  onClick={() => setQuantity(quantity - 1)} style={{ marginLeft: "10px" }} disabled={quantity === 1} > {" "}-{" "}</Button>
            </div>
            <ModalBasketHome laquantite={quantity} />
          </Row>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ProductDescription;