import { AssistantDirectionOutlined } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import Arrow from "../../assets/arrow.svg";

interface CardProps {
    cardTitle: string,
    dayPassPrice: number,
    discount: number,
    imageSrc: string
}

function Card({cardTitle, dayPassPrice, discount, imageSrc}: CardProps) {
  return (
    <Box
      width={346}
      height={360}
      padding={1.5}
      border={"1.08px solid #EEE7E7"}
      borderRadius={2}
      margin={"auto"}
    >
      <Stack gap={1.5}>
        <Stack direction={"row"} gap={6} justifyContent={"space-between"}>
          <Typography fontSize={20} fontWeight={600} lineHeight={"24.2px"}>
            {cardTitle}
          </Typography>
          <Box
            width={36}
            height={36}
            border={"0.47px solid #EEE7E7"}
            textAlign={"center"}
            padding={1}
            borderRadius={1.62}
            bgcolor={"#F9F9F9"}
          >
            <AssistantDirectionOutlined />
            <Typography
              fontSize={8}
              fontWeight={500}
              color={"#26323880"}
              lineHeight={"9.68px"}
            >
              6 Kms
            </Typography>
          </Box>
        </Stack>
        <Box position={"relative"}>
          <Box
            padding={1}
            borderRadius={1.25}
            border="0.5px solid #FFBB0080"
            position={"absolute"}
            top={8}
            left={8}
            sx={{
              background:
                "linear-gradient(100.27deg, #263238 22.66%, #2F4B59 67.67%)",
            }}
          >
            <Typography
              fontSize={14}
              fontWeight={500}
              lineHeight={"16.94px"}
              letterSpacing={2}
              color="#FFBB00"
            >
              Honeykomb
            </Typography>
          </Box>
          <img
            src={imageSrc}
            width={346}
            height={202}
            style={{ borderRadius: "6px" }}
            alt=""
          />
        </Box>
        <Stack direction={"row"} gap={1.5} marginTop={1}>
          <DailyPass dayPassPrice={dayPassPrice}/>

          <BulkPass discount={discount}/>
        </Stack>
      </Stack>
    </Box>
  );
}

function DailyPass({dayPassPrice}: {dayPassPrice: number}) {
  return (
    <Box
      width={143}
      height={42}
      border="0.5px solid #EEE7E7"
      borderRadius={1.5}
      padding={1.5}
      bgcolor="#F9F9F9"
    >
      <Stack direction={"row"} spacing={6}>
        <Stack direction={"column"}>
          <Typography
            fontSize={14}
            fontWeight={500}
            lineHeight={"16.94px"}
            color="#65624C"
          >
            Day Pass
          </Typography>
          <Typography fontSize={20} fontWeight={600} lineHeight="24.2px">
            &#8377;{dayPassPrice}
            <span
              style={{
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "14.52px",
              }}
            >
              /Day
            </span>
          </Typography>
        </Stack>
        <img src={Arrow} alt="" />
      </Stack>
    </Box>
  );
}

function BulkPass({discount}:{discount: number}) {
  return (
    <Box position={"relative"}>
      <Box
        width={69}
        height={18}
        border="1px solid #263238"
        borderRadius={0.75}
        bgcolor="#263238"
        alignContent={"center"}
        position={"absolute"}
        top={-9}
        left={50}
      >
        <Typography
          fontSize={8}
          fontWeight={500}
          lineHeight="9.68px"
          textAlign={"center"}
          color="#FFFDF7"
        >
          {discount}% Discount
        </Typography>
      </Box>
      <Box
        width={143}
        height={42}
        border="0.5px solid #FFC422"
        borderRadius={1.5}
        bgcolor="#FFCF4B"
        padding={1.5}
      >
        <Stack direction={"row"} spacing={1.8}>
          <Stack direction={"column"}>
            <Typography
              fontSize={14}
              fontWeight={500}
              color={"#65624C"}
              textAlign={"left"}
              style={{
                lineHeight: "16.94px",
              }}
            >
              Bulk Pass
            </Typography>
            <Typography fontSize={20} fontWeight={600}>
              &#8377;2400
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  lineHeight: "14.52px",
                }}
              >
                /10 Days
              </span>
            </Typography>
          </Stack>
          <img src={Arrow} alt="" />
        </Stack>
      </Box>
    </Box>
  );
}
export default Card;
