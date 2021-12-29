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
      <FormularioCadastro 
      aoEnviar={aoEnviarFormulario}
      validarCpf={validarCpf}
      />
    </Container>
  );
}

function aoEnviarFormulario(dados){

  console.log(dados)

}

function validarCpf(cpf){
  if(cpf.length !== 11){
    return {cpf:{valido:false, texto: "CPF deve ter 11 digitos"}}
  } else{
    return {cpf:{valido:true,texto: ""}}
  }
  }