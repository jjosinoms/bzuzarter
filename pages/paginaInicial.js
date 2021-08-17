import React from 'react'
import Menu from './menu'
import Slogan from './slogan'
import Rodape from './rodape'
import Conteudo from './conteudo'
import PrimeiraParte from './primeiraParte'

function PaginaInicial() {
    return (
        <div>
            <div className="Teste">
                <Menu />
                <PrimeiraParte />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12" >

                        <Slogan />
                        <Conteudo />
                        <Rodape />

                    </div>
                </div>
            </div>
        </div>
    )
}


export default PaginaInicial;