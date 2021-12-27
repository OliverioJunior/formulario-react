import React, {useState} from "react";
import {Button, TextField, Switch, FormGroup, FormControlLabel} from "@mui/material/";
function FormularioCadastro() {
  let respostas = {};
  let [nome,setNome] = useState("");
   let [sobrenome,setSobrenome] = useState("");
  return (
    <form onSubmit = { (e) => {
      e.preventDefault();
      console.log(nome,sobrenome)
    }}>
      <TextField
        value={nome}
        onChange = {(e) =>{
         let tmpNome = e.target.value
          if(nome.length >= 3) {
            tmpNome = tmpNome.substr(0,3)
           } 
           setNome(tmpNome)
          }}
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
       value={sobrenome}
       onChange = {(e) =>{
        let tmpNome = e.target.value
          setSobrenome(tmpNome)
         }}
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
          control={<Switch defaultChecked onSubmit = {e => respostas.promocoes = e.target.checked ? true: false}/>}
          label="Promoções"
        />
        <FormControlLabel
          control={<Switch defaultChecked value ="true" onSubmit = {e => respostas.novidades = e.target.checked ? true: false}/>}
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
