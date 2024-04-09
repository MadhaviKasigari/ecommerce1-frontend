import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./orderTrack.css";
import { OrderItemList } from "./OrderItemList";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addToOrderTrack } from "../redux/actions/ordertrackActions";

const OrderTrack = ({ date, address, status }) => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const dispatch = useDispatch();

  const orderTrack = useSelector((state) => state.ordertrack);
  const { OrderItemList } = orderTrack;

  useEffect(() => {
    console.log(OrderItemList);
    setOrder(OrderItemList);
  }, [OrderItemList]);

  if (!orderId)
    return (
      <div className="container">
        <div className="content">
          {OrderItemList && OrderItemList.length === 0 ? (
            <div>
              No items in OrderTrack <Link to="/">GO Back</Link>
            </div>
          ) : (
            OrderItemList &&
            OrderItemList.map((item) => (
              <OrderItemList key={item.productId} item={item} />
            ))
          )}
          <h1>Order History</h1>
          <table className="table">
            <thead className="table thead">
              <tr className="table th">
                <th>Order ID</th>
                <th>Date</th>
                <th>Address</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {order &&
                order.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.date}</td>
                    <td>{order.total}</td>
                    <td>{order.status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default OrderTrack;
