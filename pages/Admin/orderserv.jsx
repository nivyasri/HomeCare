import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orderss = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch user orders when component mounts
    axios.get('/api/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  return (
    <div>
      <h1>User Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <strong>Order ID:</strong> {order.id}<br />
            <strong>User ID:</strong> {order.userId}<br />
            <strong>Status:</strong> {order.status}<br />
            <strong>Items:</strong>
            <ul>
              {order.items.map(item => (
                <li key={item.id}>
                  {item.name} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orderss;

