import React from "react";
import {Button, TextField, Switch, FormGroup, FormControlLabel} from "@mui/material/";
function FormularioCadastro() {
  let respostas = {};
   
  return (
    <form onSubmit = { (e) => {
      e.preventDefault();
      console.log(respostas)
    }}>
      <TextField
        onChange = {e => respostas.nome = e.target.value}
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        onChange = {e => respostas.sobrenome = e.target.value}
        id="outlined-basic"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        onChange = {e => respostas.cpf = e.target.value}
        id="outlined-basic"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked  onChange = {e => respostas.promocoes = e.target.checked ? true: false}/>}
          label="Promoções"
        />
        <FormControlLabel
          control={<Switch defaultChecked  onChange = {e => respostas.novidades = e.target.checked ? true: false}/>}
          label="Novidades"
        />
      </FormGroup>

      <Button variant="contained" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
