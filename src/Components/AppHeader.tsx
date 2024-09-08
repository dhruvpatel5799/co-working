import {
  AppBar,
  Box,
  Grid2,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import AppIcon from "../assets/image 54.svg";
import CallIcon from "@mui/icons-material/Call";
import backgroundImage from "../assets/background.png";
import coWorking from "../assets/coworking.png";

function AppHeader() {
  return (
    <Grid2 container>
      <Grid2 size={12} marginTop={4}>
        <AppBar color="inherit" elevation={0}>
          <Toolbar sx={{ display: "flex", justifyContent: " space-between" }}>
            <Box height={40} padding={1}>
              <img src={AppIcon} alt="AppIcon" />
            </Box>
            <Box border="1px solid #F2B304">
              <IconButton>
                <CallIcon sx={{ color: "#FFBB00" }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Grid2>
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
        <img src={backgroundImage} alt="" style={{ width: "100%" }} />
      </Box>
      <Box
        width={"100%"}
        sx={{
          display: { xs: "grid", sm: "grid", md: "none" },
          textAlign: "center",
        }}
      >
        <img src={coWorking} alt="" style={{ width: "100%" }} />
        <Typography
          variant="h6"
          fontWeight={600}
          justifySelf={"center"}
          letterSpacing={-1}
          paddingInline={3.5}
        >
          Host your meeting with world-class amenities. Starting at
          <span style={{ color: "#FFBB00" }}> &#8377;199/-!</span>
        </Typography>
      </Box>
    </Grid2>
  );
}
export default AppHeader;
