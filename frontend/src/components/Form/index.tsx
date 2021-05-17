import { TextField, Box, Button, Container } from "@material-ui/core";

const Form = () => {
    return (
        <Container className="formContainer">
            <TextField variant="filled" margin="normal" fullWidth label="Nome"/>
            <TextField variant="filled" margin="normal" fullWidth label="Endereço"/>
            <TextField variant="filled" margin="normal" fullWidth label="Telefone"/>
            <TextField variant="filled" margin="normal" fullWidth label="E-mail"/>
            <TextField variant="filled" margin="normal" fullWidth label="Senha"/>
            <Box marginTop={2}>
                <Button variant="contained" type="submit">Cadastrar</Button>
            </Box>
        </Container>
    )
}

export default Form;