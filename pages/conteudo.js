import React from 'react'

function Conteudo() {
    return (
        <div>
            <hr></hr>
            <div className="row">
                <div className="col-md-12">
                    <div className="">
                        <img width="100%" src="https://jonz.com.br/bzuzarte/conteudo/quem_sou_eu.jpg" />
                    </div>
                </div>
            </div>
            <hr></hr>
            {/* Segundo bloco de itens */}
            <div id="noticias" className="col-md-12">
                <h2 style={{ textAlign: "center", fontFamily: 'roboto', marginTop: '3%' }}>Notícias</h2>
            </div>
            <div className="row" style={{ marginTop: '15%' }} >
                <div className="col-md-6">
                    <img width="100%" src="https://jonz.com.br/bzuzarte/conteudo/pq_devo_passar_por_uma_avaliacao.jpg" />
                </div>
                <div className="col-md-6">
                    <p style={{ fontFamily: 'roboto', marginTop: '3%', marginBottom: '3%', textAlign: "center" }}>Muitos pacientes me perguntam por que precisam ser avaliados antes do tratamento ser iniciado ...</p>
                    <p hidden="hidden" style={{ fontFamily: 'roboto' }}>Muitos pacientes me perguntam por que precisam ser avaliados antes do tratamento ser iniciado, e sempre me pego tendo que explicar que a avaliação, em qualquer área da fisioterapia, é tão importante quanto o tratamento em si. É através da avaliação que conseguimos entender o que está acontecendo com o Assoalho Pélvico, e até onde podemos, ou não, reabilitar e reestabelecer a funcionalidade dessa musculatura.
                    .
                    Dentro da anamnese percebemos como traumas anteriores, hábitos de vida, histórico familiar, medicações, dentre outros fatores, podem influenciar na condição atual. Através do exame físico percebemos também o que precisa ser trabalhado durante o tratamento, como força, resistência, relaxamento muscular, coordenação, etc.
                    .
                    O paciente é avaliado na primeira consulta e reavaliado a cada sessão realizada, onde percebemos e mostramos a evolução diária até o dia da alta.
                    .
                    E você? Agora que já sabe a importância da avaliação, está esperando o que pra marcar a sua?</p>
                    <button style={{ fontFamily: 'roboto', marginTop: '3%', marginBottom: '3%', textAlign: "center" }} className="btn btn-primary float-left">Saiba mais</button>
                </div>

            </div>
            <div className="row" style={{ marginTop: '15%' }} >
                <div className="col-md-6">
                    <p style={{ fontFamily: 'roboto' }}>Uma coisa que escuto muito de pacientes de Fisioterapia convencional, amigos e parentes é “mas o que é a fisioterapia pélvica?”. Por ser uma área ainda em crescimento, poucas são as pessoas que conhecem essa especialidade dentro da fisioterapia.
                    .
                    A fisioterapia pélvica visa avaliar, tratar e previnir as disfunções do assoalho pélvico, como distúrbios miccionais, sexuais, coloproctológicos , além do trabalho feito com gestantes e puérparas. Não fazemos apenas “fortalecimento” dos músculos pélvicos, e sim reestabelecemos a função dessa musculatura através de diversas técnicas.
                    .
                    O tratamento fisioterapêutico é hoje considerado de primeira linha em diversos casos, antes mesmo da cirurgia, e tem sido bastante indicado por médicos Urologistas, Ginecologistas, Obstetras e Proctologistas.
                    .
                    E você? Precisa de tratamento? Conhece alguém que precisa? Agende uma avaliação e inicie já o seu!! 🌺</p>
                    <button style={{ fontFamily: 'roboto', marginTop: '3%', marginBottom: '3%', textAlign: "center" }} className="btn btn-primary float-right">Saiba mais</button>
                </div>
                <div className="col-md-6">
                    <img width="100%" src="https://jonz.com.br/bzuzarte/conteudo/o_que_e_fisioterapia_pelvica.jpg" />
                </div>
            </div>
            <div className="row" style={{ marginTop: '15%' }} >
                <div className="col-md-6">
                    <img width="100%" src="https://jonz.com.br/bzuzarte/conteudo/anorgasmia_incapacidade_de_atingir_orgasmo.jpg" />
                </div>
                <div className="col-md-6">

                    <p style={{ fontFamily: 'roboto' }}>Muitos pacientes me perguntam por que precisam ser avaliados antes do tratamento ser iniciado, e sempre me pego tendo que explicar que a avaliação, em qualquer área da fisioterapia, é tão importante quanto o tratamento em si. É através da avaliação que conseguimos entender o que está acontecendo com o Assoalho Pélvico, e até onde podemos, ou não, reabilitar e reestabelecer a funcionalidade dessa musculatura.
                    .
                    Dentro da anamnese percebemos como traumas anteriores, hábitos de vida, histórico familiar, medicações, dentre outros fatores, podem influenciar na condição atual. Através do exame físico percebemos também o que precisa ser trabalhado durante o tratamento, como força, resistência, relaxamento muscular, coordenação, etc.
                    .
                    O paciente é avaliado na primeira consulta e reavaliado a cada sessão realizada, onde percebemos e mostramos a evolução diária até o dia da alta.
                    .
                    E você? Agora que já sabe a importância da avaliação, está esperando o que pra marcar a sua?</p>
                    <button style={{ fontFamily: 'roboto', marginTop: '3%', marginBottom: '3%', textAlign: "center" }} className="btn btn-primary float-left">Saiba mais</button>
                </div>
            </div>
        </div>
    )
}


export default Conteudo