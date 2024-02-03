import { useState } from "react";
import { severity } from "../../../constants/severity-constants";
import { useParams } from "react-router-dom";
import { addToCart } from "../../../features/cart/slice";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useGetProductById } from "../../../features/products/hooks";
import {
    Main,
    Title,
    Image,
    SizeText,
    PriceText,
    SizeButton,
    PriceValue,
    Description,
    ImageWrapper,
    MainContainer,
    SizesContainer,
    AddToCartButton,
    DetailsContainer,
    ButtonsContainer,
    AddToCartButtonWrapper,
} from "./styles";

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

function Product() {
    const dispatch = useDispatch();

    const [selectedSize, setSelectedSize] = useState(sizes[0]);

    const { id } = useParams();

    const { product, isLoading } = useGetProductById(id);

    if (!product) return null;

    const { name, price, description } = product;

    const handleClickAddToCart = () => {
        console.log("Add to cart");
        dispatch(addToCart({
            product: {
                id,
                name,
                price,
                description,
                size: selectedSize
            },
            message: "Product added to cart",
            severity: severity.success
        }))
    };

    return (
        <Main>
            {
                isLoading ?
                    "Loading..."
                    :
                    <MainContainer>
                        <ImageWrapper>
                            <Image src={`/images/polo-ralph-lauren-longsleeve.jpg`} alt={`Polo Ralph Lauren Longsleeve`} />
                        </ImageWrapper>
                        <DetailsContainer>
                            <Title>{name}</Title>
                            <Description>{description}</Description>
                            <PriceText>Price: <PriceValue>{price} Lei</PriceValue></PriceText>
                            <SizesContainer>
                                <SizeText>
                                    Select size
                                </SizeText>
                                <ButtonsContainer>
                                    {
                                        sizes.map((size, index) => (
                                            <SizeButton
                                                key={index}
                                                variant="contained"
                                                active={size === selectedSize}
                                                onClick={() => setSelectedSize(size)}
                                            >
                                                {size}
                                            </SizeButton>
                                        ))
                                    }
                                </ButtonsContainer>
                            </SizesContainer>
                            <AddToCartButtonWrapper>
                                <AddToCartButton variant="contained" startIcon={<FaCartPlus />} onClick={handleClickAddToCart}>Add to cart</AddToCartButton>
                            </AddToCartButtonWrapper>
                        </DetailsContainer>
                    </MainContainer>
            }
        </Main >
    )
}

export default Product;