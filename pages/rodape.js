import react from 'react';


function Rodape() {
    return (
        <div >
            <div className="row">
                <div className="col-md-12" style={{ backgroundColor: 'rgb(248, 249, 250)' }}>
                    <footer className="footer">
                        <div className="container" style={{ textAlign: "center", marginBottom: '3%', }}>

                            <div className="col-md-12">
                                <span style={{ fontFamily: 'roboto' }} className="text-muted"><p>Endereço: Av. Vicente de Carvalho, 909, Sala 1012 -</p><a href="bzuzarte@gmail.com"> E-Mail</a>  - Telefone: (21) 98897-0094 - <a href="https://www.instagram.com/bzuzartepelvica/">Instagram </a></span>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <p style={{ fontFamily: 'roboto', textAlign: "center" }}> © Todos direitos reservados <a href="https://jonz.com.br"> Jonas</a> </p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}


export default Rodape;