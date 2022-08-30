import React, { useState } from "react";
import { Button, Switch } from "@mui/material";

const Td = ({ item, handleEdit, handleCheck, checked }) => {
  return (
    <tr id={item.productId}>
      <td>
        <input type="checkbox" onChange={handleCheck} checked={checked.includes(item.productId)} />
      </td>
      <td>{item.listNum}</td>
      <td>{item.productImg}</td>
      <td>{item.productName}</td>
      <td>{item.productPrice}</td>
      <td>
        <Switch defaultChecked />
      </td>
      <td>
        <Button variant="outlined" size="small">
          수정
        </Button>
      </td>
    </tr>
  );
};

export default Td;
