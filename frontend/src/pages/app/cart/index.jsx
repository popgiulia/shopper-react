import Card from "../../../components/cart/card";
import { useMemo } from "react";
import { clearCart } from "../../../features/cart/slice";
import { showToastr } from "../../../features/toastr/slice";
import { useDispatch, useSelector } from "react-redux";
import {
    Main,
    CartTitle,
    TotalText,
    TotalValue,
    SendButton,
    PaymentTitle,
    MainContainer,
    CartContainer,
    TotalContainer,
    CardsContainer,
    PaymentContainer,
    SendButtonWrapper,
} from "./styles";

function Cart() {
    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.user);
    const products = useSelector(state => state.cart.products);

    const sum = useMemo(() => {
        return products.reduce((acc, product) => {
            return acc + product.price * product.quantity;
        }, 0);
    }, [products]);

    const handleClickSendButton = () => {
        if (!user) {
            dispatch(showToastr({
                message: "You need to authenticate first!",
                severity: "error"
            }))
            return;
        }
        dispatch(clearCart());
        dispatch(showToastr({
            message: "Your order has been sent",
            severity: "success"
        }));
    }

    return (
        <Main>
            <MainContainer>
                <CartContainer>
                    <CartTitle>
                        Cart
                    </CartTitle>
                    <CardsContainer>
                        {
                            products.length === 0 ?
                                "No products in cart"
                                :
                                products.map(({ id, name, image, description, price, size, quantity }, index) => (
                                    <Card key={index} id={id} name={name} price={price} image={"/images/polo-ralph-lauren-longsleeve.jpg"} description={description} size={size} quantity={quantity} />
                                ))
                        }
                    </CardsContainer>
                </CartContainer>
                <PaymentContainer>
                    <PaymentTitle>
                        Payment
                    </PaymentTitle>
                    <TotalContainer>
                        <TotalText>Total:</TotalText>
                        <TotalValue>{sum} Lei</TotalValue>
                    </TotalContainer>
                    <SendButtonWrapper>
                        <SendButton variant="contained" color="primary" onClick={handleClickSendButton}>Send</SendButton>
                    </SendButtonWrapper>
                </PaymentContainer>
            </MainContainer>
        </Main >
    )
}

export default Cart;