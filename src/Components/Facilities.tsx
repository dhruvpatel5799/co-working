import { Box, Card, Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import gymFacilities from "../assets/gym_facilities.svg";
import Wifi from "../assets/wifi.svg";
import cafe_tea_bar from "../assets/cafe_tea_bar.svg";
import comfort_lounges from "../assets/comfort_lounges.svg";
import quick_booking from "../assets/quick_booking.svg";
import sport_area from "../assets/sport_area.svg";
import affordable from "../assets/affordable.svg";
import community_events from "../assets/community_events.svg";
import { useState } from "react";
const services = [
  {
    icon: <img src={community_events} alt=""/>,
    label: "Community Events",
    desc: "One liner details about the feature",
  },
  {
    icon: <img src={gymFacilities} alt=""/>,
    label: "Gym Facilities",
    desc: "One liner details about the feature",
  },
  {
    icon: <img src={Wifi} alt=""/>,
    label: "High-Speed WiFi",
    desc: "One liner details about the feature",
  },
  {
    icon: <img src={cafe_tea_bar} alt=""/>,
    label: "Cafe & Tea Bar",
    desc: "One liner details about the feature",
  },
  {
    icon: <img src={affordable} alt=""/>,
    label: "Affordable",
    desc: "One liner details about the feature",
  },
  {
    icon: <img src={comfort_lounges} alt=""/>,
    label: "Comfort Lounges",
    desc: "One liner details about the feature",
  },
  {
    icon: <img src={quick_booking} alt=""/>,
    label: "Quick Booking",
    desc: "One liner details about the feature",
  },
  {
    icon: <img src={sport_area} alt=""/>,
    label: "Sports Area",
    desc: "One liner details about the feature",
  },
];
const Facilities = () => {

  const [hoverStates, setHoverStates] = useState(
    Array(services.length).fill(false)
  );

  const onHover = (index: number) => {
    const newHoverStates = hoverStates.map((_, i) => i === index);
    setHoverStates(newHoverStates);
  };

  const onLeave = (index: number) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };
  return (
    <Box sx={{ flexGrow: 1 }} paddingInline={8}>
      <Typography
        variant="h4"
        fontFamily={"inter"}
        gutterBottom
        color="#263238"
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        Why Choose us?
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        rowSpacing={{ lg:0, md:3, xs:2 }}
      >
        {services.map((item, index) => (
          <>
            {index > 0 && index % 4 === 0 && (
              <Divider
                flexItem
                orientation="horizontal"
                sx={{ width: "100%",
                display: {lg: "block", md: "none", sm: "none", xs: "none" }
                }}
              />
            )}
            <Grid
              key={index}
              size={{ xs: 2, sm: 4, md: 3 }}
              onMouseEnter={() => onHover(index)}
              onMouseLeave={() => onLeave(index)}
              sx={{
                borderRight: {lg:index % 4 !== 3 ? "1px solid #e0e0e0" : "none", md:"none", sm:"none"},
              }}
            >
              <Stack
                direction={"row"}
                spacing={3}
                alignItems={"center"}
                display={{lg: "flex", md: "flex", sm: "none", xs: "none" }}
              >
                <Box sx={{ color: "#f9a825", padding: "10px", border: "2px" }}>
                  {item.icon}
                </Box>
                <Stack>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "18px",
                      fontWeight: 500,
                      lineHeight: "21.78px",
                      textAlign: "left",
                      color: "#263238",
                    }}
                  >
                    {item.label}
                  </Typography>
                  {hoverStates[index] ? (
                    <Typography
                    fontFamily="Inter"
                     variant="body2">{item.desc}</Typography>
                  ) : (
                    ""
                  )}
                </Stack>
              </Stack>
              <Card
                sx={{
                  height: 100,
                  display: { lg: "none", md: "none", sm: "grid", xs: "grid" },
                  alignItems: "center",
                }}
              >
                <Stack alignItems={"center"}>
                  <Box
                    sx={{ color: "#f9a825", padding: "10px", border: "2px" }}
                  >
                    {item.icon}
                  </Box>
                  <Stack>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontSize: {lg:"18px", md:"16px", sm: "12px", xs:"11px"},
                        fontWeight: 500,
                        lineHeight: "21.78px",
                        textAlign: "left",
                        color: "#263238",
                      }}
                    >
                      {item.label}
                    </Typography>
                    {hoverStates[index] ? (
                      <Typography fontFamily="Inter" variant="body2">{item.desc}</Typography>
                    ) : (
                      ""
                    )}
                  </Stack>
                </Stack>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  );
};

export default Facilities;
