import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
    removeFromCart,
    decreaseQuantity,
    increaseQuantity
} from "../../../features/cart/slice";
import {
    Title,
    Image,
    SizeText,
    SizeValue,
    PriceText,
    PriceValue,
    Description,
    QuantityText,
    DeleteButton,
    ImageWrapper,
    MainContainer,
    QuantityButton,
    ContentContainer,
    QuantityContainer,
    DeleteButtonWrapper,
} from "./styles";

function Card(props) {
    const { id, name, image, description, size, price, quantity } = props;

    const dispatch = useDispatch();

    const handleClickDecreaseQuantity = () => {
        dispatch(decreaseQuantity({ id, size }));
    }

    const handleClickIncreaseQuantity = () => {
        dispatch(increaseQuantity({ id, size }));
    }

    const handleClickRemoveFromCart = () => {
        dispatch(removeFromCart({ id, size }));
    }

    return (
        <MainContainer>
            <ImageWrapper>
                <Image src={image} alt={name} />
            </ImageWrapper>
            <ContentContainer>
                <Title>{name}</Title>
                <Description>{description}</Description>
                <PriceText>Price: <PriceValue>{price} Lei</PriceValue></PriceText>
                <SizeText>Size: <SizeValue>{size}</SizeValue></SizeText>
                <QuantityContainer>
                    <QuantityText>Quantity:</QuantityText>
                    <QuantityButton variant="contained" onClick={handleClickDecreaseQuantity}>-</QuantityButton>
                    <QuantityText>{quantity} x {price} Lei</QuantityText>
                    <QuantityButton variant="contained" onClick={handleClickIncreaseQuantity}>+</QuantityButton>
                </QuantityContainer>
                <DeleteButtonWrapper>
                    <DeleteButton variant="text" size="small" startIcon={<FaTrashAlt />} onClick={handleClickRemoveFromCart}>Delete</DeleteButton>
                </DeleteButtonWrapper>
            </ContentContainer>
        </MainContainer>
    )
}

export default Card;