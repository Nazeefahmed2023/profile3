import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  TextField,
  Button,
  Link,
  Container,
  Box,
  IconButton,
  Divider,
} from "@mui/material";
import {
  EmailOutlined,
  Insights,
  LinkedIn,Instagram, GitHub, Twitter
} from "@mui/icons-material";

import "../Style/Footer.css";

const Footer = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      className="footer"
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={3} p={5}>
              <Typography variant="h6" color="white">
              
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3} p={5}>
              <Typography variant="body1" color="white">
                Quick Link
              </Typography>
              <Grid container spacing={1} mt={1}>
                <Grid item p={1}>
                  <Link href="#" color="white" underline="none">
                    Service
                  </Link>
                </Grid>
                <Grid item p={1}>
                  <Link href="#" color="white" underline="none">
                    Projects
                  </Link>
                </Grid>
                <Grid item p={1}>
                  <Link href="#" color="white" underline="none">
                    Pricing
                  </Link>
                </Grid>
                <Grid item p={1}>
                  <Link href="#" color="white" underline="none">
                    FAQs
                  </Link>
                </Grid>
                <Grid item p={1}>
                  <Link href="#" color="white" underline="none">
                    Contact
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={3} p={5}>
              <Typography variant="body1" color="white">
                Email Address
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                margin="dense"
                InputProps={{
                  style: { backgroundColor: "white" },
                  startAdornment: (
                    <IconButton>
                      <EmailOutlined color="action" />
                    </IconButton>
                  ),
                  placeholder: "Enter your email",
                }}
              />
              <Button
                variant="contained"
                size="small"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  marginTop: "5px",
                  fontWeight: "bold",
                  padding: "10px 20px",
                }}
              >
                Subscribe
              </Button>
            </Grid>
            <Grid item xs={12} sm={3} p={5}>
              <Typography variant="body1" color="white">
                Follow Us
              </Typography>
              <Box mt={1}>
                <IconButton
                  color="inherit"
                  sx={{ color: "white", "&:hover": { color: "black" } }} href="https://www.linkedin.com/in/nazeef-ahmed-6a7392257/"
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  color="inherit"
                  sx={{ color: "white", "&:hover": { color: "black" } }} href="https://www.instagram.com/nazeefahmed7/"
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  color="inherit"
                  sx={{ color: "white", "&:hover": { color: "black" } }} href="https://github.com/Nazeefahmed2023"
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  color="inherit"
                  sx={{ color: "white", "&:hover": { color: "black" } }} href=""
                >
                  <Twitter />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
        <Divider />
        
      </Container>
    </AppBar>
  );
};

export default Footer;
