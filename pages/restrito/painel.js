
function Painel(){
    return(
        <div onMouseOver={verificaToken}>
            <div className="container">
            <div className="row" id="paginaDesabilitada" style={{display:'block'}}>
                    <div className="col-md-12">
                        <h4 style={{textAlign:"center",}}>Pagina Restrita</h4>
                    </div>

                </div>
                <div className="row" id="paginaRestrita" style={{display:'none'}}>
                    <div className="col-md-12">
                    <h4 style={{textAlign:"center", }}>Painel !</h4>

                    <button onClick={Sair} >Sair</button>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Painel

function verificaToken(){
    let meuToken = localStorage.getItem('Token');
    if(meuToken == 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'){
        let paginaRestrita = document.getElementById('paginaRestrita');
        paginaRestrita.style.display = 'block';
        let paginaDesabilitada = document.getElementById('paginaDesabilitada');
        paginaDesabilitada.style.display = 'none';
    }else{
        let paginaRestrita = document.getElementById('paginaRestrita');
        paginaRestrita.style.display = 'none';
        let paginaDesabilitada = document.getElementById('paginaDesabilitada');
        paginaDesabilitada.style.display = 'block';
    }
}

function Sair(){
    localStorage.setItem("Token","");
    window.location.href = "http://localhost:3000/";
}