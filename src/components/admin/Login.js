import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link, Grid, Container } from '@mui/material';
import axios from 'axios';

const url = process.env.REACT_APP_BASE_URL;
function LoginAdmin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
      const response = await axios.post(url + '/admin/login',
        {
        username,
        password,
        }
      ,
      {
        headers
      });
    
    const result = response.data;
        console.log(result);
        alert(result['message']);

        if(result['status'] === true){            
            window.location.href = '/';
        }
    
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'flex-end', // ทำให้ฟอร์มชิดขวา
      }}
    >
      {/* พื้นที่ทางด้านซ้าย */}  
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#F0F1FF',
          display: 'flex',
          justifyContent: 'flex-end', // ชิดขวา
          alignItems: 'center',      // ให้อยู่ตรงกลางในแนวตั้ง
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#FFFFFF',
            padding: 3,
            borderRadius: 2,
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            marginRight: '2rem',  // เพิ่มระยะห่างจากขอบขวาของหน้าจอ
          }}
        >
          <Typography component="h1" variant="h5">
            Admin is Back!
          </Typography>
          <Box component="form" sx={{ mt: 1 }} onSubmit={handleLogin}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              id="btnLogin"
              name="btnLogin"
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#6F73DF',
                ':hover': {
                  backgroundColor: '#565CCF',
                },
              }}
            >
              Login
            </Button>
              <Typography variant="body2" color="textSecondary"></Typography>
            <Grid container justifyContent="center">
              <Typography variant="body2" color="textSecondary">
                Don't have an account?
                <Link href="#" variant="body2" sx={{ ml: 1 }}>
                  Register
                </Link>
              </Typography>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* พื้นที่ทางด้านขวา */}
      <Box
        sx={{
          width: '30%',
          backgroundColor: '#B5AEE4',
        }}
      />
    </Box>
  );
}

export default LoginAdmin;
