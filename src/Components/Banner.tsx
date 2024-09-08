import { Box, Typography } from "@mui/material";
import backgroundImage from "../assets/background.png";
import coWorking from "../assets/coworking.png";
import { useAppHeaderStyle } from "./AppHeader.styles";
import Grid from "@mui/material/Grid2";
const Banner = () => {
  return (
    <Box flexGrow={1}>
      <Box
        position={"relative"}
        overflow={"clip"}
        sx={{ display: { xs: "none", md: "grid", lg: "grid" } }}
      >
        <Box
          position={"absolute"}
          maxWidth={800}
          padding={4}
          alignSelf={"center"}
          display={"grid"}
        >
          <Typography
            fontSize={"3.625rem"}
            fontWeight={700}
            lineHeight="70.19px"
            letterSpacing={-1}
          >
            Host your meeting with world-class amenities. Starting at
            <span style={{ color: "#FFBB00" }}> &#8377;199/-!</span>
          </Typography>
        </Box>
        <img src={backgroundImage} alt="" style={{ maxWidth: "100vw" }} />
      </Box>

      <Box
        sx={{
          display: { xs: "grid", sm: "grid", md: "none" },
          textAlign: "center",
        }}
      >
        <Grid size={8}>
          <img src={coWorking} alt="" style={{ justifySelf: "center", maxWidth:'100%', height:'auto' }} />
        </Grid>
        <Typography
          variant="h4"
          fontWeight={600}
          justifySelf={"center"}
          letterSpacing={-1}
          paddingInline={3.5}
        >
          Host your meeting with world-class amenities. Starting at
          <span style={{ color: "#FFBB00" }}> &#8377;199/-!</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
