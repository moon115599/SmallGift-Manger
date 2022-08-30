import React, { useState } from "react";
import BasicInfo from "../productRegister/BasicInfo";
import SalesInfo from "../productRegister/SalesInfo";
import DetailsInfo from "../productRegister/DetailsInfo";
import { Button, FormControl, Grid } from "@mui/material";
import { axiosRegisterProduct } from "../../../api/management/productRegister";
import { ModalDiv } from "./style";

const Modal = ({ item, open, close, header }) => {
  const [payload, setPayload] = useState({
    end_dt: "string",
    productId: item.productId,
    productName: item.productName,
    productPrice: item.productPrice,
    productStock: 0,
    start_dt: "string",
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.id]: e.target.value });
    console.log(payload);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosRegisterProduct(payload);
  };

  return (
    <ModalDiv>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section>
            <header>
              <span>상품 수정</span>
              <button type="button" className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>
              <FormControl className="form-control" onSubmit={handleSubmit}>
                <BasicInfo onchange={handleChange} data={payload} />
                <SalesInfo onChange={handleChange} data={payload} />
                <DetailsInfo onChange={handleChange} data={payload} />

                <Button variant="contained" color="secondary" onClick={handleSubmit}>
                  상품 수정하기
                </Button>
              </FormControl>
            </main>
            <footer>
              <button type="button" className="close" onClick={close}>
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </ModalDiv>
  );
};

export default Modal;
