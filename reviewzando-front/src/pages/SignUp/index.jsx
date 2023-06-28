import { useState } from "react";
import useSignUp from "../../hooks/api/useSignUp";
import { Button, ContainerForm, Form, Input, LinkTo } from "./style";
import { Logo } from "../../components/Logo";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [picture_url, setPicture_url] = useState("");
  const [disable] = useState(false);
  const navigate = useNavigate();
  const { signUpLoading, signUp } = useSignUp();

  async function submit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas devem ser iguais!");
    } else {
      try {
        await signUp(username, email, password, picture_url);
        navigate("/signin");
      } catch (error) {
        console.log(error.response.data);
        if (error.response.data.name === "DuplicatedEmailError") {
          alert("Esse email já existe.");
        } else if (error.response.data.name === "DuplicatedUsernameError") {
          alert("Esse apelido já foi usado.");
        } else if (
          error.response.data.details[0] ===
          '"picture_url" must be a valid uri with a scheme matching the http|https pattern'
        ) {
          alert(
            "Link da imagem inválido! \nTente utilizar um link que \ntermine em .png ou .jpg"
          );
        } else {
          alert(
            "Alguma coisa deu errado. \nPor favor, verifique os campos e tente novamente"
          );
        }
      }
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
            required
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
            required
          />
          <Input
            data-test="confirmPassword"
            disabled={disable}
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type="password"
            placeholder="confirme a senha"
            name="password"
            autoComplete="off"
            required
          />
          <Input
            data-test="username"
            disabled={disable}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="apelido"
            name="username"
            autoComplete="off"
            maxLength={15}
            required
          />
          <Input
            data-test="picture-url"
            disabled={disable}
            onChange={(e) => setPicture_url(e.target.value)}
            value={picture_url}
            type="text"
            placeholder="foto de perfil (URL)"
            name="image"
            autoComplete="off"
            required
          />
          <Button
            data-test="sign-up-btn"
            disabled={signUpLoading}
            type="submit"
          >
            Cadastrar
          </Button>
        </Form>
        <LinkTo to="/signin">Já possui uma conta? Conecte-se aqui!</LinkTo>
      </ContainerForm>
    </>
  );
}
