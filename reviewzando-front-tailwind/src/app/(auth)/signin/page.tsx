"use client";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { Input, Button, Form, ContainerForm } from "../style";
import useSignIn from "@/hooks/api/useSignIn";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);

  const { signInLoading, signIn } = useSignIn();

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await signIn(email, password);
      window.location.href = "/home";
    } catch (error) {
      alert("Não foi possível fazer o login");
    }
  }
  return (
    <ContainerForm>
      <Form onSubmit={submit}>
        <Input
          data-test="email"
          disabled={disable}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          value={email}
          type="email"
          placeholder="e-mail"
          name="email"
          autoComplete="off"
        />
        <Input
          data-test="password"
          disabled={disable}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
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
      <Link
        href={"/signup"}
        data-test="login-link"
        className="text-white text-[20px] underline"
      >
        <p>Não tem uma conta? Registre-se aqui!</p>
      </Link>
    </ContainerForm>
  );
}
