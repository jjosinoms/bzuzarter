
function Painel() {
    return (
        <div >
            <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <div onMouseOver={verificaToken}>
                <div className="container">
                    <div className="row" id="paginaDesabilitada" style={{ display: 'block' }}>
                        <div className="col-md-12">
                            <h4 style={{ textAlign: "center", }}>Pagina Restrita</h4>
                        </div>

                    </div>
                    <div className="row" id="paginaRestrita" style={{ display: 'none' }}>
                        <div className="col-md-12">
                            <h4 style={{ textAlign: "center", }}>Painel !</h4>

                            <button className="float-right" onClick={Sair} >Sair</button>
                        </div>
                        <br></br>
                        <div className="col-md-12">
                            <iframe src="https://calendar.google.com/calendar/embed?src=q3nc1glsr18a6r4lidt18l9i6uiqr7uf%40import.calendar.google.com&ctz=America%2FSao_Paulo" style={{ border: '0', width: '1920', height: '1080', frameborder: '0', scrolling: 'no' }}></iframe>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Painel

function verificaToken() {
    let meuToken = localStorage.getItem('Token');
    if (meuToken == 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c') {
        let paginaRestrita = document.getElementById('paginaRestrita');
        paginaRestrita.style.display = 'block';
        let paginaDesabilitada = document.getElementById('paginaDesabilitada');
        paginaDesabilitada.style.display = 'none';
    } else {
        let paginaRestrita = document.getElementById('paginaRestrita');
        paginaRestrita.style.display = 'none';
        let paginaDesabilitada = document.getElementById('paginaDesabilitada');
        paginaDesabilitada.style.display = 'block';
    }
}

function Sair() {
    localStorage.setItem("Token", "");
    window.location.href = "https://bzuzarter.vercel.app/";
}