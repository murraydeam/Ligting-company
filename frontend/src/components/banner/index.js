import { Typography } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerTitle,
  BannerDescription,
  BannerImage,
} from "../../styles/banner";

export default function Banner() {
  return (
    <BannerContainer>
      <BannerImage src="https://picsum.photos/id/319/2160" alt="Banner Image" />
      <BannerContent>
        <Typography variant="h6">Vintage Collection</Typography>
        <BannerTitle variant="h2">New Camera</BannerTitle>
        <BannerDescription variant="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          corrupti quaerat amet nihil sed ab optio pariatur.
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}
