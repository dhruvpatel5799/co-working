import { Box, Grid2, Stack, Typography } from "@mui/material";
import footerDesktop from "../assets/footerDesktop.svg";
import playStore from "../assets/playStore.svg";
import appStore from "../assets/appStore.svg";

function Footer() {
  return (
    <Box padding={{sm:8, xs:2}}>
          <Typography
            fontFamily="Inter"
            fontSize={{lg:36, md:36, sm:24}}
            fontWeight={700}
            color="#605F5F"
            paddingBlock={4}
          >
            Download our app now
          </Typography>
      <Grid2 container spacing={4}>
        <Grid2 size={{ lg: 4, md: 6, sm: 8 }} margin={{xs: 'auto', md: 'auto', lg: 'unset'}}>
          <img
            src={footerDesktop}
            alt=""
            style={{
                maxWidth: "90%",
                height: "auto"
            }}
          />
        </Grid2>
        <Grid2 size={{ lg: 5, md: 6, sm: 12 }} alignSelf={"flex-end"}>
        <Typography 
          fontFamily="Inter"
          fontSize={20}
          fontWeight={500}
          lineHeight={"28px"}
          color= "#605F5F" 
          sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}
        >
          Boost your productivity with the BEHIVE Workspace app. Elevate
          your workspace, collaborate efficiently, and unlock exclusive
          perks.
        </Typography><br/>
        <Stack direction={"row"} spacing={3}>
          <img src={playStore} alt=""/>
          <img src={appStore} alt=""/>
        </Stack>
        </Grid2>
      </Grid2>
    </Box>
  );
}
export default Footer;
