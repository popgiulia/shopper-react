import {
    Link,
    Image,
    Price,
    Title,
    Description,
    ImageWrapper,
    MainContainer,
    ContentContainer,
} from "./styles";

function Card(props) {
    const { id, image, name, description, price } = props;

    return (
        <MainContainer>
            <Link to={`/product/${id}`}>
                <ImageWrapper>
                    <Image src={image} alt={name} />
                </ImageWrapper>
                <ContentContainer>
                    <Title>{name}</Title>
                    <Description>{description}</Description>
                    <Price>{price} Lei</Price>
                </ContentContainer>
            </Link>
        </MainContainer>
    )
}

export default Card;