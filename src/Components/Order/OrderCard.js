import React from "react";
import ShowProductOrdered from "./ShowProductOrdered";

const OrderCard = ({ order }) => {
  return (
    <>
      <tbody>
        <tr>
          <td>
            {order.user.name} {order.user.lastName}
          </td>
          <td>{order.products.length}</td>
          <td>{order.phone}</td>
          <td>{order.totalCost}</td>
          {/* <td>{order.email}</td> */}
          {/* <td>{order.createdAt}</td> */}
        </tr>
        <tr>
          <td colSpan={6}>
      <ShowProductOrdered order={order} />
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default OrderCard;