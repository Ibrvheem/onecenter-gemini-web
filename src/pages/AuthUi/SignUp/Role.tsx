import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { StyledButton } from "../../../styled-components/styledButton";
import { DomainAdd, PersonOutline } from "@mui/icons-material";
function Role({ splideRef }: any) {
  // const splideRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
    splideRef.current.go(index);
  };
  return (
    <>
      {" "}
      <Box>
        <Typography variant="h3">Get Started Now</Typography>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 300 }}>
          Enter your credentials to access your account
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ padding: "2rem 0rem" }}>
        <Grid item md={6} sm={12} xs={12}>
          <StyledButton
            color="primary"
            fullWidth
            variant={activeSlide == 0 ? "contained" : "outlined"}
            sx={{ fontWeight: 400, fontSize: "1.3rem" }}
            startIcon={<DomainAdd />}
            onClick={() => {
              handleSlideChange(0);
            }}
          >
            Partner Sign up
          </StyledButton>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <StyledButton
            color="primary"
            fullWidth
            variant={activeSlide == 1 ? "contained" : "outlined"}
            sx={{ fontWeight: 400, fontSize: "1.3rem" }}
            startIcon={<PersonOutline />}
            onClick={() => {
              handleSlideChange(1);
            }}
          >
            User Sign Up
          </StyledButton>
        </Grid>
      </Grid>
    </>
  );
}

export default Role;
