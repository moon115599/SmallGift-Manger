import React, { useState } from "react";
import { Button, Switch } from "@mui/material";
import { axiosModifyProduct, axiosOnProduct } from "../../../api/management/productManagement";
import Modal from "./Modal";

const Td = ({ item, handleCheck, checked }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSwitch = (e) => {
    let payload = {
      productId: item.productId,
      isChecked: e.target.checked,
    };
    axiosOnProduct(payload);
  };

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
        <Switch defaultChecked onChange={handleSwitch} />
      </td>
      <td>
        <Button onClick={openModal} variant="outlined" size="small">
          수정
        </Button>
        <Modal item={item} open={modalOpen} close={closeModal} />
      </td>
    </tr>
  );
};

export default Td;
