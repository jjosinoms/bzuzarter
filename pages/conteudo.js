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
            <hr style={{ marginTop: '5%' }}></hr>
            {/* Segundo bloco de itens */}
            <div id="noticias" className="col-md-12">
                <h2 style={{ textAlign: "center", fontFamily: 'roboto', marginTop: '3%' }}>Notícias</h2>
            </div>
            <div className="row flex-row" style={{ marginTop: '15%', }} >
                <div className="col-md-6">
                    <img style={{ borderRadius: '10%' }} width="100%" src="https://jonz.com.br/bzuzarte/conteudo/pq_devo_passar_por_uma_avaliacao.jpg" />
                </div>
                <div className="col-md-6">
                    <p style={{ fontFamily: 'roboto', marginTop: '3%', marginBottom: '3%', textAlign: "center" }}>Muitos pacientes me perguntam por que precisam ser avaliados antes do tratamento ser iniciado e sempre me pego tendo que explicar que a avaliação , em qualquer área da fisioterapia, é tão importante quanto o tratamento em si. </p>
                    <p id="conteudo1" style={{ fontFamily: 'roboto', display: 'none' }}> É através da avaliação que conseguimos entender o que está acontecendo com o Assoalho Pélvico, e até onde podemos, ou não, reabilitar e reestabelecer a funcionalidade dessa musculatura.
                    .
                    Dentro da anamnese percebemos como traumas anteriores, hábitos de vida, histórico familiar, medicações, dentre outros fatores, podem influenciar na condição atual. Através do exame físico percebemos também o que precisa ser trabalhado durante o tratamento, como força, resistência, relaxamento muscular, coordenação, etc.
                    .
                    O paciente é avaliado na primeira consulta e reavaliado a cada sessão realizada, onde percebemos e mostramos a evolução diária até o dia da alta.
                    .
                    E você? Agora que já sabe a importância da avaliação, está esperando o que pra marcar a sua?</p>
                    <button onClick={mostrarConteudo1} id="mostrarConteudo1" style={{ fontFamily: 'roboto', marginTop: '3%', marginBottom: '5%', textAlign: "center" }} className="btn btn-danger float-right">Saiba mais</button>
                    <button onClick={esconderConteudo1} id="esconderConteudo1" style={{ fontFamily: 'roboto', marginTop: '3%', marginBottom: '5%', textAlign: "center", display: 'none' }} className="btn btn-light float-right">Mostrar menos</button>
                </div>

            </div>
            <div className="row flex-row-reverse" style={{ marginTop: '15%' }} >
                <div className="col-md-6 ">
                    <img style={{ borderRadius: '10%' }} width="100%" src="https://jonz.com.br/bzuzarte/conteudo/o_que_e_fisioterapia_pelvica.jpg" />
                </div>
                <div className="col-md-6">
                    <p style={{ fontFamily: 'roboto', marginTop: '3%', marginBottom: '3%', textAlign: "center" }}>Uma coisa que escuto muito de pacientes de Fisioterapia convencional, amigos e parentes é “mas o que é a fisioterapia pélvica?”.</p>
                    <p id="conteudo2" style={{ fontFamily: 'roboto', display: 'none' }}> Por ser uma área ainda em crescimento, poucas são as pessoas que conhecem essa especialidade dentro da fisioterapia.
                    .
                    A fisioterapia pélvica visa avaliar, tratar e previnir as disfunções do assoalho pélvico, como distúrbios miccionais, sexuais, coloproctológicos , além do trabalho feito com gestantes e puérparas. Não fazemos apenas “fortalecimento” dos músculos pélvicos, e sim reestabelecemos a função dessa musculatura através de diversas técnicas.
                    .
                    O tratamento fisioterapêutico é hoje considerado de primeira linha em diversos casos, antes mesmo da cirurgia, e tem sido bastante indicado por médicos Urologistas, Ginecologistas, Obstetras e Proctologistas.
                    .
                    E você? Precisa de tratamento? Conhece alguém que precisa? Agende uma avaliação e inicie já o seu!! 🌺</p>
                    <button onClick={mostrarConteudo2} id="mostrarConteudo2" style={{ fontFamily: 'roboto', marginTop: '3%', marginBottom: '5%', textAlign: "center" }} className="btn btn-danger float-right">Saiba mais</button>
                    <button onClick={esconderConteudo2} id="esconderConteudo2" style={{ fontFamily: 'roboto', marginTop: '3%', marginBottom: '5%', textAlign: "center", display: 'none' }} className="btn btn-light float-right">Mostrar menos</button>

                </div>

            </div>
            <div className="row flex-row" style={{ marginTop: '15%' }} >
                <div className="col-md-6 ">
                    <img style={{ borderRadius: '10%' }} width="100%" src="https://jonz.com.br/bzuzarte/conteudo/anorgasmia_incapacidade_de_atingir_orgasmo.jpg" />
                </div>
                <div className="col-md-6">
                    <p style={{ display: 'block', fontFamily: 'roboto', marginTop: '3%', marginBottom: '3%', textAlign: "center" }}>❇️Você já ouviu falar em anorgasmia? ❇️
                    .
                    ⚠️ Para Parisotto (2010), a anorgasmia é descrita como falta de prazer orgástico depois de um tempo de excitação normal. </p>
                    <p id="conteudo3" style={{ fontFamily: 'roboto', display: 'none' }}>Medeiros; Braz (2004) definem  como a dificuldade de alcançar o orgasmo. Estes ainda enfatizam que a anorgasmia não deve ser confundida com frigidez, pois no caso da mulher que é anorgásmica há interesse sexual e todas as respostas satisfatórias para que o mesmo ocorra. Pratas; Dias (2008), salientam que, em relação, à mulher atingir o clímax em uma relação sexual ocorre contrações da musculatura genital, quando este fenômeno não ocorre a mulher apresenta um quadro de anorgasmia.
                    .
                    ⚠️ Para Galvão, Abuchaim e Colaboradores (2011), a anorgasmia pode ser dividida em primária e secundária. Sua forma primária é quando uma mulher nunca experimentou um orgasmo, enquanto que, na secundária ela possuía orgasmos, só que, de alguma forma passou a não mais apresentá-los.
                    .
                    De acordo com Tozo et al., (2007), estudos demonstraram que mulheres com idade entre 18 a 59 anos apresentam disfunções sexuais, somando o percentual de 20% a 40%.
                    .
                    A mulher que não possui orgasmo deveria buscar meios de conhecer o que se caracteriza como anorgasmia e qual a sua prevalência. A Fisioterapia Pélvica contribui, através de exercícios, educação sexual e outras orientações, para que esse quadro se reverta e que a mulher se descubra!
                    .<br></br><br></br>
                        <b >Fonte: Dias, et. al. Anorgasmia Feminina. Revista Interfaces: Saúde, Humanas e Tecnologia, Vol. 2, Nº 6, Ano 2, 2014</b></p>
                    <button onClick={mostrarConteudo3} id="mostrarConteudo3" style={{ fontFamily: 'roboto', marginTop: '5%', marginBottom: '3%', textAlign: "center" }} className="btn btn-danger float-right">Saiba mais</button>
                    <button onClick={esconderConteudo3} id="esconderConteudo3" style={{ fontFamily: 'roboto', marginTop: '5%', marginBottom: '3%', textAlign: "center", display: 'none' }} className="btn btn-light float-right">Mostrar menos</button>
                </div>
            </div>
            <hr style={{ marginTop: '5%' }}></hr>
            {/* <div className="row flex-row-reverse" style={{ marginTop: '5%' }} >
                <div className="col-md-6" style={{ padding: '5%' }} >
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe preload="none" className="embed-responsive-item" src="https://jonz.com.br/bzuzarte/conteudo/incontinencia_urinaria_de_esforco.mp4"></iframe>
                    </div>
                </div>
                <div className="col-md-6 " style={{ padding: '5%' }}>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe preload="none" className="embed-responsive-item" src="https://jonz.com.br/bzuzarte/conteudo/importancia_hidratacao.mp4"></iframe>
                    </div>
                </div>
            </div> */}
            <hr style={{ marginBottom: '5%' }}></hr>

        </div>
    )
}




