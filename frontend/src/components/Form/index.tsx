import { TextField, Box, Button, Container } from "@material-ui/core";

const Form = () => {
    return (
        <Container className="formContainer">
            <TextField margin="normal" fullWidth label="Nome"/>
            <TextField margin="normal" fullWidth label="Endereço"/>
            <TextField margin="normal" fullWidth label="Telefone"/>
            <TextField margin="normal" fullWidth label="E-mail"/>
            <TextField margin="normal" fullWidth label="Senha"/>
            <Box marginTop={2}>
                <Button variant="contained" type="submit">Cadastrar</Button>
            </Box>
        </Container>
    )
}

export default Form;