import { login } from "../../../features/auth/thunks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginHook } from "../../../features/auth/hooks";
import { Form, Title, InputField, InputsContainer, Main, SubmitButton, SubmitButtonWrapper } from "./styles";

function Login() {
    const dispatch = useDispatch();

    useLoginHook();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(login({
            email,
            password
        }));
    }

    return (
        <Main>
            <Form onSubmit={handleSubmit}>
                <Title>
                    Login
                </Title>
                <InputsContainer>
                    <InputField size="small" type="email" label="Email" required placeholder="Insert email..." onChange={handleChangeEmail} />
                    <InputField size="small" type="password" label="Password" required placeholder="Insert password..." onChange={handleChangePassword} />
                </InputsContainer>
                <SubmitButtonWrapper>
                    <SubmitButton type="submit" variant="contained">
                        Login
                    </SubmitButton>
                </SubmitButtonWrapper>
            </Form>
        </Main>
    )
}

export default Login;