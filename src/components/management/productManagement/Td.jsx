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
    <tr id={item.id}>
      <td>
        <input type="checkbox" onChange={handleCheck} checked={checked.includes(item.id)} />
      </td>
      <td>{item.id}</td>
      <td>
        <img src={item.productImage} alt="image" height="50px" width="50px" />
      </td>
      <td>{item.productName}</td>
      <td>{item.productPrice}</td>
      {/* <td>
        <Switch defaultChecked onChange={handleSwitch} />
      </td> */}
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
