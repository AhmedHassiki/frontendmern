import React, { useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../JS Redux/actions/productAction';
import TheProductCard from './TheProductCard';
import { Col, Container, Row } from 'react-bootstrap';

const TheProductList = () => {

    const dispatch = useDispatch()
    const products = useSelector((state)=>state.productReducer.products)
    const loadProducts = useSelector((state)=>state.productReducer.loadProducts)

    const chunkArray = (array, size) => {
      const chunks = [];
      for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
      }
      return chunks;
    }
    
    useEffect(()=>{
        dispatch(getProducts())
    },[])

    
    return (
      <>
  <h1 style={{ textAlign : "center"}}>Nos Produits</h1>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin : '0 15px'   }}>
    {loadProducts ? (
      <Spinner animation="border" variant="danger" />
    ) : products.length === 0 ? (
      <h2>There's no product</h2>
    ) : (
      <Container fluid >
        {chunkArray(products, 3).map((row, rowIndex) => (
          <Row key={rowIndex} className="justify-content-center">
            {row.map((product) => (
              <Col sm={3} key={product._id} className="text-center" style={{border:'1px solid gray' ,borderRadius:'5px', margin:'15px' }}>
                <TheProductCard product={product} style={{ width: '140%', height: '140%', objectFit: 'cover'}} />
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    )}
  </div>
</>
        )
      }
      

export default TheProductList