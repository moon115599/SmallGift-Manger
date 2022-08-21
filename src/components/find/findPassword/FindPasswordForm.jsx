import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FindPasswordForm = () => {
  // 이메일, 비밀번호 제출
  const navigate = useNavigate();

  // 사용자한테 아이디/비밀번호를 입력 받고
  // 백에 보내줄 payload
  const [payload, setPayload] = useState({
    email: "",
    username: "",
  });

  const [isError, setIsError] = useState({
    email: false,
    username: false,
  });

  // 입력폼에서 데이터가 바뀔때마다 payload의 데이터 최신화
  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.id]: e.target.value });
    console.log(payload);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (payload.email === "") {
      setIsError({ ...isError, email: true });
      return;
    }
    if (payload.username === "") {
      setIsError({ ...isError, username: true });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        error={isError.username ? true : undefined}
        margin="normal"
        required
        fullWidth
        id="email"
        label="이메일 주소"
        name="email"
        autoComplete="on"
        autoFocus
        onChange={handleChange}
      />
      <TextField
        error={isError.password ? true : undefined}
        margin="normal"
        required
        fullWidth
        name="username"
        label="아이디"
        id="username"
        autoComplete="on"
        onChange={handleChange}
      />

      <Button onClick={handleSubmit} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        비밀번호 찾기
      </Button>
    </Box>
  );
};

export default FindPasswordForm;
