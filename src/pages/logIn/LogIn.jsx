import React, { useState } from "react";

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  Container,
  CssBaseline,
} from "@mui/material";
import * as Styled from "./style";
import moment from "moment";

import LogInForm from "../../components/logIn/LogInForm";

const LogIn = () => {
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <LogInForm />

        <Grid container>
          <Grid item xs>
            <Link href="/find/id" variant="body2">
              <span> 아이디 </span>
            </Link>
            <span> / </span>
            <Link href="/find/password" variant="body2">
              <span> 비밀번호 찾기 </span>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signup" variant="body2">
              회원가입
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LogIn;
