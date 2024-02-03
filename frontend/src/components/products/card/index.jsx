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
    const { id, name, description, price } = props;

    return (
        <MainContainer>
            <Link to={`/product/${id}`}>
                <ImageWrapper>
                    <Image src={`/images/polo-ralph-lauren-longsleeve.jpg`} alt={`Polo Ralph Lauren Longsleeve`} />
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