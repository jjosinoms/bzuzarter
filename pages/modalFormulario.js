import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


// para funcionar a Modal é necessario instalar " npm install @material-ui/core "


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 10, 5),
    },
}));

function MinhaModal() {

    // CADASTRO DO USUARIO PELA MODAL

    const registerUser = async event => {
        event.preventDefault() // don't redirect the page
        // where we'll add our form logic
        const res = await fetch('/api/mensagemAPI',
            {
                body: JSON.stringify({
                    nome: event.target.nome.value,
                    telefone: event.target.telefone.value,
                    email: event.target.email.value,
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )

        const result = await res.json()
        handleClose();
        alert("Consulta registrada!")
        
    }
    // FIM CODIGO CADASTRO USUARIO 
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <h3 style={{ textAlign: 'center', marginTop: '5%', marginBottom: '10%', float: 'inline-end', fontFamily: 'roboto', color: '#960202', }}> <button onClick={handleOpen} className='btn btn-danger btn-lg'>Agendar Consulta</button></h3>
            {/* <button type="button" onClick={handleOpen}>
                react-transition-group
            </button> */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper} >

                        <h2 style={{ textAlign: 'center' }}>Agendar Consulta</h2><br></br>
                        <form className="form-inline col-md-8" onSubmit={registerUser}>
                            <div className='row' >
                                <div className='col-md-4'>
                                    <h4>Nome</h4>
                                    <input size="10" className="form-control" type="text" name="nome" id="nome" placeholder="Nome"></input>
                                </div>
                                <div className='col-md-4'>
                                    <h4>E-Mail</h4>
                                    <input size="10" className="form-control" type="email" name="email" id="email" placeholder="E-Mail" ></input>
                                </div>
                                <div className='col-md-4'>
                                    <h4>Telefone</h4>
                                    <input size="10" className="form-control" type="text" name="telefone" id="telefone" placeholder="(21) 99999-9999"></input>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-2'><br></br>
                                </div>
                                <div className='col-md-10'>
                                    <button style={{ float: 'right' }} className="btn btn-success" type="submit" >Cadastrar</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </Fade>
            </Modal>
        </div >
    );
}

export default MinhaModal