import React, {useState} from "react";
import {Button, TextField, Switch, FormGroup, FormControlLabel} from "@mui/material/";
function FormularioCadastro({aoEnviar, validarCpf}) {
  
  let [nome,setNome] = useState("");
  let [sobrenome,setSobrenome] = useState("");
  let [cpf,setCpf] = useState("");
  let [promocoes,setPromocoes] = useState(true);
  let [novidades,setNovidades] = useState(true);
  let [err,setErr] = useState({cpf:{valido:true, texto:""}});
  const inputProps = {
    step: 300,
  };
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
        type="number"
        inputProps={inputProps}
        onChange = {(e) =>{
         let tmpCpf = e.target.value
         if(tmpCpf.length >=11){
          tmpCpf = tmpCpf.substr(0,11)
         }
            setCpf(tmpCpf)
        }}

        onBlur={(e)=>{
          const ehValido = validarCpf(cpf)
          setErr({cpf:ehValido.cpf})
          console.log(ehValido.cpf)
        }}
        error ={!err.cpf.valido}
        helperText={err.cpf.texto}
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
