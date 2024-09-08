import React, { useState } from "react";
import { Box, Card, Divider, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import gymFacilities from "../assets/gym_facilities.svg";
import Wifi from "../assets/wifi.svg";
import cafe_tea_bar from "../assets/cafe_tea_bar.svg";
import comfort_lounges from "../assets/comfort_lounges.svg";
import quick_booking from "../assets/quick_booking.svg";
import sport_area from "../assets/sport_area.svg";
import affordable from "../assets/affordable.svg";
import community_events from "../assets/community_events.svg";
import star from "../assets/star.svg";

const services = [
  {
    icon: (
      <Stack direction={"row"}>
        <img src={community_events} alt=""/>
        <img src={star} style={{ transform: "translate(-20px, 5px)" }} alt=""/>
      </Stack>
    ),
    label: "Community Events",
    desc: "One liner Default",
  },
  {
    icon: <img src={gymFacilities} alt=""/>,
    label: "Gym Facilities",
    desc: "One liner Default",
  },
  {
    icon: <img src={Wifi} alt=""/>,
    label: "High-Speed WiFi",
    desc: "One liner Default",
  },
  {
    icon: <img src={cafe_tea_bar} alt=""/>,
    label: "Cafe & Tea Bar",
    desc: "One liner Default",
  },
  {
    icon: <img src={affordable} alt=""/>,
    label: "Affordable",
    desc: "One liner Default",
  },
  {
    icon: <img src={comfort_lounges} alt=""/>,
    label: "Comfort Lounges",
    desc: "One liner Default",
  },
  {
    icon: <img src={quick_booking} alt=""/>,
    label: "Quick Booking",
    desc: "One liner Default",
  },
  {
    icon: <img src={sport_area} alt=""/>,
    label: "Sports Area",
    desc: "One liner Default",
  },
];
const HoverBox = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  // backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s ease",
  zIndex: 1,
});

const CardContainer = styled(Card)({
  position: "relative",
  "&:hover": {
    "& .hoverBox": {
      opacity: 1,
    },
  },
});

const WhyChooseUs: React.FC = () => {
  return (
    <Box paddingInline={8}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 2 }}>
        Why Choose us?
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {/* <CardContainer> */}
        {services.map((service, index) => (
          <React.Fragment key={index}>
            {index > 0 && index % 4 === 0 && (
              <Divider
                flexItem
                orientation="horizontal"
                sx={{ width: "90%" }}
              />
            )}
            <Box
              sx={{
                flex: "1 1 25%",
                textAlign: "center",
                paddingY: 2,
                borderRight: index % 4 !== 3 ? "1px solid #e0e0e0" : "none",
                boxSizing: "border-box",
                // position: "relative",
                overflow: "hidden",
                // "&:hover": {
                //   backgroundColor: "#f1f1f1",
                // }
                position: "relative",
                "&:hover": {
                  "& .hoverBox": {
                    opacity: 1,
                  },
                },
              }}
            >
              <Stack
                direction={"row"}
                spacing={5}
                sx={{
                  marginLeft: "25px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box sx={{ color: "#f9a825" }}>{service.icon}</Box>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  {service.label}
                </Typography>
                <HoverBox className="hoverBox">
                  <Typography
                    variant="subtitle1"
                    sx={{ mt: 5, position: "absolute", left: "60px" }}
                  >
                    {service.desc}
                  </Typography>
                </HoverBox>
              </Stack>
            </Box>
          </React.Fragment>
        ))}
        {/* </CardContainer> */}
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
