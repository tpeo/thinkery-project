import React from "react";
import OrderRequestsTable from "../../components/Tables/OrderRequestsTable";
import "../TablePage.css";

function AdminOrders() {
  return (
    <div>
      <h1 className="Header">Orders</h1>
      <OrderRequestsTable />
    </div>
  );
}

export default AdminOrders;
