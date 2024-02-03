import { useState } from "react";
import { severity } from "../../../constants/severity-constants";
import { register } from "../../../features/auth/thunks";
import { showToastr } from "../../../features/toastr/slice";
import { useDispatch } from "react-redux";
import { useRegisterHook } from "../../../features/auth/hooks";
import { Form, Title, InputField, InputsContainer, Main, SubmitButton, SubmitButtonWrapper } from "./styles";

function Register() {
    const dispatch = useDispatch();

    useRegisterHook();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            dispatch(showToastr({
                message: "Passwords do not match",
                severity: severity.error
            }));
            return;
        }

        dispatch(register({
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        }));
    }


    return (
        <Main>
            <Form onSubmit={handleSubmit}>
                <Title>
                    Register
                </Title>
                <InputsContainer>
                    <InputField size="small" label="First name" required placeholder="Insert first name..." onChange={handleChangeFirstName} />
                    <InputField size="small" label="Last name" required placeholder="Insert last name..." onChange={handleChangeLastName} />
                    <InputField size="small" type="email" label="Email" required placeholder="Insert email..." onChange={handleChangeEmail} />
                    <InputField size="small" type="password" label="Password" required placeholder="Insert password..." onChange={handleChangePassword} />
                    <InputField size="small" type="password" label="Confirm password" required placeholder="Insert confirm password..." onChange={handleChangeConfirmPassword} />
                </InputsContainer>
                <SubmitButtonWrapper>
                    <SubmitButton type="submit" variant="contained">
                        Register
                    </SubmitButton>
                </SubmitButtonWrapper>
            </Form>
        </Main>
    )
}

export default Register;