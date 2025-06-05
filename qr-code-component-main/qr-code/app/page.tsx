import Image from "next/image";
import { Box, Card, Typography } from "@mui/material";
import { Outfit } from "next/font/google";
import qrCode from "@/public/image-qr-code.png";

const font = Outfit({
  subsets: ["latin"],
});
export default function Home() {
  return (
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}>
        <Card sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "320px",
          height: "500px",
          borderRadius: "20px",
          padding: "16px",
          backgroundColor: "white",
        }}>
          <Image src={qrCode} alt="QR Code" width={350} height={350} style={{
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-8px",
          }} /> 
          <Typography sx={{
            fontFamily: font,
            fontSize: "22px",
            fontWeight: "bold",
            color: "#1f314F",
            lineHeight: "120%",
            marginTop: "16px",
            textAlign: "center",
          }}>Improve your front-end skills by building projects</Typography>
          <Typography sx={{
            fontFamily: font,
            fontSize: "15px",
            fontWeight: "regular",
            padding: "16px",
            textWrap: "wrap",
            color: "#68778D",
            lineHeight: "140%",
            letterSpacing: "0.2px",
            textAlign: "center",
            marginTop: "16px",
          }}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</Typography>
        </Card>
      </Box>
  );
}
