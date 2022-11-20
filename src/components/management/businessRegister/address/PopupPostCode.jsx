import React from "react";
import DaumPostcode from "react-daum-postcode";
import { postCodeStyle } from "./style";
import { Button } from "@mui/material";

const PopupPostCode = ({ onClose, setAddress, setZoneCode }) => {
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log(data.address);
    setAddress(fullAddress);

    let zoneCode = data.zonecode;
    let zoneName = data.address;
    setZoneCode(zoneName);
    onClose();
  };

  return (
    <postCodeStyle>
      <DaumPostcode onComplete={handlePostCode} />
      <Button
        className="postCode_btn"
        variant="outlined"
        size="small"
        onClick={() => {
          onClose();
        }}
      >
        닫기
      </Button>
    </postCodeStyle>
  );
};

export default PopupPostCode;
