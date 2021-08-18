import React from 'react'
import Menu from './menu'
import PrimeiraParte from './primeiraParte'
import Servicos from './servicos'
import QuemSou from './quemSou'
import FisioPelvica from './fisioPelvica'
import Noticias from './noticias'
import Noticias2 from './noticias2'
import Rodape from './rodape'

function PaginaInicial() {
    return (
        <div>
            <div className="Teste">
                <Menu />
                <PrimeiraParte />
            </div>
            
                <div className="row">
                    <div className="col-md-12" >
                        <Servicos />
                        <QuemSou />
                        <FisioPelvica />
                        <Noticias />
                        <Noticias2 />
                        <Rodape />

                    </div>
                </div>
           
        </div>
    )
}


export default PaginaInicial;