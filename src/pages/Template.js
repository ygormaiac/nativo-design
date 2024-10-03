import { Grid, Box } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SwiperHomepage from "../components/Swiper";

export default function Template() {
    return (
        <Grid container rowSpacing={6} justifyContent="center">
  <Grid item xs={9}>
    <div class="container-navbar">
        <Navbar />
    </div>
  </Grid>
  <Grid item xs={9}>
    <SwiperHomepage />
  </Grid>
  <Grid item xs={12}>
    <div class="container-footer">
        <Footer />
    </div>
  </Grid>
</Grid>
    )
}