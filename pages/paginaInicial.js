import React from 'react'
import Menu from './menu'
import PrimeiraParte from './primeiraParte'
import Servicos from './servicos'
import QuemSou from './quemSou'
import FisioPelvica from './fisioPelvica'
import Noticias2 from './noticias2'
import InstagramFeed from './instagram'
import Rodape from './rodape'

function PaginaInicial() {
    return (
        <div>
            <Menu />
            <PrimeiraParte />

            <Servicos />
            <FisioPelvica />
            <Noticias2 />
            <InstagramFeed />
            <QuemSou />
            <Rodape />


        </div>

    )
}


export default PaginaInicial;