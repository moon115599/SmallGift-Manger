import React from "react";
import { Button, Switch } from "@mui/material";

const Td = ({ item, handleRemove, handleEdit }) => {
  return (
    <tr>
      <td>{item.date}</td>
      <td>{item.productName}</td>
      <td>{item.productPrice}</td>
      <td>{item.buyer}</td>
    </tr>
  );
};

export default Td;
