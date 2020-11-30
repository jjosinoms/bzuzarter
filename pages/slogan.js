import React from 'react';

function Slogan() {
    return (

        <div className="container">
            {/* Primeiro bloco de itens */}
            <div className="row" style={{ marginTop: '5%' }}>
                <div className="col-md-6">

                    <div className="container">
                        <h1 className="display-4" style={{ textAlign: "center", fontFamily: 'roboto' }} >Barbara Zuzarte</h1>
                        <p className="lead" style={{ textAlign: "center", fontFamily: 'roboto' }}>Fisioterapeuta 🐍⚡
                        Especializada Uroginecologia/Obstetrícia🌺
                        Instrutora Pilates clínico 🤸🏻‍♀️
                        📌 Vila da Penha/RJ</p><br></br>
                        <p style={{ textAlign: "center", fontFamily: 'roboto' }}>
                            Uma breve apresentação pra quem está chegando agora 🥰
                            .
                            Sou fisioterapeuta desde 2016, assim como sou instrutora de Pilates. Em 2018 concluí minha especialização em Uroginecologia e Obstetrícia e atuo na área desde então.
                            .
                            Além dessa formação, tenho alguns cursos de extensão na área:
                            - Treinamento em fisioterapia pélvica: Uroginecologia Funcional - Patrícia Zaidan
                            - Disfunções Sexuais Femininas - Urofisio
                            - Fisioterapia na Bexiga Neurogênica - Laise Veloso
                            - Prescrição para Eletroestimulação e Biofeedback- Patrícia Zaidan
                            - Fisioterapia nas Disfunções anorretais e evidências em Eletroterapia nas Disfunções Pélvicas - Urofisio
                            - Fisioterapia Manual nas Disfunções Pélvicas - Ericka Valentin, Virgínia Riccobene e Lilian Ponzoni
                            - Laserterapia em Uroginecologia- Urofisio
                            - Avançado em Vulvodinia - Urofisio
                            - Avaliação e Condutas na Diástase Abdominal - Saúde Perineal
                            - Exercícios na Gestação e preparação para o parto- Liris Wuo
                            .
                            .
                            .
                            Sejam bem vindos e, sempre que precisarem, podem chamar no direct. Seja para tirar dúvidas, ter orientação ou marcar uma avaliação ☺️
                        </p>

                    </div>

                </div>
                <div className="col-md-6" style={{  }}>
                    <img src="https://jonz.com.br/bzuzarte/foto_principal_sem_fundo.png" style={{ textAlign: "center", borderRadius: '50%' }} width="75%" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-10">

                </div>
            </div>
            {/* Segundo bloco de itens */}
            <div id="noticias" className="row" style={{ marginTop: '15%' }} >
                <div className="col-md-4">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Fluid jumbotron</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Fluid jumbotron</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Fluid jumbotron</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slogan;