import React, {useState} from "react";
import {Button, TextField, Switch, FormGroup, FormControlLabel} from "@mui/material/";
function FormularioCadastro({aoEnviar}) {
  
  let [nome,setNome] = useState("");
  let [sobrenome,setSobrenome] = useState("");
  let [cpf,setCpf] = useState("");
  let [promocoes,setPromocoes] = useState(true);
  let [novidades,setNovidades] = useState(true);
  return (
    <form onSubmit = { (e) => {
      e.preventDefault();
      aoEnviar({nome,sobrenome,cpf,promocoes,novidades})
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
        let tmpSobrenome = e.target.value
          setSobrenome(tmpSobrenome)
         }}
        id="outlined-basic"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange = {(e) =>{
         let tmpCpf = e.target.value
           setCpf(tmpCpf)
          }}
        id="outlined-basic"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormGroup>
        <FormControlLabel
          control={<Switch 
            
            checked={promocoes} 
            onChange = {(e) =>{
            let tmpPromocoes = e.target.checked
              setPromocoes(tmpPromocoes)
             }}/>}
          label="Promoções"
        />
        <FormControlLabel
          control={<Switch 
            checked={novidades} 
            
            onChange = {(e) =>{
            let tmpNovidades = e.target.checked
              setNovidades(tmpNovidades)
             }}/>}
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
