import React from "react";
import FormularioCadastro from "./components/FormulárioCadastro/FormularioCadastro";
import "./App.css";
import { Container, Typography } from "@mui/material/";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
export default function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align = "center">
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarFormulario}/>
    </Container>
  );
}

function aoEnviarFormulario(dados){

  console.log(dados)

}