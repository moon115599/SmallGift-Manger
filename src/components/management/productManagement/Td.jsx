import React from "react";
import { Button, Switch } from "@mui/material";

const Td = ({ item, handleRemove, handleEdit }) => {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{item.productId}</td>
      <td>{item.productName}</td>
      <td>{item.productPrice}</td>
      <td>
        <Switch defaultChecked />
      </td>
      <td>
        <Button variant="outlined">수정</Button>
      </td>
    </tr>
  );
};

export default Td;
