import React, { useState, useRef, useEffect } from "react";
import { Form, Input, Button, Select } from "antd";
import "../TablePage.css";
import { useSelector } from "react-redux";
import firebaseCalls from "../../utils/firebaseCalls";

function CheckIn() {
  const [reservationIDs, setReservationIDs] = useState([]);
  const formRef = useRef();

  const reservations = useSelector((state) => state.reservations || {});
  const inventoryInstances = useSelector((state) => state.inventoryInstances);

  const myID = useSelector((state) => state.user.employeeID);

  const checkInInstances = () => {
    reservationIDs.forEach((reservationID) => {
      const reservation = reservations[reservationID];
      const itemID = inventoryInstances[reservation.itemInstanceID].itemID;
      firebaseCalls.removeReservation(
        reservationID,
        itemID,
        reservation.itemInstanceID
      );
    });
  };

  return (
    <div>
      <h1 className="Header">Check-In</h1>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        ref={formRef}
      >
        <Form.Item label="Item Instances" name="reservations">
          <Select
            placeholder="Select instance IDs"
            mode="multiple"
            onChange={setReservationIDs}
            bordered={false}
            style={{
              textAlign: "left",
              borderColor: "#b12f23",
              borderStyle: "solid",
              borderWidth: 1,
            }}
          >
            {Object.values(reservations)
              .filter((reservation) => reservation.currentEmployee == myID)
              .map((reservation) => (
                <Select.Option
                  key={reservation.reservationID}
                  value={reservation.reservationID}
                >
                  {reservation.itemInstanceID} (Reservation ID:{" "}
                  {reservation.reservationID}, Program: {reservation.program},
                  Description: {reservation.description})
                </Select.Option>
              ))}
          </Select>
        </Form.Item>

        <Form.Item className="SubmitFormButton">
          <Button
            className="LoginButton"
            type="primary"
            size="large"
            htmlType="submit"
            // disabled={!itemID || instances.length <= 0}
            onClick={checkInInstances}
            href="/emp/reservations"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CheckIn;
