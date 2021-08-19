import ReactPlayer from 'react-player';

function Noticias2() {
    return (

        <div style={{ backgroundColor: 'white', marginBottom: '10%', }}>
            <div className='container' >
            <div className='row'>
                    <div id='noticias' className='col-md-12'>
                        <center style={{ color: '#960202', }} >
                            <h1 style={{ textAlign: 'center', color: '#960202', marginBottom: '10%', marginTop: '20%' }}>Notícias</h1>
                        </center>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6'>
                        <center>
                            <img width='90%' src='https://jonz.com.br/bzuzarte/conteudo/Barbara-foto-Circulo-1.png' />
                        </center>
                    </div>
                    <div className='col-md-6'>
                        <center style={{ color: '#960202', }} >
                            <h1 style={{ textAlign: 'center', color: '#960202', marginBottom: '10%', marginTop: '20%' }}>São diversos os recursos a serem utilizados em uma consulta.</h1>
                        </center>
                    </div>

                </div>
                <div className='row'>

                    <div className='col-md-4' style={{ textAlign: 'center', color: '#960202' }}>
                        <hr></hr>
                        <h2 style={{ fontFamily: 'roboto', color: '#960202', marginBottom: '5%', textAlign: 'center' }}>🔸 Peridell </h2>
                        <h4 style={{ fontFamily: 'roboto', color: '#960202', textAlign: 'center' }}> É usado como massageador e dessensibilizador por ter vibro  </h4>
                    </div>
                    <div className='col-md-4' style={{ textAlign: 'center', color: '#960202' }}>
                        <hr></hr>
                        <h2 style={{ fontFamily: 'roboto', color: '#960202', marginBottom: '5%', textAlign: 'center' }}>🔸Dilatadores</h2>
                        <h4 style={{ fontFamily: 'roboto', color: '#960202', textAlign: 'center' }}> Também podem ser utilizados como massageadores e, no caso desses, podem ser usados quentes ou gelados também, dependendo do objetivo do tratamento. </h4>
                    </div>
                    <div className='col-md-4' style={{ textAlign: 'center', color: '#960202' }}>
                        <hr></hr>
                        <h2 style={{ fontFamily: 'roboto', color: '#960202', marginBottom: '5%', textAlign: 'center' }}>🔸 Dualpex plus</h2>
                        <h4 style={{ fontFamily: 'roboto', color: '#960202', textAlign: 'center' }}> Usado como Biofeedback ou eletroestimulador, para treino de músculos do assoalho pélvico ou para analgesia.  </h4>
                    </div>
                </div>

                <div className='row'>

                    <div className='col-md-4' style={{ textAlign: 'center', color: '#960202' }}>
                        <hr></hr>
                        <h2 style={{ fontFamily: 'roboto', color: '#960202', marginBottom: '5%', textAlign: 'center' }}>🔸Educador perineal </h2>
                        <h4 style={{ fontFamily: 'roboto', color: '#960202', textAlign: 'center' }}> Tem como objetivo também treino e um feedback visual de como realizar a contração de forma correta. </h4>
                    </div>
                    <div className='col-md-4' style={{ textAlign: 'center', color: '#960202' }}>
                        <hr></hr>
                        <h2 style={{ fontFamily: 'roboto', color: '#960202', marginBottom: '5%', textAlign: 'center' }}>🔸Laser</h2>
                        <h4 style={{ fontFamily: 'roboto', color: '#960202', textAlign: 'center' }}> Ainda com poucas evidências, mas tem sido bem utilizado em casos de dor pélvica e fissura/ laceração perineal. </h4>
                    </div>
                    <div className='col-md-4' style={{ textAlign: 'center', color: '#960202' }}>
                        <hr></hr>
                        <h2 style={{ fontFamily: 'roboto', color: '#960202', marginBottom: '5%', textAlign: 'center' }}>🔸Cones vaginais</h2>
                        <h4 style={{ fontFamily: 'roboto', color: '#960202', textAlign: 'center' }}> São utilizados para fortalecimento da musculatura pélvica.  </h4>
                    </div>
                </div>

                {/* <div className='row'>
                    <div className='col-md-6' style={{ textAlign: 'center', color: '#960202' }}>
                        <h1 style={{ fontFamily: 'roboto', color: '#960202', textAlign: 'center', color: '#960202', marginBottom: '10%', marginTop: '20%' , textAlign: 'center' }}>Educador perineal: você já conhecia?</h1>
                        <h3 style={{ fontFamily: 'roboto', color: '#960202', textAlign: 'center' }}>Usamos o educador para ensinar para as pacientes o jeito certo de contrair os músculos pélvicos.
                            Quando a contração certa é realizada, a antena direciona para baixo. Não mover ou mover para cima pode indicar pouca contração ou contração errada
                            (quando a força é para expulsar em vez de puxar para dentro).
                            Obs: Não faça uso sem antes passar por uma avaliação, nem toda paciente tem indicação para usar! Procure um profissional especializado ☺️  </h3>
                    </div>
                    <div className='col-md-6' style={{textAlign: 'center', color: '#960202', marginBottom: '10%', marginTop: '20%'}} >
                        <ReactPlayer url="https://www.youtube.com/watch?v=rGb2DNFVbaI" controls />
                    </div>
                </div> */}

                <div className='row'>
                <div className='col-md-12' style={{ marginTop: '20%', }}>
                    <center>
                        <img src='https://jonz.com.br/bzuzarte/rodape.png' />
                    </center>

                </div>
            </div>
            </div>
        </div>

    )
}


export default Noticias2