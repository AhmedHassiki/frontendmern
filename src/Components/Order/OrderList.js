import { useDispatch, useSelector } from "react-redux"
import OrderCard from "./OrderCard"
import { Col, Container, Row, Spinner, Table } from "react-bootstrap"
import { getOrder } from "../../JS Redux/actions/orderAction"
import { useEffect } from "react"


const OrderList = () => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.orderReducer.order)
  console.log("orders",orders)
  const loading = useSelector(state => state.orderReducer.loading)

  useEffect(() => {
    dispatch(getOrder());
  }, []);


  return (
    <>
    <Container>
    <h3>Liste des ordres</h3>
      <Row>
        <Col xs={12} md={12}>
        <div className="table-responsive">

        <Table className="table">
            <thead>
              <tr>
                <th>Nom d'utilisateur</th>
                <th>Quantité </th>
                <th>Téléphone </th>
                <th>Total</th>
                {/* <th>E-mail </th> */}
                {/* <th>Date d'achat </th> */}
              </tr>
            </thead>
              {loading ? (
                <Spinner animation="border" variant="danger" />
              ) : orders.length === 0 ? (
                <h2>There's no order with this client</h2>
              ) : (
                orders.map((el) => <OrderCard key={el._id} order={el} />)
              )}
        </Table>
        </div>
        </Col>
      </Row>
    </Container>
    
        
        </>
  )
}

export default OrderList