import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

export const MainContainer = styled("div")({
    width: "225px",
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);",
    position: "relative"
});

export const Link = styled(RouterLink)({
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
})

export const ImageWrapper = styled("div")({
    width: "100%",
    height: "300px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})

export const Image = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
})

export const ContentContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
    padding: "10px",
    backgroundColor: "#fff",
})

export const Title = styled("h3")({
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    maxWidth: "100%",
    color: "#222222"
})

export const Description = styled("p")({
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontSize: "14px",
    maxWidth: "100%",
    color: "#808080"
})

export const Price = styled("p")({
    color: "#222222"
})