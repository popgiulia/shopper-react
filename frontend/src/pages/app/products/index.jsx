import Card from "../../../components/products/card";
import { useParams } from "react-router-dom";
import { useGetAllProductsGroupedByType } from "../../../features/products/hooks";
import { CardsContainer, Main, Section, SectionsContainer, Title } from "./styles";

function Products() {
    const { category } = useParams();

    const { products, isLoading } = useGetAllProductsGroupedByType(category);

    return (
        <Main>
            <SectionsContainer>
                {
                    isLoading ?
                        "Loading..."
                        :
                        Object.entries(products).map(([type, products]) => (
                            <Section key={type}>
                                <Title>{type}</Title>
                                <CardsContainer>
                                    {
                                        products.map(({ id, name, image, description, price, sizeQuantities }) => (
                                            <Card key={name} id={id} name={name} price={price} image={image} description={description} sizeQuantities={sizeQuantities} />
                                        ))
                                    }
                                </CardsContainer>
                            </Section>
                        ))
                }
            </SectionsContainer>
        </Main>
    )
}

export default Products;