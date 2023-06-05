"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Input, Button, Form, ContainerForm } from "../style";
import useSignUp from "@/hooks/api/useSignUp";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [picture_url, setPicture_url] = useState("");
  const [disable, setDisable] = useState(false);

  const { signUpLoading, signUp } = useSignUp();

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas devem ser iguais!");
    } else {
      try {
        await signUp(username, email, password, picture_url);
        window.location.href = "/signin";
      } catch (error: any) {
        console.log(error.response.data);
        if (
          error.response.data.details[0] === '"picture_url" must be a valid uri'
        ) {
          alert("Link da imagem inválido!");
        } else {
          alert("nao foi");
        }
      }
    }
  }

  return (
    <ContainerForm>
      <Form onSubmit={submit}>
        <Input
          data-test="email"
          disabled={disable}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          value={username}
          type="text"
          placeholder="apelido"
          name="username"
          autoComplete="off"
          required
        />
        <Input
          data-test="picture-url"
          disabled={disable}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPicture_url(e.target.value)
          }
          value={picture_url}
          type="text"
          placeholder="foto de perfil"
          name="image"
          autoComplete="off"
          required
        />
        <Button data-test="sign-up-btn" disabled={signUpLoading} type="submit">
          Cadastrar
        </Button>
      </Form>
      <Link
        href={"/signin"}
        data-test="login-link"
        className="text-white text-[20px] underline"
      >
        <p>Volte para o Login!</p>
      </Link>
    </ContainerForm>
  );
}
