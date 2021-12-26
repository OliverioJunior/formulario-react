import React from 'react';
import Button from '@mui/material/Button'
import TextField from "@mui/material/TextField"
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
function FormularioCadastro(){
    
    return(
        <form>
            <TextField id="outlined-basic" label="Nome" variant="outlined" margin ='normal' fullWidth />
            <TextField id="outlined-basic" label="Sobrenome" variant="outlined" margin ='normal' fullWidth/>
            <TextField id="outlined-basic" label="CPF" variant="outlined" margin ='normal' fullWidth />
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Promoções" />
                <FormControlLabel control={<Switch defaultChecked />} label="Novidades" />
            </FormGroup>

            <Button variant ="contained" type ="submit">Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro;