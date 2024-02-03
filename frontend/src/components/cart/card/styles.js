import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")({
    display: "flex",
    gap: "24px",
    height: "180px"
});

export const ImageWrapper = styled("div")({
})

export const Image = styled("img")({
    width: "135px",
    height: "100%"
})

export const ContentContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
})

export const Title = styled("strong")({
    color: "#222222",
    fontSize: "18px"
})

export const Description = styled("p")({
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#777F85"
})

export const PriceText = styled("p")({
})

export const PriceValue = styled('span')({
    color: "#9c0000",
    fontWeight: "700",
})

export const SizeText = styled("p")({
})

export const SizeValue = styled("span")({
})

export const QuantityContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: "10px",
})

export const QuantityText = styled("span")({
    fontSize: "14px"
})

export const QuantityButton = styled(Button)({
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    padding: "0",
    minWidth: "0",
    backgroundColor: "#fff",
    color: "#222222",
    "&:hover": {
        backgroundColor: "#fff",
    }
})

export const DeleteButtonWrapper = styled("div")({
})

export const DeleteButton = styled(Button)({
    lineHeight: "1",
    color: "#9c0000",
    padding: "0",
    "& .MuiButton-startIcon svg": {
        fontSize: "14px"
    }
})