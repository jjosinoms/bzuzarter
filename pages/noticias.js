import ReactPlayer from 'react-player';

function Noticias() {
    return (
        <div style={{ backgroundColor: '#e3a8aa', }}>
            <div className='container' >
                <div className='row'>
                    <div className='col-md-12'>
                        <center style={{ color: '#960202', }} >
                            <h1 style={{ textAlign: 'center', color: '#960202', marginBottom: '10%', marginTop: '20%' }}>Notícias</h1>
                        </center>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6' style={{ textAlign: 'center', color: '#960202' }}>
                        <h1 style={{ fontFamily: 'roboto', color: '#960202', marginBottom: '5%', textAlign: 'center' }}>Educador perineal: você já conhecia?</h1>
                        <h3 style={{ fontFamily: 'roboto', color: '#960202', textAlign: 'center' }}>Usamos o educador para ensinar para as pacientes o jeito certo de contrair os músculos pélvicos.
                            Quando a contração certa é realizada, a antena direciona para baixo. Não mover ou mover para cima pode indicar pouca contração ou contração errada
                            (quando a força é para expulsar em vez de puxar para dentro).
                            Obs: Não faça uso sem antes passar por uma avaliação, nem toda paciente tem indicação para usar! Procure um profissional especializado ☺️  </h3>
                    </div>
                    <div className='col-md-6' >
                        <ReactPlayer url="https://www.youtube.com/watch?v=rGb2DNFVbaI" controls />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12' style={{ marginTop: '20%', marginBottom: '10%' }}>
                        {/* <h1>Recursos a serem utilizados em uma consulta</h1> */}

                    </div>
                </div>
            </div>
        </div>

    )
}


export default Noticias