import React from 'react'
import Menu from './menu'
import Slogan from './slogan'
import Rodape from './rodape'
import Conteudo from './conteudo'

function PaginaInicial() {
    return (
        <div>
            <link rel="stylesheet" href='../'></link>
            <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

            <div className="row">
                <div className="col-md-12" >
                    <Menu />
                    <Slogan />
                    <Conteudo />
                    <Rodape />

                </div>
            </div>
        </div>
    )
}


export default PaginaInicial;