import React from "react";
import FormularioCadastro from "./components/FormulárioCadastro/FormularioCadastro";
import "./App.css";
import Container from '@mui/material/Container';
export default function App() {
    return(
        <Container component = "article" maxWidth="sm">
            <h1>Formulário</h1>
            <FormularioCadastro/>
        </Container>
    )
}