import { Box, Grid2, Stack, Typography } from "@mui/material";
import gymFacilities from "../../assets/gym_facilities.svg";
import Wifi from "../../assets/wifi.svg";
import cafe_tea_bar from "../../assets/cafe_tea_bar.svg";
import comfort_lounges from "../../assets/comfort_lounges.svg";
import quick_booking from "../../assets/quick_booking.svg";
import sport_area from "../../assets/sport_area.svg";
import affordable from "../../assets/affordable.svg";
import community_events from "../../assets/community_events.svg";
import star from "../../assets/star.svg";

const services = [
  {
    icon: (
      <Stack direction={"row"}>
        <img src={community_events} alt="" />
        <img src={star} style={{ transform: "translate(-20px, 5px)" }} alt="" />
      </Stack>
    ),
    label: "Community Events",
    desc: "One liner Default",
  },
  {
    icon: <img src={gymFacilities} alt="" />,
    label: "Gym Facilities",
    desc: "One liner Default",
  },
  {
    icon: <img src={Wifi} alt="" />,
    label: "High-Speed WiFi",
    desc: "One liner Default",
  },
  {
    icon: <img src={cafe_tea_bar} alt="" />,
    label: "Cafe & Tea Bar",
    desc: "One liner Default",
  },
  {
    icon: <img src={affordable} alt="" />,
    label: "Affordable",
    desc: "One liner Default",
  },
  {
    icon: <img src={comfort_lounges} alt="" />,
    label: "Comfort Lounges",
    desc: "One liner Default",
  },
  {
    icon: <img src={quick_booking} alt="" />,
    label: "Quick Booking",
    desc: "One liner Default",
  },
  {
    icon: <img src={sport_area} alt="" />,
    label: "Sports Area",
    desc: "One liner Default",
  },
];

function Tile() {
  return (
    <Grid2 container spacing={4} justifyContent={"center"}>
      {services.map((service, index) => (
        <Grid2 size={{ lg:3, md:3, sm:6}}>
          <Box
          width= {"154px"}
          height={" 80px"}
          borderRadius= {"6px"}
          boxShadow= "0px 2px 4px 0px #0000000F"
          bgcolor={"aqua"}
          margin={"auto"}
          display={"flex"}
          justifyContent={"center"}
          >
            <Box>{service.icon}</Box><br/>
            <Typography variant="body1">{service.label}</Typography>
          </Box>
        </Grid2>
      ))}
    </Grid2>
  );
}
export default Tile;
