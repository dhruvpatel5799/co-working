import AppHeader from "./Components/AppHeader";
import Footer from "./Components/Footer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OurSpace from "./Components/OurSpace";
import Facilities from "./Components/Facilities";

function App() {
  return (
    <>
      <AppHeader />
      <br />
      <Facilities />
      <OurSpace />
      <Footer />
      <Box bgcolor={"#222E34"} textAlign={"center"} padding={1.5}>
       <Typography variant="body2" color="#DDDDDD">
         &#169; Copyright 2024. Behive Private Limited
       </Typography>
     </Box>
    </>
  );
}

export default App;
