import React, { ChangeEvent, useContext, useState } from "react";
import useSignIn from "../../hooks/api/useSignIn";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { Button, ContainerForm, Form, Input, LinkTo } from "./style";
import UserContext from "../../contexts/AuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);

  const { signInLoading, signIn } = useSignIn();
  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      console.log(userData);
      setUserData(userData);
      navigate("/home");
    } catch (error) {
      alert("Não foi possível fazer o login");
    }
  }
  return (
    <>
      <Logo />
      <ContainerForm>
        <Form onSubmit={submit}>
          <Input
            data-test="email"
            disabled={disable}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="e-mail"
            name="email"
            autoComplete="off"
          />
          <Input
            data-test="password"
            disabled={disable}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="senha"
            name="password"
            autoComplete="off"
          />
          <Button data-test="sign-up-btn" disabled={disable} type="submit">
            Entrar
          </Button>
        </Form>
        <LinkTo to="/signup">Não tem uma conta? Registre-se aqui!</LinkTo>
      </ContainerForm>
    </>
  );
}