function mostrarConteudo1() {
    // Meus scripts

    $(document).ready(function () {

        $("#conteudo1").css("display", "block");
        $("#mostrarConteudo1").hide();
        $("#esconderConteudo1").css("display", "block");


    });
}
function esconderConteudo1() {
    // Meus scripts

    $(document).ready(function () {

        $("#conteudo1").css("display", "none");
        $("#esconderConteudo1").css("display", "none");
        $("#mostrarConteudo1").show();


    });
}
function mostrarConteudo2() {
    // Meus scripts

    $(document).ready(function () {

        $("#conteudo2").css("display", "block");
        $("#mostrarConteudo2").hide();
        $("#esconderConteudo2").css("display", "block");


    });
}
function esconderConteudo2() {
    // Meus scripts

    $(document).ready(function () {

        $("#conteudo2").css("display", "none");
        $("#esconderConteudo2").css("display", "none");
        $("#mostrarConteudo2").show();


    });
}

function mostrarConteudo3() {
    // Meus scripts

    $(document).ready(function () {

        $("#conteudo3").css("display", "block");
        $("#mostrarConteudo3").hide();
        $("#esconderConteudo3").css("display", "block");


    });
}

function esconderConteudo3() {
    // Meus scripts

    $(document).ready(function () {

        $("#conteudo3").css("display", "none");
        $("#esconderConteudo3").css("display", "none");
        $("#mostrarConteudo3").show();


    });
}




export default Conteudo